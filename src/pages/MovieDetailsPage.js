import React from 'react';
import {useParams} from "react-router-dom";
import useSWR from "swr";
import {apiKey, fetcher} from "../config";
import {Swiper, SwiperSlide} from "swiper/react";
import MovieCard from "../components/movie/MovieCard";

const MovieDetailsPage = () => {
    const {moviesId} = useParams()

    const {
        data,
        error
    } = useSWR(`https://api.themoviedb.org/3/movie/${moviesId}?api_key=${apiKey}&language=en-US`, fetcher)
    if (!data) return []
    const {backdrop_path, poster_path, title, genres, overview} = data


    return (
        <div className="py-10">
            <div className="w-full h-[600px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="w-full h-full bg-cover bg-no-repeat" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`
                }}>

                </div>

                <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
                    <img className="w-full h-full object-cover rounded-xl"
                         src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt=""/>
                </div>
                <h1 className="text-center text-4xl font-bold text-white mb-10">{title}</h1>
                {genres.length > 0 && <div className="flex items-center justify-center gap-x-5 mb-10">
                    {genres.map((item) => (
                        <span className="py-2 px-4 border-primary text-primary border rounded"
                              key={item.id}>{item.name}</span>
                    ))
                    }
                </div>}
                <p className="text-center leading-relaxed max-w-[600px] mx-auto mb-10">{overview}</p>
                <MoviesCredits/>
                <MovieVideos/>
                <MovieSimilar/>
            </div>
        </div>
    );

    function MoviesCredits() {
        const {
            data,
            error
        } = useSWR(`https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=${apiKey}&language=en-US`, fetcher)

        if (!data) return null
        const {cast} = data
        if (!cast || cast.length <= 0) return null
        return <>
            <h2 className="text-center text-3xl mb-10">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map(item => (
                    <div className="cast-item" key={item.id}>
                        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                             className="w-full h-[350px] object-cover rounded-lg mb-3" alt=""/>
                        <h3 className="text-xl font-medium">{item.name}</h3>
                    </div>

                ))}

            </div>
        </>
    }

    function MovieVideos() {
        const {moviesId} = useParams()
        const {data, error} = useSWR(
            `https://api.themoviedb.org/3/movie/${moviesId}/videos?api_key=${apiKey}&language=en-US`, fetcher
        )

        if (!data) return null
        const {results} = data
        if (!results || results.length <= 0) return null
        return (
            <div className="py-10">
                <div className="flex flex-col gap-10">
                    {results.slice(0, 3).map(item => (
                        <div key={item.id} className="w-full aspect-video">
                            <h3 className="mb-5 text-xl font-medium p-3 bg-primary inline-block">{item.name}</h3>
                            <iframe
                                width="2178px" height="1091px"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboardWrite; encryptedMedia; gyroscope; pictureInPicture"
                                className="w-full h-full"
                                allowFullScreen>
                            </iframe>
                        </div>
                    ))}
                </div>


            </div>

        )
    }

    function MovieSimilar() {
        const {moviesId} = useParams()
        const {data, error} = useSWR(
            `https://api.themoviedb.org/3/movie/${moviesId}/similar?api_key=${apiKey}&language=en-US`, fetcher
        )
        if (!data) return null
        const {results} = data
        if (!results || results.length <= 0) return null

        return (
            <div className="py-10">
                <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
                <div className="movie-list">
                    <Swiper grabCursor={"true"} spaceBetween={30} slidePrevClass={"auto"}>
                        {results.length > 0 && results.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}/>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>

        )
    }
};

export default MovieDetailsPage;


