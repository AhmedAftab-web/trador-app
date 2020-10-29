import React from "react";
import "./ServiceCards.css";
import ServiceCard from "../TeamCard";
import "font-awesome/css/font-awesome.min.css";
import useServiceButton from "../useServiceButton";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedServiceCard = (Card) => {
  return (
    <ScrollAnimation
      animateIn="animate__fadeInLeft"
      duration=".2"
      animateOnce={true}
    >
      {Card}
    </ScrollAnimation>
  );
};

function ServiceCards() {
  const [items, goLeft, goRight] = useServiceButton();
  return (
    <div>
      <div className="team-cards-background">
      

      </div>
      <div className="team-cards-container">
          
      <ServiceCard
            img="1"
            name="Sarah Jhonson"
            role="Co-Founder & CTO"
            desc="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. "
            position={items.item_1}
        />
     
       <ServiceCard
            img="2"
            name="NS Fidai"
            role="Co-Founder & CTO"
            desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            position={items.item_2}
        />
      {/* {AnimatedServiceCard(
        <ServiceCard 
            title="Service Name"
            desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"
            position={items.item_3}
        />
      )} */}
      <ServiceCard 
            img="3"
            name="CodeSutras Technology LTD"
            role="Co-Founder & Technology Partner"
            desc="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
            position={items.item_3}
        />
      <i className="fa fa-long-arrow-left" onClick={goLeft}></i>
      <i className="fa fa-long-arrow-right" onClick={goRight}></i>
      </div>
    </div>
  );
}

export default ServiceCards;
