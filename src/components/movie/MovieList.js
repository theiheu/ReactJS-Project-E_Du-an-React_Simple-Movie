import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/scss'
import MovieCard from "./MovieCard";
import {useState} from "react";
import useSWR from "swr";
import {fetcher} from "../../config";

const MovieList = ({type = "now_playing"}) => {
    const [movies, setMovies] = useState([]);
    const {
        data
    } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=1760ac0af799ab5fc2105b216bc09ce0`, fetcher)

    useEffect(() => {
        if (data && data.results) {

            setMovies(data.results)
        }
    }, [data])
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
