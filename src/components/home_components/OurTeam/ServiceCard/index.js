import React from "react";
import "./TeamCard.css";
import "font-awesome/css/font-awesome.min.css";
import Img1 from "../../../../images/team/team-1.jpg";
import Img2 from "../../../../images/team/team-2.jpg";
import Img3 from "../../../../images/team/team-3.png";

function teamCard(props) {
  return (
    <div className={`team-card ${props.position}`}>
      <div
        style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "space-around",
        //   alignItems: "center",
        //   height: "100%",
          textAlign:'center'
        }}
      >
        <div className="team-card-img-container">
        <img className="team-card-img"
          src={props.img == "1" ? Img1 : props.img == "2" ? Img2 : Img3}
        />
      </div>
        <h3 className="team-card-title m-0">{props.name}</h3>
      <p>{props.role}</p>
        <p className="team-card-desc">
          {props.desc}
        </p>
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "flex-end",
          //   alignItems: "center",
          //   width: "70%",
          //   color: "#016a66",
          // }}
        >
          <a href="" className="team-read-more">Read More</a>
          
        </div>
      </div>
    </div>
  );
}

export default teamCard;
