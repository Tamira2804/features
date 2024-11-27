import React from 'react';
import './CSSButtons.css';

const CSSButtons = () => {
  return (
    <>
      <div className="simple-buttons">
        <div class="buttons">
          <a class="button" href="#1">
            Click Me
          </a>
          <a class="button disabled" href="#1">
            But Not Me
          </a>
        </div>
      </div>

      <div className="buttons-wrapper">
        <button className="btn first">Button 1</button>
        <button className="btn second">Button 2</button>
        <button className="btn third">Button 3</button>
        <button className="btn fourth">Button 4</button>
        <button className="btn fifth">Button 5</button>
        <button className="btn sixth">Button 6</button>
      </div>

      <div class="buttons-wrapper">
        <button class="btn fill">Fill In</button>
        <button class="btn pulse">Pulse</button>
        <button class="btn close">Close</button>
        <button class="btn raise">Raise</button>
        <button class="btn up">Fill Up</button>
        <button class="btn slide">Slide</button>
        <button class="btn offset">Offset</button>
      </div>

      <div class="buttons-wrapper">
        <a href="#1" class="action-button shadow animate blue">
          Hello
        </a>
        <a href="#1" class="action-button shadow animate red">
          How
        </a>
        <a href="#1" class="action-button shadow animate green">
          Are
        </a>
        <a href="#1" class="action-button shadow animate yellow">
          You?
        </a>
      </div>

      {/* Animated Read more buttons */}

      <div class="frame">
        <button class="custom-btn btn-1">Read More 1</button>
        <button class="custom-btn btn-2">Read More 2</button>
        <button class="custom-btn btn-3">
          <span>Read More 3</span>
        </button>
        <button class="custom-btn btn-4">
          <span>Read More 4</span>
        </button>
        <button class="custom-btn btn-5">
          <span>Read More 5</span>
        </button>
        <button class="custom-btn btn-6">
          <span>Read More 6</span>
        </button>
        <button class="custom-btn btn-7">
          <span>Read More 7</span>
        </button>
        <button class="custom-btn btn-8">
          <span>Read More 8</span>
        </button>
        <button class="custom-btn btn-9">Read More 9</button>
        <button class="custom-btn btn-10">Read More 10</button>
        <button class="custom-btn btn-11">
          Read More 11<div class="dot"></div>
        </button>
        <button class="custom-btn btn-12">
          <span>Click!</span>
          <span>Read More 12</span>
        </button>
        <button class="custom-btn btn-13">Read More 13</button>
        <button class="custom-btn btn-14">Read More 14</button>
        <button class="custom-btn btn-15">Read More 15</button>
        <button class="custom-btn btn-16">Read More 16</button>

        <div className="neon-body">
          <a href="#1" className="neon-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon button
          </a>
          <a href="#1" className="neon-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon button
          </a>
          <a href="#1" className="neon-button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Neon button
          </a>
        </div>
      </div>
    </>
  );
};

export default CSSButtons;
