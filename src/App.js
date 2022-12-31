import {Fragment} from "react";
import 'swiper/scss'
import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";

function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 py-10 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>

            <Banner/>
            <section className="movies-layout page-container mb-20">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Now playing
                </h2>

                <MovieList/>
            </section>
            <section className="movies-layout page-container mb-20">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Top rated
                </h2>
                <div className="movie-list">
                    <MovieList type="top_rated"/>

                </div>
            </section>
            <section className="movies-layout page-container">
                <h2 className="capitalize text-white mb-5 text-3xl font-bold">
                    Trending
                </h2>
                <div className="movie-list">
                    <MovieList type="popular"/>

                </div>
            </section>
        </Fragment>
    );
}

export default App;
