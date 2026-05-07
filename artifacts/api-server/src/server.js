const http = require('http');

const PORT = process.env.PORT || 8787;

const sample = [
  {
    name: 'Jessica Taylor',
    gender: 'Female',
    age: 34,
    profile_picture: '/favicon.svg',
    date_of_birth: '1991-03-14',
    phone_number: '(555) 123-4567',
    emergency_contact: 'Michael Taylor (555) 987-6543',
    insurance_type: 'Private',
    diagnosis_history: [
      {
        month: 'March',
        year: 2024,
        blood_pressure: {
          systolic: { value: 118, levels: 'Normal' },
          diastolic: { value: 76, levels: 'Normal' },
        },
        heart_rate: { value: 72, levels: 'Normal' },
        respiratory_rate: { value: 16, levels: 'Normal' },
        temperature: { value: 98.6, levels: 'Normal' },
      },
    ],
    diagnostic_list: [
      { name: 'Hypertension', description: 'Mild', status: 'Active' },
      { name: 'High Cholesterol', description: 'Monitored', status: 'Resolved' },
    ],
    lab_results: ['CBC: Normal', 'Lipid Panel: Slightly Elevated'],
  },
];

const server = http.createServer((req, res) => {
  // Allow basic CORS for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify(sample));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Mock API server listening on http://localhost:${PORT}`);
});
