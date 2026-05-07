import type { Patient } from "../types";
import { formatDate } from "../lib/api";

interface Props {
  patient: Patient;
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="profile-info-row">
      <span className="profile-info-icon">{icon}</span>
      <div className="profile-info-text">
        <span className="profile-info-label">{label}</span>
        <span className="profile-info-value">{value}</span>
      </div>
    </div>
  );
}

export default function PatientProfile({ patient }: Props) {
  return (
    <aside className="patient-profile">
      <div className="profile-photo-wrap">
        <img
          src={patient.profile_picture}
          alt={patient.name}
          className="profile-photo"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.name)}&background=E8F3FF&color=6B7280&size=200`;
          }}
        />
      </div>
      <h2 className="profile-name">{patient.name}</h2>

      <div className="profile-info-list">
        <InfoRow
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          }
          label="Date Of Birth"
          value={formatDate(patient.date_of_birth)}
        />
        <InfoRow
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          }
          label="Gender"
          value={patient.gender}
        />
        <InfoRow
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86A16 16 0 0 0 15.14 16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
          label="Contact Info."
          value={patient.phone_number}
        />
        <InfoRow
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86A16 16 0 0 0 15.14 16l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
          label="Emergency Contacts"
          value={patient.emergency_contact}
        />
        <InfoRow
          icon={
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          }
          label="Insurance Provider"
          value={patient.insurance_type}
        />
      </div>

      <button className="show-all-btn">Show All Information</button>
    </aside>
  );
}
