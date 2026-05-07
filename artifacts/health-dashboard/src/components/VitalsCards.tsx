import type { DiagnosisHistoryEntry } from "../types";
import { sortDiagnosisHistory } from "../lib/api";

interface Props {
  history: DiagnosisHistoryEntry[];
}

interface VitalCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  unit: string;
  level: string;
  bgColor: string;
}

function VitalCard({
  icon,
  label,
  value,
  unit,
  level,
  bgColor,
}: VitalCardProps) {
  return (
    <div className="vital-card" style={{ background: bgColor }}>
      <div className="vital-icon">{icon}</div>
      <span className="vital-label">{label}</span>
      <div className="vital-value-row">
        <span className="vital-value">{value}</span>
        <span className="vital-unit">{unit}</span>
      </div>
      <span className="vital-level">{level}</span>
    </div>
  );
}

export default function VitalsCards({ history }: Props) {
  const sorted = sortDiagnosisHistory(history);
  const latest = sorted[sorted.length - 1];

  if (!latest) return null;

  return (
    <div className="vitals-grid">
      <VitalCard
        icon={
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#AEE3F5" />
            <path
              d="M20 40h8l6-14 8 28 6-18 4 10h8"
              stroke="#1A6FA3"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        label="Respiratory Rate"
        value={latest.respiratory_rate.value}
        unit="bpm"
        level={latest.respiratory_rate.levels}
        bgColor="#E0F3FA"
      />
      <VitalCard
        icon={
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#FFE4A0" />
            <path
              d="M40 22v36M24 38l6 6 10-14"
              stroke="#B87A00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="40" cy="40" r="16" stroke="#B87A00" strokeWidth="2.5" />
          </svg>
        }
        label="Temperature"
        value={latest.temperature.value}
        unit="°F"
        level={latest.temperature.levels}
        bgColor="#FFF8E6"
      />
      <VitalCard
        icon={
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#FFB3D4" />
            <path
              d="M40 54s-18-12-18-24a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 12-18 24-18 24z"
              fill="#D63A6A"
            />
          </svg>
        }
        label="Heart Rate"
        value={latest.heart_rate.value}
        unit="bpm"
        level={latest.heart_rate.levels}
        bgColor="#FFE6F1"
      />
    </div>
  );
}
