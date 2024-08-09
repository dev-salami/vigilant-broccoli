import React from "react";
import aboutTestBg from "../assets/aboutBg.svg";

function AboutUs() {
  return (
    <div>
      <div className="about-title__bg">
        <img src={aboutTestBg} alt="" />
        <p className="about-title__text">About Us</p>
      </div>
      <p>
        We are the best at what we do, if you dont believe in us then probably
        go shine. We are a group of Specialist In Fields such as Web
        Develepment, Social media marketing Ui/Ux designing and app Development.
        We do Small and big and small and big and big and anything. We hoof and
        puff we gleam and shimmer we do what we know bests. So if you got a gig
        for us gently send a message dear, we will provide a way to reach us,
        and you will learn what we can makeeeeeeeeeeeeeeeeeeeeeeeeee.
      </p>
    </div>
  );
}

export default AboutUs;
