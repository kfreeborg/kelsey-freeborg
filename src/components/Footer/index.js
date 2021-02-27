import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer class="footer">
      <h4>
        <a
          className="contact-icons"
          href="https://github.com/kfreeborg"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="contact-icons"
          href="https://www.instagram.com/aboxofkelsey/"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a
          className="contact-icons"
          href="https://www.linkedin.com/in/kelsey-freeborg-7257a589/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </h4>
    </footer>
  );
}

export default Footer;
