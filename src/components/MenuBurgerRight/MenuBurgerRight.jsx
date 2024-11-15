import React, { useEffect, useRef, useState, useCallback } from 'react';
import './MenuBurgerRight.css';

const MenuBurgerRight = () => {
  const menuRef = useRef(null);
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuActive(prevState => {
      const newState = !prevState;
      document.body.style.overflow = newState ? 'hidden' : 'visible';
      return newState;
    });
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    const button = menu.querySelector('.burger-menu_button');
    const links = menu.querySelectorAll('.burger-menu_link');
    const overlay = menu.querySelector('.burger-menu_overlay');

    const handleButtonClick = e => {
      e.preventDefault();
      toggleMenu();
    };

    const handleLinkClick = () => toggleMenu();
    const handleOverlayClick = () => toggleMenu();

    button.addEventListener('click', handleButtonClick);
    links.forEach(link => link.addEventListener('click', handleLinkClick));
    overlay.addEventListener('click', handleOverlayClick);

    // Cleanup on unmount
    return () => {
      button.removeEventListener('click', handleButtonClick);
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
      overlay.removeEventListener('click', handleOverlayClick);
    };
  }, [isMenuActive, toggleMenu]);

  return (
    <div>
      <div
        className={`burger-menu ${isMenuActive ? 'burger-menu_active' : ''}`}
        ref={menuRef}
      >
        <a href="http" className="burger-menu_button">
          <span className="burger-menu_lines"></span>
        </a>
        <nav className="burger-menu_nav">
          <a href="#section-1" className="burger-menu_link">
            Section 1
          </a>
          <a href="#section-2" className="burger-menu_link">
            Section 2
          </a>
          <a href="#section-3" className="burger-menu_link">
            Section 3
          </a>
          <a href="#section-4" className="burger-menu_link">
            Section 4
          </a>
          <a href="#section-5" className="burger-menu_link">
            Section 5
          </a>
        </nav>
        <div className="burger-menu_overlay"></div>
      </div>

      <section id="section-1">Section 1</section>
      <section id="section-2">Section 2</section>
      <section id="section-3">Section 3</section>
      <section id="section-4">Section 4</section>
      <section id="section-5">Section 5</section>
    </div>
  );
};

export default MenuBurgerRight;
