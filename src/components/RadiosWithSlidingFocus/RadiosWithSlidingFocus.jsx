import React from 'react';
import './RadiosWithSlidingFocus.css';

const RadiosWithSlidingFocus = () => {
  return (
    <section className="section2">
      <form>
        <label>
          <input className="input" type="radio" name="inventor" value="bell" />
          <span className="truncate">Alexander Graham Bell</span>
        </label>
        <label>
          <input className="input" type="radio" name="inventor" value="morse" />
          <span className="truncate">Samuel Morse</span>
        </label>
        <label>
          <input
            className="input"
            type="radio"
            name="inventor"
            value="edison"
          />
          <span className="truncate">Thomas Edison</span>
        </label>
        <div className="selection"></div>
      </form>
    </section>
  );
};

export default RadiosWithSlidingFocus;
