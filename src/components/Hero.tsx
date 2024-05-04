import React, { useEffect, useState } from "react";
import GtlobalAPI from "../services/GtlobalAPI";

const Hero = () => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState<any>([]);
  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    GtlobalAPI.getPopularMovies.then((res: any) => {
      const result = res.data.results;
      const randomNo = Math.floor(Math.random()*10)
      setMovieList(result[randomNo]);
    });
  };
  return (
    <div>
            <div className="absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full "></div>
            <div className="absolute mt-[300px] md:mt-[300px] sm:mt-[250px] px-10 md:px-24 ">
            <h2 className="text-white text-[19px] lg:text-[27px]">Watch only on hulu</h2>
            <h2 className="text-white text-[36px] lg:text-[47px] font-extrabold backdrop-blur-[3px] bg-opacity-90">{movieList.original_title}</h2>
            <div className="flex gap-5 mt-5">
            <button className="bg-white border-2 border-white text-gray-500 font-bold w-24 cursor-pointer hover:border-gray-500 p-2 rounded-md">PLAY</button>
            <button className="bg-transparent border-2 border-white text-white font-bold w-24 cursor-pointer hover:border-gray-500 p-2 rounded-md">DETAILS</button>
            </div>
        </div>
      <img src={IMAGE_BASE_URL + movieList.backdrop_path} width={1920} height={1080} className="h-[85vh] object-cover"/>
    </div>
  );
};

export default Hero;
