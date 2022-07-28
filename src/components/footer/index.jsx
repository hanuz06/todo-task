import React from "react";
import css from "./style.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <p>
        Inspired by <span style={{ color: "#FC8E8A" }}>Ennio Dybeli</span>
      </p>
    </footer>
  );
};

export default Footer;
