import React from "react";
import ReactLogo from "../../assets/images/React.png";
import GDGFooter from "../GDGFooter";

const Introduction = () => {
  return (
    <div>
      <img
        src={ReactLogo}
        alt="React"
        style={{
          height: "300px",
          width: "300px"
        }}
      />

      <GDGFooter />
    </div>
  );
};

export default Introduction;
