import React from 'react';
import {useNavigate} from "react-router-dom";
import Button from "../Button/Button";

const MovieCard = ({item}) => {
    let {title, vote_average, release_date, poster_path, id} = item || {}
    const navigate = useNavigate()

    return (
        <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none h-full">
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="" className="w-full h-[350px] object-cover rounded-lg mb-5"/>

            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <div className="flex items-center justify-between text-sm opacity-50 mb-10">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>

                <Button onClick={() => navigate(`/movie/${id}`)} bgColor="secondary">Watch now</Button>


            </div>

        </div>

    );
};

export default MovieCard;
