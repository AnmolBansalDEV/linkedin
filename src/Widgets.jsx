import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from '@mui/icons-material/Circle';
import "./Widgets.css";

function Widgets() {
  const news = (heading, subtitle) => (
    <div className="widgets__newsArticle">
      <div className="widgets__newsArticle--left">
        <CircleIcon style={{fontSize: "12px"}} />
      </div>
      <div className="widgets__newsArticle--right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {news("Startups fuel demand for CFOs", "2d ago • 572 readers")}
      {news("Skills to thrive in tech", "3d ago • 2,686 readers")}
      {news("Big Four bets on tech consulting", "4d ago • 5,540 readers")}
      {news("Retaining women in tech", "2d ago • 1,056 readers")}
    </div>
  );
}

export default Widgets;
