import React, { useState, useEffect } from "react";
import "./Landing.css";
import { images } from "./CarouselImage";
import { useTransition, animated, config } from "react-spring";
import logo from "../assets/gxlogo.png";

const Landing = () => {
  const [image, setImage] = useState(0);
  const imageIndex = images[image];
  const landingHeader = ["Who ", "Are ", "We ", "?"];
  const changeSlide = () => {
    setImage((prevImage) => (prevImage + 1) % images.length);
  };

  const transitions = useTransition(imageIndex.img, {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(.9)" },
    config: { mass: 1, tension: 80, friction: 80 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel__slides">
        <figure className="carousel__image--container">
          {transitions((styles, imageIndex) => (
            <animated.img
              className="carousel__image"
              src={imageIndex}
              alt=""
              style={styles}
            />
          ))}
        </figure>
      </div>
      <div className="landing">
        <div className="landing__info">
          <div className="landing__header--container border">
            {landingHeader.map((header, index) => (
              <h1 className={`landing__header__${index}`}>{header}</h1>
            ))}
          </div>
          <p className="landing__info--para">
            We are a proud community of Vietnamese-born Catholics celebrating
            and spreading the Catholic faith, while maintaining and developing
            the Vietnamese cultural tradition.
          </p>
          <div className="landing__button--container">
            <a href="" className="learn__button">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
