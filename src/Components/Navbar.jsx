import React from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left hover">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKpeyOK8S0l2ooNH-iSqCkz2yJcLnCHEXJoUrOjzGkikEXA9BSQ2tFKUrLVEMU7f6xKE&usqp=CAU"
          alt="logo"
        />
      </div>
      <div className="navbar__right">
        <NavbarItem name="Learn" />
        <NavbarItem name="Build" />
        <NavbarItem name="Explore" />
        <NavbarItem name="join" />
      </div>
    </div>
  );
}

export default Navbar;
