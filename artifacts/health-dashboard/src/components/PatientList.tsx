import type { Patient } from "../types";

interface Props {
  patients: Patient[];
  selected: Patient | null;
  onSelect: (p: Patient) => void;
}

export default function PatientList({ patients, selected, onSelect }: Props) {
  return (
    <aside className="patient-list">
      <div className="patient-list-header">
        <h2 className="patient-list-title">Patients</h2>
        <button className="icon-btn" aria-label="Search patients">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      <ul className="patient-items">
        {patients.map((patient) => {
          const isActive = selected?.name === patient.name;
          return (
            <li
              key={patient.name}
              className={`patient-item ${isActive ? "patient-item-active" : ""}`}
              onClick={() => onSelect(patient)}
            >
              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="patient-avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=E8F3FF&color=6B7280&size=40`;
                }}
              />
              <div className="patient-info">
                <span className="patient-name">{patient.name}</span>
                <span className="patient-meta">
                  {patient.gender}, {patient.age}
                </span>
              </div>
              <button
                className="icon-btn patient-more"
                aria-label="More options"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
