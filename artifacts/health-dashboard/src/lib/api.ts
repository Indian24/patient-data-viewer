import type { Patient } from "../types";
import { SAMPLE_PATIENTS, SAMPLE_JESSICA } from "./sampleData";

const API_URL = (import.meta.env.VITE_API_URL as string) ?? "https://fedskillstest.coalitiontechnologies.workers.dev";
const USERNAME = "coalition";
const PASSWORD = "skills-test";

function getAuthHeader(): string {
  try {
    const credentials = `${USERNAME}:${PASSWORD}`;
    const encoded = typeof btoa === "function" ? btoa(credentials) : Buffer.from(credentials).toString("base64");
    return `Basic ${encoded}`;
  } catch (err) {
    return "";
  }
}

export interface FetchResult {
  all: Patient[];
  jessica: Patient;
}

export async function fetchPatients(): Promise<FetchResult> {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: getAuthHeader(),
      },
    });

    if (response.ok) {
      const all: Patient[] = await response.json();
      const jessica = all.find((p) => p.name === "Jessica Taylor");
      if (jessica) return { all, jessica };
    }
    // Fall through to sample on non-ok or missing jessica
    console.warn("Falling back to local sample data for Jessica Taylor.");
  } catch (err) {
    // Network error or CORS; fall back to sample data
    // eslint-disable-next-line no-console
    console.warn("API fetch failed, using sample data:", err);
  }

  return { all: SAMPLE_PATIENTS, jessica: SAMPLE_JESSICA };
}

const MONTH_ORDER: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

export function sortDiagnosisHistory(history: Patient["diagnosis_history"]) {
  return [...history].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return (MONTH_ORDER[a.month] ?? 0) - (MONTH_ORDER[b.month] ?? 0);
  });
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
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
