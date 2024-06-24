import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(`${link}`)} className="cta-button">
      {text}
    </button>
  );
};

export default HomeButton;
