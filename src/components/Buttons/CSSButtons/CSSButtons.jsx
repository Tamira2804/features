import React from 'react';
import './CSSButtons.css';

const CSSButtons = () => {
  return (
    <div className="buttons-wrapper">
      <h1>Who doesn't like fun buttons?</h1>
      <button className="btn first">Button 1</button>
      <button className="btn second">Button 2</button>
      <button className="btn third">Button 3</button>
      <button className="btn fourth">Button 4</button>
      <button className="btn fifth">Button 5</button>
      <button className="btn sixth">Button 6</button>
      <p>
        Inspiration for new ways to make interactive buttons using
        linear-gradients, box-shadows, and pseudo classes!
      </p>
    </div>
  );
};

export default CSSButtons;
