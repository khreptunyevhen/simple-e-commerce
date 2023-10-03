import React from "react";
import SectionHeader from "./SectionHeader";
import { webSiteInfoDB } from "../common/webSiteInfoDB";
import { ImFacebook } from "react-icons/im";
import { BsInstagram, BsVimeo, BsTwitter } from "react-icons/bs";
import { BiMap, BiPhone, BiMailSend } from "react-icons/bi";
import { Link } from "react-router-dom";
import map from "../images/map.png";

import "./styles/contactUs.scss";

const ContactUs = () => {
  const { contactUs, socialLinks } = webSiteInfoDB;
  return (
    <section className="contact-us">
      <SectionHeader title="Contact us" />
      <div className="container">
        <div className="wrapper">
          <div className="contacts">
            <div className="contacts-place">
              {contactUs.map((item, index) => {
                return (
                  <div key={`contacts-${index}`}>
                    <h2>{item.title}</h2>
                    <ul>
                      <li>
                        <BiMap className="icon" />
                        {item.location}
                      </li>
                      <li>
                        <BiPhone className="icon" />
                        {item.phone}
                      </li>
                      <li>
                        <BiMailSend className="icon" />
                        {item.mail}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="contacts-social">
              <Link to={socialLinks.facebook} target="_blank">
                <ImFacebook className="social" />
              </Link>
              <Link to={socialLinks.vimeo} target="_blank">
                <BsVimeo className="social" />
              </Link>
              <Link to={socialLinks.instagram} target="_blank">
                <BsInstagram className="social" />
              </Link>
              <Link to={socialLinks.twitter} target="_blank">
                <BsTwitter className="social" />
              </Link>
            </div>
          </div>
          <div className="map">
            {/* TODO: Create the google map components */}
            <img src={map} alt="Google map location" />
          </div>
        </div>
        {/* TODO: Create the contact form */}
      </div>
    </section>
  );
};

export default ContactUs;
