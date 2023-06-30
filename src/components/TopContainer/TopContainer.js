import React from "react";
import { Element } from "react-scroll";
import TopContent from "../TopContent/TopContent";

const TopContainer = () => {
  return (
    <Element className="topContainer" name="about">
      <TopContent  />
    </Element>
  );
};

export default TopContainer;