import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="http://www.twitter.com/m0nds_" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="http://www.github.com/m0nds" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/raymond-elegbede-40a446195" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
