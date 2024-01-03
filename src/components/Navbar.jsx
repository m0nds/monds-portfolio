import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const nav = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.monds} alt="" />
      </div>
      <ul className="app__navbar-links">
        {nav.map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {nav.map((item) => {
                return (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(!toggle)}>
                      {item}
                    </a>
                  </li>
                );
              })}
              <a
                style={{
                  color: "#fef4f5",
                  backgroundColor: "#313bac",
                  margin: "0 auto",
                  padding: "0.55rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                href={images.CV}
                download
              >
                Download CV
              </a>
            </ul>
          </motion.div>
        )}
      </div>
      <div className="app__download">
        <a className="app__download-cv" href={images.CV} download>
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
