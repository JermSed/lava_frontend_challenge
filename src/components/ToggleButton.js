import React, { useState } from 'react';
import './ToggleButton.css'; // Assuming you have a separate CSS file for styles

function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked); // Toggle the state between true and false
  };

  return (
    <button onClick={handleClick} className={isClicked ? 'green-button' : 'Connect-button'}>
      Connect
    </button>
  );
}

export default ToggleButton;