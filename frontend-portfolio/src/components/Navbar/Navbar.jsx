import React, {useState} from 'react';
import {images} from '../../constants';
import { FiAlignRight, FiX } from "react-icons/fi";
import {motion} from 'framer-motion';

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="bg-purple-100">
      <div className="w-20 h-9 flex ">
        <img src={images.logo} alt="" />
        <div>
          <ul className="flex font-sans ml-40">
            {["HOME", "ABOUT", "WORK", "CONTACT", "TESTIMONIAL"].map((item) => (
              <li
                className="px-5 py-1 font-semibold tracking-widest hover:text-slate-700 hover:underline"
                key={`link-${item}`}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='ml-40 mt-2 cursor-pointer'>
          <FiAlignRight onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <FiX
                onclick={() => {
                  setToggle(false);
                }}
              />
              <ul>
                {["HOME", "ABOUT", "WORK", "CONTACT", "TESTIMONIAL"].map(
                  (item) => (
                    <li
                      key={`${item}`}
                    >
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar