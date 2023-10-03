import React from "react";
import "./styles/navItem.scss";
import { Link } from "react-router-dom";

function NavItem({ url, title }) {
  return (
    <li>
      <Link to={url}>{title}</Link>
    </li>
  );
}

export default NavItem;
