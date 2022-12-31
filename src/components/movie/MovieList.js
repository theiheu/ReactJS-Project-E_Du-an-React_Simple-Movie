import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss'
import MovieCard from "./MovieCard";
import {useState} from "react";
import useSWR from "swr";
import {fetcher} from "../../config";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const {
        data,
        error
    } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=1760ac0af799ab5fc2105b216bc09ce0', fetcher)

    useEffect(() => {
        setMovies(data.results)
    }, [data])
    console.log('movies', movies)

    return (
        <div className="movie-list">
            <Swiper grabCursor={"true"} spaceBetween={30} slidePrevClass={"auto"}>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
                <SwiperSlide>
                    <MovieCard/>
                </SwiperSlide>
            </Swiper>
        </div>

    );
};

export default MovieList;
