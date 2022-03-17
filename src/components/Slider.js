import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import slider4 from "../assets/slider-4.jpeg";

const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-screen-2xl mx-auto">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={slider1} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider2} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider3} alt="" />
        </div>
        <div>
          <img loading="lazy" src={slider4} alt="" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
