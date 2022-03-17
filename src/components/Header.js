import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import { BiCameraMovie, BiMoviePlay } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex items-center px-10 md:px-12">
      <Logo className="w-20 cursor-pointer" onClick={() => navigate(`/`)} />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group">
          <AiFillHome className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <AiOutlineSearch className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <AiOutlinePlus className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <AiFillStar className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <BiCameraMovie className="h-4" />
          <span className="span">Movies</span>
        </a>
        <a className="header-link group">
          <BiMoviePlay className="h-4" />
          <span className="span">Series</span>
        </a>
      </div>
      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
        Login
      </button>
    </div>
  );
};

export default Header;
