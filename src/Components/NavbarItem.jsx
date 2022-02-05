import React from "react";
import "./NavbarItem.css";

function NavbarItem({ name }) {
  return <div className="navbarItem hover">{name}</div>;
}

export default NavbarItem;
