import React, { useEffect, useRef, useState } from "react";
import GtlobalAPI from "../services/GtlobalAPI";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

const MovieList = (genereId: any) => {
    const slideRight = (element:any) =>{
        element.scrollLeft += 500
    }
    const slideLeft = (element: any) => {
      element.scrollLeft -= 500;
    };
    const eleementRef = useRef(null)
  const [movieList, setMovieList] = useState<any>([]);
  useEffect(() => {
    getMovieByGenreBaseId();
  }, []);
  const getMovieByGenreBaseId = () => {
    GtlobalAPI.getMovieByGenreBaseId(genereId.genereId).then((resp: any) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className="flex items-center">
      <IoChevronBackOutline  onClick={() =>slideLeft(eleementRef.current)} className="z-10 text-[40px] text-white bg-black mb-[120px] p-2 cursor-pointer rounded-full" />
      <div ref={eleementRef} className="w-full overflow-scroll scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-8 ml-[-30px] mr-[-20px]">
        {movieList.map(
          (item: any, index: any) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
      <IoChevronForward onClick={() =>slideRight(eleementRef.current)} className="z-10 text-[40px] text-white bg-black mb-[120px] p-2 cursor-pointer rounded-full  " />
    </div>
  );
};

export default MovieList;
