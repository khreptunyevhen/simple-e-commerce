import React from "react";
import { useImmer } from "use-immer";
import NavItem from "./NavItem";
import { webSiteInfoDB } from "../common/webSiteInfoDB.js";
import "./styles/navBar.scss";

function NavBar({ navMenu, mobileMenu }) {
  const { headerNavigation } = webSiteInfoDB;
  const [menu] = useImmer(headerNavigation);

  return (
    <nav
      className={navMenu}
      style={{
        left: mobileMenu ? "0" : "-100%",
      }}
    >
      <ul>
        {menu.map((item, index) => {
          return (
            <NavItem
              key={`menu-list-${index}`}
              url={item.link}
              title={item.title}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
