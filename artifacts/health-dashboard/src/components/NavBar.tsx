export default function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#01F0D0" />
          <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <span className="nav-logo-text">Tech.Care</span>
      </div>

      <nav className="nav-links">
        <a href="#" className="nav-link">Overview</a>
        <a href="#" className="nav-link nav-link-active">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          Patients
        </a>
        <a href="#" className="nav-link">Schedule</a>
        <a href="#" className="nav-link">Message</a>
        <a href="#" className="nav-link">Transactions</a>
      </nav>

      <div className="nav-doctor">
        <img
          src="https://fedskillstest.ct.digital/doctor.png"
          alt="Dr. Jose Simmons"
          className="nav-doctor-avatar"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://ui-avatars.com/api/?name=Jose+Simmons&background=E8F3FF&color=6B7280&size=40";
          }}
        />
        <div className="nav-doctor-info">
          <span className="nav-doctor-name">Dr. Jose Simmons</span>
          <span className="nav-doctor-role">General Practitioner</span>
        </div>
        <div className="nav-divider" />
        <button className="nav-icon-btn" aria-label="Settings">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
        <button className="nav-icon-btn" aria-label="More options">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>
    </header>
  );
}
