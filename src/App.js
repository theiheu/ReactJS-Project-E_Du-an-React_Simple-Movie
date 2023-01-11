import {Fragment, lazy, Suspense} from "react";
import 'swiper/scss'
import {Route, Routes} from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"))
const MoviePage = lazy(() => import("./pages/MoviePage"))

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>

                <Routes>
                    <Route element={<Main/>}>
                        <Route path="/" element={
                            <>
                                <Banner/>
                                <HomePage/>
                            </>
                        }/>
                        <Route path='/movies' element={<MoviePage/>}></Route>
                        <Route path='/movie/:moviesId' element={<MovieDetailsPage/>}></Route>
                    </Route>
                </Routes>
            </Suspense>

        </Fragment>
    );
}

export default App;
