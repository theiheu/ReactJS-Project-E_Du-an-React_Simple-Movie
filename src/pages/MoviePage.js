import React from 'react';
import {useState, useEffect} from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import {apiKey, fetcher} from "../config";
import useDebounce from "../hooks/useDebounce";

const pageCount = 3
const MoviePage = () => {
    const [nextPage, setNextPage] = useState(1);
    const [filter, setFilter] = useState("");
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`);

    const filterDebounce = useDebounce(filter, 500)
    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const {data, error} = useSWR(url, fetcher)
    const loading = !data && !error

    useEffect(() => {
        if (filterDebounce) {
            setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`)
        } else {
            setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`)
        }

    }, [filterDebounce, nextPage]);

    const movies = data?.results || []
    // const {page, total_pages} = data || []

    return (
        <div>
            <div className="py-10 page-container">

                <div className="flex mb-10">
                    <div className="flex-1">
                        <input type="text" className="w-full p-4 bg-slate-800 text-white outline-none"
                               placeholder="Type here to search" onChange={handleFilterChange}/>
                    </div>
                    <button className="p-4 bg-primary text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                        </svg>

                    </button>
                </div>
                {loading && (
                    <div
                        className="w-10 h-10 rounded-full border-4 border-primary border-r-transparent border-t-4 mx-auto animate-spin"></div>
                )}
                <div className="grid grid-cols-4 gap-10">
                    {!loading && movies.length > 0 && movies.map((item) =>
                        <MovieCard key={item.id} item={item}/>
                    )}
                </div>

                <div className="flex items-center justify-center mt-10 gap-x-5">
                    <span className="cursor-pointer" onClick={() => {
                        setNextPage(nextPage - 1)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="w-6 h-6">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15.75 19.5L8.25 12l7.5-7.5"/>
</svg>
</span>
                    {new Array(pageCount).fill(0).map((item, index) => (
                        <span
                            className="cursor-pointer inline-block py-2 px-4 bg-white text-slate-900 rounded leading-one"
                            onClick={() => {
                                setNextPage(index + 1)
                            }}
                        >
                            {index + 1}
                        </span>
                    ))}
                    <span className="cursor-pointer" onClick={() => {
                        setNextPage(nextPage + 1)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24"
                             strokeWidth="1.5"
                             stroke="currentColor"
                             className="w-6 h-6">
                            <path strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
</svg>
</span>

                </div>
            </div>
        </div>
    );
};

export default MoviePage;
