import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Skills.scss";
import { images } from "../../constants";

const skills = [
  {
    id: 1,
    name: "React",
    icon: images.react,
  },
  {
    id: 2,
    name: "Api",
    icon: images.api,
  },
  {
    id: 3,
    name: "Redux",
    icon: images.redux,
  },
  {
    id: 4,
    name: "Git",
    icon: images.git,
  },
  {
    id: 5,
    name: "SCSS",
    icon: images.sass,
  },
  {
    id: 6,
    name: "Node",
    icon: images.node,
  },
  {
    id: 7,
    name: "CSS",
    icon: images.css,
  },
  {
    id: 8,
    name: "Javascript",
    icon: images.javascript,
  },
  {
    id: 9,
    name: "Typescript",
    icon: images.typescript,
  },
  {
    id: 10,
    name: "Next Js",
    icon: images.nextjs,
  },
  {
    id: 11,
    name: "tailwind CSS",
    icon: images.tailwind,
  },
  {
    id: 12,
    name: "styled components",
    icon: images.styled,
  },
];

const experiences = [

  {
    id: 2,
    year: "2020",
    name: "Frontend Developer",
    company: "Bluelight Agency",
    desc: "Designed interactive web apps, optimized UI, improved performance, and managed version control with collaboration.",
  },
  {
    id: 3,
    year: "2023",
    name: "Software Developer",
    company: "Simon says drip",
    desc: "Developed e-commerce apps with React and PHP, optimized performance, integrated APIs, and improved responsiveness.",
  },
  {
    id: 4,
    year: "2024",
    name: "Frontend developer",
    company: "Stratsight",
    desc: "Developed an enterprise web app with React, optimized APIs, deployed and improved performance.",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name}
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: skill.BgColor }}
                >
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => {
            return (
              <motion.div className="app__skills-exp-item" key={`${experience.id}-${experience.name}`}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                        >
                          <h4 className="bold-text">{experience.name}</h4>
                          <p className="p-text">{experience.company}</p>
                        </motion.div>
                        <div className="skills-tooltip">{experience.desc}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
