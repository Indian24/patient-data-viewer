import type { Patient } from "../types";

const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

function getAuthHeader(): string {
  const credentials = `${USERNAME}:${PASSWORD}`;
  const encoded = btoa(credentials);
  return `Basic ${encoded}`;
}

export async function fetchJessicaTaylor(): Promise<Patient> {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: getAuthHeader(),
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  const patients: Patient[] = await response.json();
  const jessica = patients.find((p) => p.name === "Jessica Taylor");

  if (!jessica) {
    throw new Error("Patient Jessica Taylor not found in API response.");
  }

  return jessica;
}

const MONTH_ORDER: Record<string, number> = {
  January: 1, February: 2, March: 3, April: 4,
  May: 5, June: 6, July: 7, August: 8,
  September: 9, October: 10, November: 11, December: 12,
};

export function sortDiagnosisHistory(history: Patient["diagnosis_history"]) {
  return [...history].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return (MONTH_ORDER[a.month] ?? 0) - (MONTH_ORDER[b.month] ?? 0);
  });
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatDate(isoDate: string): string {
  if (!isoDate) return "Unknown";
  const parts = isoDate.split("-");
  if (parts.length !== 3) return isoDate;
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (isNaN(year) || isNaN(month) || isNaN(day)) return isoDate;
  const monthName = MONTH_NAMES[month - 1] ?? "";
  return `${monthName} ${day}, ${year}`;
}
