import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./About.scss";
// import { urlFor, client } from "../../client";

const abouts = [
  {
    id: 1,
    title: "Frontend development",
    imgUrl: images.about01,
    description: "Proficiency in CSS, Javascript, React, MERN stack, SCSS and CSS frameworks such as material UI, Tailwind"
  },
  {
    id: 2,
    title: "Web development",
    imgUrl: images.about02,
    description: "Designing user interface, creating the website's structure and layout, and implementing the website's functionality. I also ensure the website is optimized for performance, security and accessibility"
  },
  {
    id: 3,
    title: "Web design",
    imgUrl: images.about03,
    description: "Designing the visual elements of a website, including the layout, color scheme, fonts and images. I ensure website's look is visually appealing and easy to use"
  },
  {
    id: 4,
    title: "Database Management",
    imgUrl: images.about04,
    description: "Organizing, storing and retrieving data in a structured way to support the needs of a client. Managing the performance and availability of databases, ensuring that data is backed up and recoverable in case of a disaster"
  }
]

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => setAbouts(data));
  // }, []);
  return (
    <>
      <h2 className="head-text">
        I know say
        <span> better devs</span>
        <br />
        na <span>better business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.id}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
