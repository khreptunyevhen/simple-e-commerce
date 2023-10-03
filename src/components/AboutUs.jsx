import React from "react";
import { webSiteInfoDB } from "../common/webSiteInfoDB.js";
import SectionHeader from "./SectionHeader.jsx";
import Categories from "./Categories.jsx";
import Teammate from "./Teammate.jsx";
import "./styles/about.scss";

const AboutUs = () => {
  const { aboutUs, team } = webSiteInfoDB;

  return (
    <section className="about">
      <SectionHeader title="About us" />
      <div className="container">
        <div className="description">
          <div className="wr">
            <p className="title">{aboutUs[0].title}</p>
            <span>{aboutUs[0].description}</span>
          </div>
          <div className="img-block">
            <img alt="photo" src={aboutUs[0].image} />
          </div>
        </div>
        <div className="benefits">
          <div className="benefit-item">
            <p className="title">{aboutUs[1].title}</p>
            <p>{aboutUs[1].description}</p>
          </div>
          <p className="divider"></p>
          <div className="benefit-item">
            <p className="title">{aboutUs[2].title}</p>
            <p>{aboutUs[2].description}</p>
          </div>
          <p className="divider"></p>
          <div className="benefit-item">
            <p className="title">{aboutUs[3].title}</p>
            <span>{aboutUs[3].description}</span>
          </div>
        </div>
        <Categories />
        <section className="bottom">
          <div className="wrapper">
            <h2 className="title">{aboutUs[5].title}</h2>
            <span>{aboutUs[5].description}</span>
            <div className="team">
              {team?.map((person, index) => {
                return <Teammate key={`person-${index}`} person={person} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
