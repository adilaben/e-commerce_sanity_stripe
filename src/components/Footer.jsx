import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/aadila-bendahou/", "_blank");
  };

  return (
    <div className="footer-container">
      <p> 2023 All rights reserverd &copy; Aâdila Bendahou </p>
      <p className="icons" onClick={handleClick}>
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
