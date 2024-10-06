// src/App.tsx
import React from 'react';
import html2pdf from 'html2pdf.js';
import ExecutiveSummary from './ExecutiveSummary.tsx';

const generatePDF = () => {
  const element = document.getElementById('pdf-content');
  html2pdf(element, {
    margin: 0,
    filename: 'executive-summary.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  });
};

function App() {
  return (
    <div className="App">
      <button onClick={generatePDF}>Download PDF</button>
      <div id="pdf-content">
        <ExecutiveSummary />
      </div>
    </div>
  );
}

export default App;
