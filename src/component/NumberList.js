import React from 'react';

const NumberList = () => {
  let numbers = [];
  
  for (let i = 1; i <= 10; i++) {
    numbers.push(i);
  }

  const output = numbers.join(',');

  return <div>{output}</div>;
};

export default NumberList;
