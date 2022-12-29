import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <header className="header flex items-center justify-center gap-x-5 py-10 mb-10">
                <span className="text-primary">Home</span>
                <span>Movies</span>
            </header>
            <section className="banner h-[300px] page-container">
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
        </Fragment>
    );
}

export default App;
