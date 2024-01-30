import React from 'react';
import './Switcher.css';

const Switcher = () => {
  return (
    <section className="sectionSwitcher">
      <input type="checkbox" id="switch" className="switchInput" />
      <label htmlFor="switch" className="switchLabel">
        Toggle
      </label>
    </section>
  );
};

export default Switcher;
