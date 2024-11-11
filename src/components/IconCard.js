import React from "react";

const IconCard = ({icon, title, body, isBorderReversed}) => {
  return (  
    <div className={`icon-card ${isBorderReversed && "border-reversed"}`}>
      <div className="icon-container">
        {icon}
      </div>
      <div className="text-container">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
    </div>
  );
}
 
export default IconCard;