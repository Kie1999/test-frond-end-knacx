import React from 'react';

function Triangle() {
  const baseLength = 19;
  const rows = [];


  for (let i = 1; i <= Math.floor(baseLength / 2) + 1; i++) {
    const spaces = ' '.repeat(Math.floor(baseLength / 2) - i + 1);
    const stars = '*'.repeat(2 * i - 1); 
    rows.push(spaces + stars);
  }

  return (
    <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {rows.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  );
}

export default Triangle;
