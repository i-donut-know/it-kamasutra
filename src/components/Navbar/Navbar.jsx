import React from "react";
import s from "./Navbar.module.css";
import { Navlink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Navlink to="/profile" activeClassName={s.activeLink}>
          Profile
        </Navlink>
      </div>
      <div className={s.item}>
        <Navlink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </Navlink>
      </div>
    </nav>
  );
};

export default Navbar;
