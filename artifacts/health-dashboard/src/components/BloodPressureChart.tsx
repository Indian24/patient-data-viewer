import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { DiagnosisHistoryEntry } from "../types";
import { sortDiagnosisHistory } from "../lib/api";

interface Props {
  history: DiagnosisHistoryEntry[];
}

export default function BloodPressureChart({ history }: Props) {
  const sorted = sortDiagnosisHistory(history);

  const data = sorted.map((entry) => ({
    label: `${entry.month.slice(0, 3)}, ${entry.year}`,
    systolic: entry.blood_pressure.systolic.value,
    diastolic: entry.blood_pressure.diastolic.value,
  }));

  const latest = sorted[sorted.length - 1];
  const systolicValue = latest?.blood_pressure.systolic.value ?? "--";
  const systolicLevel = latest?.blood_pressure.systolic.levels ?? "";
  const diastolicValue = latest?.blood_pressure.diastolic.value ?? "--";
  const diastolicLevel = latest?.blood_pressure.diastolic.levels ?? "";

  return (
    <div className="bp-section">
      <div className="bp-header">
        <h3 className="bp-title">Blood Pressure</h3>
        <span className="bp-range">Last 6 months</span>
      </div>

      <div className="bp-content">
        <div className="bp-chart-wrap">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 11, fill: "#6B7280" }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "#6B7280" }}
                tickLine={false}
                axisLine={false}
                domain={[40, 200]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                  fontSize: "12px",
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: "12px", paddingTop: "8px" }}
              />
              <Line
                type="monotone"
                dataKey="systolic"
                name="Systolic"
                stroke="#C26EB4"
                strokeWidth={2}
                dot={{ fill: "#C26EB4", r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                name="Diastolic"
                stroke="#7B61FF"
                strokeWidth={2}
                dot={{ fill: "#7B61FF", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bp-stats">
          <div className="bp-stat">
            <div className="bp-stat-dot" style={{ background: "#C26EB4" }} />
            <span className="bp-stat-label">Systolic</span>
            <span className="bp-stat-value">{systolicValue}</span>
            <span className={`bp-stat-level ${getLevelClass(String(systolicLevel))}`}>
              {getLevelArrow(String(systolicLevel))} {systolicLevel}
            </span>
          </div>
          <div className="bp-divider" />
          <div className="bp-stat">
            <div className="bp-stat-dot" style={{ background: "#7B61FF" }} />
            <span className="bp-stat-label">Diastolic</span>
            <span className="bp-stat-value">{diastolicValue}</span>
            <span className={`bp-stat-level ${getLevelClass(String(diastolicLevel))}`}>
              {getLevelArrow(String(diastolicLevel))} {diastolicLevel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLevelClass(level: string): string {
  if (level.toLowerCase().includes("higher")) return "level-high";
  if (level.toLowerCase().includes("lower")) return "level-low";
  return "level-normal";
}

function getLevelArrow(level: string): string {
  if (level.toLowerCase().includes("higher")) return "↑";
  if (level.toLowerCase().includes("lower")) return "↓";
  return "";
}
