import React from 'react';

const TrianglesPattern = () => {
  const rows = 10; 
  const triangles = 5; 

  const renderTriangles = () => {
    const pattern = [];

    for (let i = 0; i < rows; i++) {
      let row = "";

      for (let j = 0; j < triangles; j++) {
        if (j % 2 === 0) {
          row += "*".repeat(rows - i) + " "; 
        } else {
          row += "*".repeat(i + 1) + " "; 
        }
      }

      pattern.push(<div key={i}>{row}</div>);
    }

    return pattern;
  };

  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {renderTriangles()}
    </div>
  );
};

export default TrianglesPattern;
