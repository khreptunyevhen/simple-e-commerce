import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import NavItem from "./NavItem";
import "./styles/footer.scss";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsVimeo, BsTwitter } from "react-icons/bs";
import { BiMap, BiPhone, BiMailSend } from "react-icons/bi";

const Footer = () => {
  const { footerNavigation, footerNavigation1, footerNavigation2 } =
    webSiteInfoDB;
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <div className="info-links-contact">
            <div className="description">
              <Link to="/home" className="logo">
                M<span className="hidden">iralou</span>
              </Link>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="social-media">
                <Link
                  to="https://facebook.com"
                  target="_blank"
                  className="social-icon"
                >
                  <ImFacebook />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="social-icon"
                >
                  <BsInstagram />
                </Link>
                <Link
                  to="https://vimeo.com"
                  target="_blank"
                  className="social-icon"
                >
                  <BsVimeo />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="social-icon"
                >
                  <BsTwitter />
                </Link>
              </div>
            </div>
            <div className="information">
              <h2>INFORMATION</h2>
              <ul>
                {footerNavigation.map((item, index) => {
                  return (
                    <NavItem
                      key={`menu-list-${index}`}
                      url={item.link}
                      title={item.title}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="quick-links">
              <h2>QUICK LINKS</h2>
              <ul>
                {footerNavigation1.map((item, index) => {
                  return (
                    <NavItem
                      key={`menu-list-${index}`}
                      url={item.link}
                      title={item.title}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="contact-us">
              <h2>CONTACT US</h2>
              <ul>
                <li>
                  <Link to="https://www.google.ca/maps/place/Ash+Dr,+East+Shannon,+SD+57772,+USA/@43.1778084,-102.3295983,17z/data=!3m1!4b1!4m6!3m5!1s0x877c096bdc93a297:0xc3ec93524ea4b557!8m2!3d43.1778084!4d-102.3270234!16s%2Fg%2F11rxwlbdkx?hl=en&entry=ttu">
                    <BiMap className="icons" />
                    <span>{footerNavigation2.adress}</span>
                  </Link>
                </li>
                <li>
                  <BiPhone className="icons"></BiPhone>
                  <span>{footerNavigation2.phone}</span>
                </li>
                <li>
                  <Link to={`mailto:${footerNavigation2.email}`}>
                    <BiMailSend className="icons" />
                    <span>{footerNavigation2.email}</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr></hr>
          <div className="copyright">
            <small>COPYRIGHT © 2022 MIRALOU</small>
            <small>ALL RIGHTS RESERVED</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//
