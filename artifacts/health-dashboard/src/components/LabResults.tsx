interface Props {
  results: string[];
}

export default function LabResults({ results }: Props) {
  return (
    <section className="lab-section">
      <h3 className="section-title">Lab Results</h3>
      <ul className="lab-list">
        {results.map((result, i) => (
          <li key={i} className="lab-item">
            <span className="lab-name">{result}</span>
            <button className="lab-download" aria-label={`Download ${result}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
