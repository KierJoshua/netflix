import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGU4Zjg5MDYyNTBkYjM0Mjc2YWI1MjUyNjY2ZTliZCIsIm5iZiI6MTczNzAyMzYzOS43NzIsInN1YiI6IjY3ODhlMDk3OTRkOTU4MzlmM2FkMjVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUnpv5dkjsqS1FE8bwvWX_H2J8Ej71zWIESrK9o2_c",
  },
};

function MyList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const categories = ["top_rated", "popular", "upcoming"];

    Promise.all(
      categories.map((category) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
          API_OPTIONS
        ).then((res) => res.json())
      )
    )
      .then((responses) => {
        const mergedMovies = responses.flatMap((res) => res.results);
        setMovies(mergedMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  const ref = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        ref.current.classList.add("bg-black");
      } else {
        ref.current.classList.remove("bg-black");
      }
    });
  }, []);

  return (
    <>
      <div className="bg-[#141414] text-white font-[Poppins] overflow-hidden min-h-screen">
        <Navbar />
        <div className=" my-32">
          <div className="w-full fixed top-10 sm:top-16 z-10 py-4 px-[6%]" ref={ref}>
            <h1 className="text-sm sm:text-xl md:text-3xl  font-semibold text-white ">MY LIST</h1>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-2 px-[6%]">
            {movies.map((movie, index) => (
              <Link
                to={`/player/${movie.id}`}
                key={index}
                className="col-span-4 sm:col-span-3 md:col-span-2 my-5 mx-1 relative cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                  className="rounded"
                />
                <p className="absolute bottom-2 left-2 text-xs sm:text-base text-white sm:text-transparent hover:text-white">
                  {movie.original_title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MyList;
