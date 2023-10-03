import React from "react";

import "./styles/sectionHeader.scss";

const SectionHeader = ({ title }) => {
  return (
    <div className="section-header">
      <div className="container">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
