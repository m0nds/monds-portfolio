import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
// import { urlFor, client } from "../../client";
import "./Work.scss";
import { images } from "../../constants";

const data = [
  {
    id: 1,
    title: "Car rentals app",
    description: 'Car rentals landing page site with animations',
    tags: ["React JS", "UI/UX"],
    projectLink: "https://carland-rentals.netlify.app/", 
    codeLink: "https://github.com/m0nds/car-rentals-app",
    imgUrl: images.cars,
  },
  {
    id: 2,
    title: "Apple 15 Pro website clone",
    description: `A clone of the Apple 15 Pro and 15 pro max website design. It was developed with Gsap and Three.Js`,
    tags: ["React JS", "UI/UX"],
    projectLink: "https://apple-15pro-clone.netlify.app/", 
    codeLink: "https://github.com/m0nds/apple-15pro-site",
    imgUrl: images.apple,
  },
  {
    id: 3,
    title: "Estate and Property site",
    description: `Find your next perfect place with ease with this Project`,
    tags: ["MERN"],
    projectLink: "https://estate.100jsprojects.com", 
    codeLink: "",
    imgUrl: images.house,
  },
  {
    id: 4,
    title: "Mern Auth site",
    description: `MERN web app with authentication lets users manage profiles, images, settings, and access protected routes.`,
    tags: ["MERN"],
    projectLink: "https://mern-auth-2b00.onrender.com", 
    codeLink: "",
    imgUrl: images.mernauth,
  },
  {
    id: 5,
    title: "Quiz App",
    description: `The Quiz App allows you to take quizzes on various topics such as sports, general knowledge, music, animals, history and celebrities`,
    tags: ["React JS"],
    projectLink: "https://mondsquiz.netlify.app/", 
    codeLink: "https://github.com/m0nds/monds-quiz",
    imgUrl: images.quiz,
  },
  {
    id: 6,
    title: "Rooms Chat app",
    description: `This is my portfolio website built using Gatsby and Netlify CMS which allows me socket io, reactjs, node Js`,
    tags: ["MERN"],
    projectLink: "https://mondsroomschat.netlify.app", 
    codeLink: "https://github.com/m0nds/chat-app",
    imgUrl: images.roomschat,
  },
  {
    id: 7,
    title: "Admin Dashboard",
    description: `Admin dashboard with react, view preferably with Pc or a tablet device`,
    tags: ["UI/UX"],
    projectLink: "https://monds-admin-dashboard.netlify.app", 
    codeLink: "https://github.com/m0nds/admin-dashboard",
    imgUrl: images.admin,
  },
  {
    id: 8,
    title: "Monds cocktails",
    description: `This website allows you to learn about different cocktails, their ingredients and how to make them`,
    tags: ["React JS"],
    projectLink: "https://monds-cocktail.netlify.app/", 
    codeLink: "https://github.com/m0nds/monds-cocktail",
    imgUrl: images.cocktails,
  },
  {
    id: 9,
    title: "My Portfolio Website",
    description: `This is my portfolio website built using reactJS, framer motion and others`,
    tags: ["React JS"],
    projectLink: "", 
    codeLink: "https://github.com/m0nds/monds-portfolio",
    imgUrl: images.portfolio,
  },
]

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    // const query = '*[_type == "works"]';

    // client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    // });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y:100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y:0, opacity: 1 }])

      if(item === 'All'){
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My amazing <span>Portfolio</span> Section
      </h2>
      <div className="app__work-filter">
        {["All", "UI/UX", "MERN", "React JS"].map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => {
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye/>
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ opacity: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub/>
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
