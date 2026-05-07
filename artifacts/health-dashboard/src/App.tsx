import { useState, useEffect } from "react";
import type { Patient } from "./types";
import { fetchJessicaTaylor } from "./lib/api";
import NavBar from "./components/NavBar";
import PatientList from "./components/PatientList";
import BloodPressureChart from "./components/BloodPressureChart";
import VitalsCards from "./components/VitalsCards";
import DiagnosticList from "./components/DiagnosticList";
import LabResults from "./components/LabResults";
import PatientProfile from "./components/PatientProfile";

export default function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [jessica, setJessica] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJessicaTaylor()
      .then((data) => {
        setJessica(data);
        setPatients([data]);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
        <p>Loading patient data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <h2>Failed to load data</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  if (!jessica) return null;

  return (
    <div className="app">
      <NavBar />
      <div className="main-layout">
        <PatientList
          patients={patients}
          selected={jessica}
          onSelect={setJessica}
        />

        <main className="content-area">
          <section className="diagnosis-section">
            <h2 className="section-heading">Diagnosis History</h2>
            <BloodPressureChart history={jessica.diagnosis_history} />
            <VitalsCards history={jessica.diagnosis_history} />
          </section>

          <DiagnosticList items={jessica.diagnostic_list} />
        </main>

        <div className="right-panel">
          <PatientProfile patient={jessica} />
          <LabResults results={jessica.lab_results} />
        </div>
      </div>
    </div>
  );
}
