import React, { useState, useEffect } from 'react';
import './EngineButton.css';

const EngineButton = () => {
  const [rotation, setRotation] = useState(20); // Стан для кута повороту

  useEffect(() => {
    const btn = document.querySelector('.engine');
    const wrap = document.getElementById('wrapper');

    // Обробник кліку для кнопки
    const handleButtonClick = () => {
      btn.className = btn.className.includes('active')
        ? 'engine'
        : 'engine active';
    };

    // Обробник натискань клавіш
    const handleKeyDown = e => {
      if (e.keyCode === 38) {
        // Клавіша "вгору"
        setRotation(prevRotation => {
          const newRotation = prevRotation + 5;
          wrap.style.transform = `rotateX(${newRotation}deg) translateY(-110px)`;
          return newRotation;
        });
      } else if (e.keyCode === 40) {
        // Клавіша "вниз"
        setRotation(prevRotation => {
          const newRotation = prevRotation - 5;
          wrap.style.transform = `rotateX(${newRotation}deg) translateY(-110px)`;
          return newRotation;
        });
      }
    };

    // Додати слухачі подій
    btn.addEventListener('click', handleButtonClick);
    window.addEventListener('keydown', handleKeyDown);

    // Прибирання слухачів подій при демонтуванні компонента
    return () => {
      btn.removeEventListener('click', handleButtonClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="perspective">
      <div id="wrapper">
        <div class="outer-black">
          <div class="outer-iron">
            <div class="glare"></div>
            <div class="inner-black">
              <div class="inner-black-2">
                <div class="inner-black-3">
                  <button class="engine">
                    <div class="light"></div>
                    <span>
                      Engine
                      <br />
                    </span>
                    <span>
                      Start
                      <br />
                      Stop
                      <br />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineButton;
