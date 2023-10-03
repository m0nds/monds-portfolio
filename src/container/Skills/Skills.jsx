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
];

const experiences = [
  {
    id: 1,
    year: "2019",
    works: [
      {
        name: "Intern",
        company: "HNG Intership 6.0",
        desc: "Worked on different tasks and projects in the frontend development",
      }
    ],
  },
  {
    id: 2,
    year: "2020",
    works: [
      {
        name: "Intern",
        company: "XEarth Group Beta",
        desc: "worked as a frontend developer using reactjs on a food order app named #leteat",
      }
    ],
  },
  {
    id: 3,
    year: "2020-2022",
    works: [
      {
        name: "Frontend Developer",
        company: "Bluelight Agency",
        desc: "Worked as a frontend developer using reactjs",
      }
    ],
  },
  {
    id: 4,
    year: "2022",
    works: [
      {
        name: "Frontend development",
        company: "Altschool",
        desc: "learned frontend development such as javascript frameworks (vue and reactjs)",
      }
    ],
  },
];

const Skills = () => {
  // const [experiences, setExperiences] = useState([])
  // const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]'

  //   client.fetch(query).then((data) => {
  //     setExperiences(data);
  //   });

  //   client.fetch(skillsQuery).then((data) => {
  //     setSkills(data);
  //   });
  // }, []);

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
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work) => {
                    return (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          key={work.name}
                        >
                          <h4 className="bold-text">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>
                        <div className="skills-tooltip">{work.desc}</div>
                      </>
                    );
                  })}
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
