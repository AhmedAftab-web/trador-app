import React from "react";
import "./PricingCard.css";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Img1 from "../../../../images/pricing/price-1.png";
import Img2 from "../../../../images/pricing/price-2.png";
import Img3 from "../../../../images/pricing/price-3.png";
function PricingCard(props) {
  return (
    <div className={`pricing-card-container pricing-card-${props.position}`}>
      <div className="pricing-card-title">{props.title}</div>
      <div className="pricing-card-icon">
        <img
          src={props.img == "1" ? Img1 : props.img == "2" ? Img2 : Img3}
          style={{ width: "45%" }}
        />
      </div>
      <div className="pricing-card-price">{`$ ${props.price} / month`}</div>
      {
        <div className="pricing-card-list">
          {props.list.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "90%",
                  color: "#7384a4",
                }}
              >
                <text>{item.label}</text>
                {item.check ? <i className="fa fa-check"></i> : undefined}
              </div>
            );
          })}
        </div>
      }
      <div>
        <a href="#">
        <button
          className={ props.position !== "pricing-card-left" && props.position !== "pricing-card-right"? `pricing-card-btn`: `pricing-card-btn-outline`}>Get Started</button>
        </a>
      </div>
    </div>
  );
}

export default PricingCard;
