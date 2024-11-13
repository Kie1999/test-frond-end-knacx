import React, { useState } from 'react';

const RadioButtonForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleCheckboxChange = (event) => {
      const { name } = event.target;
      setSelectedOption((prevOption) => (prevOption === name ? null : name));
    };
  
    return (
      <form>
        <label>
          <input
            type="checkbox"
            name="option1"
            checked={selectedOption === 'option1'}
            onChange={handleCheckboxChange}
          />
          ตัวเลือกที่ 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="option2"
            checked={selectedOption === 'option2'}
            onChange={handleCheckboxChange}
          />
          ตัวเลือกที่ 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="option3"
            checked={selectedOption === 'option3'}
            onChange={handleCheckboxChange}
          />
          ตัวเลือกที่ 3
        </label>
      </form>
    );
};

export default RadioButtonForm;
