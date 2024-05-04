import React from 'react'
import GenresList from '../constants/GenresList'
import { IoChevronForward } from 'react-icons/io5'
import MovieList from './MovieList';

const GenereMovieList = () => {
  return (
    <div className='mt-20 p-5 px-10 md:px-20'>
      {GenresList.genere.map((item: any, index) => index <4 && (
        <div>
          <h2 className="text-white text-[20px] font-bold ">
            {item.name}{" "}
            <span className="font-normal text-[16px] cursor-pointer flex text-gray-400 float-right">
              VIEW ALL <IoChevronForward className="text-white ml-1" />
            </span>
          </h2>
          <MovieList genereId = {item.id}/>
        </div>
      ))}
    </div>
  );
}

export default GenereMovieList
