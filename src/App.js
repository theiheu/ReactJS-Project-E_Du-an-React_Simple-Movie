import {Fragment} from "react";
import 'swiper/scss'
import {Route, Routes} from "react-router-dom";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";
import MoviePage from "./components/movie/MoviePage";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route element={<Main/>}>
                    <Route path="/" element={
                        <>
                            <Banner/>
                            <HomePage/>
                        </>
                    }/>
                    <Route path='/movies' element={<MoviePage/>}></Route>
                </Route>
            </Routes>

        </Fragment>
    );
}

export default App;
