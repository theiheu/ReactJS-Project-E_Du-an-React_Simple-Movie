import {Fragment} from "react";
import MovieCard from "./components/movie/MovieCard";
import MovieList from "./components/movie/MovieList";

function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 py-10 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[500px] page-container mb-10">
                <div className="w-full h-full rounded-lg relative">
                    <div
                        className="overlay absolute inset-0 bg-gradient-to-t from-[rgb(0,0,0.5)] to-[rgb(0,0,0,0.5)] rounded-lg"></div>
                    <img
                        src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
                        alt=""
                        className="h-full w-full object-cover rounded-lg"
                    />

                    <div className="absolute left-5 bottom-5 w-full text-white">
                        <h2 className="font-bold text-3xl mb-5">Avengers: Endgame</h2>
                        <div className="flex items-center gap-x-3 mb-8">
                            <span className="py-2 px-4 border border-white rounder-md">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border border-white rounder-md">
                                Adventure
                            </span>
                            <span className="py-2 px-4 border border-white rounder-md">
                                Adventure
                            </span>
                            <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
                                Watch Now
                            </button>
                        </div>

                    </div>
                </div>


            </section>
            <section className="movies-layout page-container mb-20">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Now playing
                </h2>

                <MovieList/>
            </section>
            <section className="movies-layout page-container">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Top rated
                </h2>
                <div className="movie-list grid grid-cols-4 gap-10">
                    <MovieCard/>

                </div>
            </section>
        </Fragment>
    );
}

export default App;
