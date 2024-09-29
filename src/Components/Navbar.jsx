import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useState } from 'react';

function Navbar() {
  const [click, setCLick] = useState(false);

  const clickButton = () => {
    setCLick(!click);
  }
  return (
      <header>
          <img
            src="Adler__2_-removebg-preview.png"
            alt="logo"/>
          <FontAwesomeIcon icon={click ? faXmark : faBars} id='menu' onClick={clickButton}/>
          <ul className={`nav ${click ? "active" : ""}`}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#more">More</a></li>
          </ul>
      </header>
  );
}

export default Navbar;