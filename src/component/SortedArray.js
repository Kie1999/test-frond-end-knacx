import React from 'react';

function SortedUniqueArray() {
  const arr = [1, 5, 7, 4, 3, 2, 1, 5, 9, 0, 4, 2, 4, 5, 7, 2];
  
  const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);

  return (
    <div>
      <h5>Array: [1, 5, 7, 4, 3, 2, 1, 5, 9, 0, 4, 2, 4, 5, 7, 2]</h5>
      <p>Ans : {uniqueSortedArr.join(", ")}</p>
    </div>
  );
}

export default SortedUniqueArray;
