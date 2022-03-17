import React from "react";
import disneyBrand from "../assets/disnep.png";
import marvelBarnd from "../assets/marvel.png";
import nationalGBrand from "../assets/national-geographic.png";
import pixarBrand from "../assets/pixar.png";
import starWarsBrand from "../assets/starwars.png";
import marvel from "../assets/marvel.mp4";
import pixar from "../assets/pixar.mp4";
import starWars from "../assets/star-wars.mp4";
import nationalG from "../assets/national-geographic.mp4";
import disneyVideo from "../assets/disney.mp4";

const Brands = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group relative">
        <img
          src={disneyBrand}
          alt="disney"
          className="absolute flex justify-center items-center"
        />
        <video
          autoPlay
          loop
          playsInline
          muted
          className=" group-hover:inline rounded-lg object-cover w-full h-full hidden"
        >
          <source src={disneyVideo} />
        </video>
      </div>
      <div className="brand group relative">
        <img
          src={marvelBarnd}
          alt="disney"
          className="absolute flex justify-center items-center"
        />
        <video
          autoPlay
          loop
          playsInline
          muted
          className=" group-hover:inline rounded-lg object-cover w-full h-full hidden"
        >
          <source src={marvel} />
        </video>
      </div>
      <div className="brand group relative">
        <img
          src={pixarBrand}
          alt="disney"
          className="absolute flex justify-center items-center"
        />
        <video
          autoPlay
          loop
          playsInline
          muted
          className=" group-hover:inline rounded-lg object-cover w-full h-full hidden"
        >
          <source src={pixar} />
        </video>
      </div>
      <div className="brand group relative">
        <img
          src={nationalGBrand}
          alt="disney"
          className="absolute flex justify-center items-center"
        />
        <video
          autoPlay
          loop
          playsInline
          muted
          className=" group-hover:inline rounded-lg object-cover w-full h-full hidden"
        >
          <source src={nationalG} />
        </video>
      </div>
      <div className="brand group relative">
        <img
          src={starWarsBrand}
          alt="disney"
          className="absolute flex justify-center items-center"
        />
        <video
          autoPlay
          loop
          playsInline
          muted
          className=" group-hover:inline rounded-lg object-cover w-full h-full hidden"
        >
          <source src={starWars} />
        </video>
      </div>
    </section>
  );
};

export default Brands;
