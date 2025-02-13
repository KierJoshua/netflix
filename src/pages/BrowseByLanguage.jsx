import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { IoMdArrowDropdown } from "react-icons/io";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_API_KEY",
  },
};

function BrowseByLanguage() {
  const [movies, setMovies] = useState([]);
  const [language, setLanguage] = useState("Original Language");
  const [subtitle, setSubtitle] = useState("English");
  const [sortBy, setSortBy] = useState("Suggestions For You");

  useEffect(() => {
    const categories = ["popular", "top_rated", "upcoming"];

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

  // 🔥 Function to update dropdown selections
  const handleDropdownChange = (setter, value) => {
    setter(value);
  };

  return (
    <>
      <div className="bg-[#141414] text-white font-[Poppins] overflow-hidden min-h-screen">
        <Navbar />

        {/* Fixed Top Header with Proper Padding */}
        <div className="fixed top-16 z-10 w-full bg-transparent">
          <div className="flex-col md:flex md:flex-row justify-between px-[6%] w-full items-center py-4" ref={ref}>
            <h1 className="text-md sm:text-xl md:text-3xl font-semibold text-white">Browse By Language</h1>

            <div className="flex items-center gap-4">
              <p>Select your preferences</p>

              {/* Dropdown: Original Language */}
              <details className="dropdown relative">
                <summary className="btn m-1 bg-black text-white border-white px-10 py-2 rounded-none">
                  {language} <IoMdArrowDropdown />
                </summary>
                <ul className="menu dropdown-content z-[10] w-52 p-2 shadow absolute bg-black text-white border-white px-10 py-2 rounded-none">
                  <li className="hover:underline">
                    <button onClick={() => handleDropdownChange(setLanguage, "Dubbing")}>Dubbing</button>
                  </li>
                  <li className="hover:underline">
                    <button onClick={() => handleDropdownChange(setLanguage, "Subtitles")}>Subtitles</button>
                  </li>
                </ul>
              </details>

              {/* Dropdown: Subtitle Language */}
              <details className="dropdown relative">
                <summary className="btn m-1 bg-black text-white border-white px-10 py-2 rounded-none">
                  {subtitle} <IoMdArrowDropdown />
                </summary>
                <ul className="menu dropdown-content z-[10] w-52 p-2 shadow absolute bg-black text-white border-white px-10 py-2 rounded-none">
                  {["English", "French", "Japanese", "Korean", "Indonesian"].map((lang) => (
                    <li key={lang} className="hover:underline">
                      <button onClick={() => handleDropdownChange(setSubtitle, lang)}>{lang}</button>
                    </li>
                  ))}
                </ul>
              </details>

              <p>Sort by</p>

              {/* Dropdown: Sort By */}
              <details className="dropdown relative">
                <summary className="btn m-1 bg-black text-white border-white px-10 py-2 rounded-none">
                  {sortBy} <IoMdArrowDropdown />
                </summary>
                <ul className="menu dropdown-content z-[10] w-52 p-2 shadow absolute bg-black text-white border-white px-10 py-2 rounded-none">
                  {["Year Released", "A-Z", "Z-A"].map((option) => (
                    <li key={option} className="hover:underline">
                      <button onClick={() => handleDropdownChange(setSortBy, option)}>{option}</button>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="px-[6%] my-40 w-full">
          <div className="mt-10 grid grid-cols-12 gap-2">
            {movies.map((movie, index) => (
              <Link
                to={`/player/movie/${movie.id}`}
                key={index}
                className="col-span-2 my-5 mx-1 relative cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=""
                  className="rounded"
                />
                <p className="absolute bottom-2 left-2 text-transparent hover:text-white">
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

export default BrowseByLanguage;
