import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import {apiKey, fetcher} from "../../config";

const MovieList = ({type = "now_playing"}) => {
    const {
        data
    } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`, fetcher)

    const movies = data?.results || []
    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={30} slidePrevClass={"auto"}>
                {movies.length > 0 && movies.map((item) => (
                    <SwiperSlide key={item.id}>
                        <MovieCard item={item}/>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>

    );
};

export default MovieList;
