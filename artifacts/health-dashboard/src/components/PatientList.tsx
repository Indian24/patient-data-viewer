import { useState, useRef, useEffect } from "react";
import type { Patient } from "../types";

interface Props {
  patients: Patient[];
  selected: Patient | null;
  onSelect: (p: Patient) => void;
}

export default function PatientList({ patients, selected, onSelect }: Props) {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    } else {
      setQuery("");
    }
  }, [searchOpen]);

  const filtered = query.trim()
    ? patients.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    : patients;

  return (
    <aside className="patient-list">
      <div className="patient-list-header">
        <h2 className="patient-list-title">Patients</h2>
        <button
          className={`icon-btn search-toggle ${searchOpen ? "search-toggle-active" : ""}`}
          aria-label={searchOpen ? "Close search" : "Search patients"}
          onClick={() => setSearchOpen((o) => !o)}
        >
          {searchOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          )}
        </button>
      </div>

      <div className={`search-bar-wrap ${searchOpen ? "search-bar-visible" : ""}`}>
        <div className="search-bar">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            type="search"
            className="search-input"
            placeholder="Search patients…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search patients"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery("")} aria-label="Clear search">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
        {query && (
          <p className="search-count">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <ul className="patient-items">
        {filtered.length === 0 ? (
          <li className="search-empty">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span>No patients match<br /><strong>"{query}"</strong></span>
          </li>
        ) : (
          filtered.map((patient) => {
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
                  <span className="patient-name">{highlightMatch(patient.name, query)}</span>
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
          })
        )}
      </ul>
    </aside>
  );
}

function highlightMatch(name: string, query: string) {
  if (!query.trim()) return <>{name}</>;
  const idx = name.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{name}</>;
  return (
    <>
      {name.slice(0, idx)}
      <mark className="search-highlight">{name.slice(idx, idx + query.length)}</mark>
      {name.slice(idx + query.length)}
    </>
  );
}
