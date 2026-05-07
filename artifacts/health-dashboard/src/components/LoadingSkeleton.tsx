function Bone({ className = "" }: { className?: string }) {
  return <div className={`skeleton-bone ${className}`} />;
}

function PatientRowSkeleton() {
  return (
    <div className="skeleton-patient-row">
      <Bone className="skeleton-avatar" />
      <div className="skeleton-patient-info">
        <Bone className="skeleton-name" />
        <Bone className="skeleton-meta" />
      </div>
    </div>
  );
}

export default function LoadingSkeleton() {
  return (
    <div className="app">
      <header className="nav-bar">
        <div className="nav-logo">
          <Bone className="skeleton-logo-icon" />
          <Bone className="skeleton-logo-text" />
        </div>
        <nav className="nav-links">
          {[100, 80, 90, 88, 110].map((w, i) => (
            <Bone key={i} className="skeleton-nav-link" style={{ width: w }} />
          ))}
        </nav>
        <div className="nav-doctor" style={{ gap: 10 }}>
          <Bone className="skeleton-avatar" />
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Bone style={{ width: 110, height: 11 }} />
            <Bone style={{ width: 80, height: 9 }} />
          </div>
        </div>
      </header>

      <div className="main-layout">
        <aside className="patient-list">
          <div className="patient-list-header">
            <Bone style={{ width: 80, height: 20 }} />
            <Bone className="skeleton-icon-btn" />
          </div>
          <div style={{ padding: "0 0 8px" }}>
            {Array.from({ length: 9 }).map((_, i) => (
              <PatientRowSkeleton key={i} />
            ))}
          </div>
        </aside>

        <main className="content-area">
          <section className="diagnosis-section">
            <Bone style={{ width: 180, height: 24, marginBottom: 20 }} />

            <div className="bp-section" style={{ background: "#F4F0FE" }}>
              <div className="bp-header">
                <Bone style={{ width: 130, height: 18 }} />
                <Bone style={{ width: 220, height: 32, borderRadius: 50 }} />
              </div>
              <div className="bp-content">
                <div className="bp-chart-wrap">
                  <Bone
                    style={{ width: "100%", height: 220, borderRadius: 12 }}
                  />
                </div>
                <div className="bp-stats">
                  <div className="bp-stat" style={{ gap: 8 }}>
                    <Bone
                      style={{ width: 12, height: 12, borderRadius: "50%" }}
                    />
                    <Bone style={{ width: 60, height: 13 }} />
                    <Bone style={{ width: 48, height: 32 }} />
                    <Bone style={{ width: 120, height: 12 }} />
                  </div>
                  <div className="bp-divider" />
                  <div className="bp-stat" style={{ gap: 8 }}>
                    <Bone
                      style={{ width: 12, height: 12, borderRadius: "50%" }}
                    />
                    <Bone style={{ width: 60, height: 13 }} />
                    <Bone style={{ width: 48, height: 32 }} />
                    <Bone style={{ width: 120, height: 12 }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="vitals-grid">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="vital-card"
                  style={{ background: ["#E0F3FA", "#FFF8E6", "#FFE6F1"][i] }}
                >
                  <Bone
                    style={{ width: 80, height: 80, borderRadius: "50%" }}
                  />
                  <Bone style={{ width: 110, height: 13, marginTop: 8 }} />
                  <Bone style={{ width: 70, height: 32, marginTop: 6 }} />
                  <Bone style={{ width: 55, height: 12 }} />
                </div>
              ))}
            </div>
          </section>

          <section className="diagnostic-section">
            <Bone style={{ width: 140, height: 20, marginBottom: 16 }} />
            <div className="diagnostic-table-wrap">
              <div
                style={{
                  background: "#F6F7F8",
                  padding: "12px 16px",
                  display: "flex",
                  gap: 40,
                }}
              >
                {[120, 200, 80].map((w, i) => (
                  <Bone key={i} style={{ width: w, height: 13 }} />
                ))}
              </div>
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 40,
                    padding: "14px 16px",
                    borderBottom: "1px solid #E8ECF0",
                  }}
                >
                  <Bone style={{ width: 120, height: 14 }} />
                  <Bone style={{ width: 200, height: 14 }} />
                  <Bone style={{ width: 90, height: 24, borderRadius: 50 }} />
                </div>
              ))}
            </div>
          </section>
        </main>

        <div className="right-panel">
          <div className="patient-profile">
            <Bone className="skeleton-profile-photo" />
            <Bone style={{ width: 140, height: 22, marginBottom: 16 }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="profile-info-row"
                style={{ width: "100%" }}
              >
                <Bone
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    flex: 1,
                  }}
                >
                  <Bone style={{ width: 70, height: 11 }} />
                  <Bone style={{ width: 120, height: 14 }} />
                </div>
              </div>
            ))}
            <Bone
              style={{
                width: 160,
                height: 40,
                borderRadius: 50,
                marginTop: 12,
              }}
            />
          </div>

          <div className="lab-section">
            <Bone style={{ width: 90, height: 18, marginBottom: 16 }} />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="lab-item">
                <Bone style={{ width: 130, height: 14 }} />
                <Bone style={{ width: 20, height: 20, borderRadius: 4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
