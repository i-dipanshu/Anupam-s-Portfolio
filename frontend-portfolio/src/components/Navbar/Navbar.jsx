import React, {useState} from 'react';
import {images} from '../../constants';
import './Navbar.scss';

import { FiAlignRight, FiX } from "react-icons/fi";
import {motion} from 'framer-motion';

function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <span>ANUPAM</span>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FiAlignRight onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300,0] }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <FiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;