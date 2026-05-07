import type { DiagnosticItem } from "../types";

interface Props {
  items: DiagnosticItem[];
}

function StatusBadge({ status }: { status: string }) {
  let className = "status-badge";
  const lower = status.toLowerCase();
  if (lower.includes("observation")) className += " status-observation";
  else if (lower.includes("cured")) className += " status-cured";
  else if (lower.includes("inactive")) className += " status-inactive";
  else className += " status-default";

  return <span className={className}>{status}</span>;
}

export default function DiagnosticList({ items }: Props) {
  return (
    <section className="diagnostic-section">
      <h3 className="section-title">Diagnostic List</h3>
      <div className="diagnostic-table-wrap">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem / Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="diag-name">{item.name}</td>
                <td className="diag-desc">{item.description}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
