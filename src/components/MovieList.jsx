import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseImgURL, options } from "../constant";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre, setShowBar }) => {
  const [movies, setMovies] = useState(null);
  // gelen proptaki kategorinin id'sine bilgisine göre
  // kategoriye ait film verisini çekip
  // bunları slider içerisinde listeleme
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  });
  return (
    <div className="p-4">
      <h1 className="mb-3">{genre.name}</h1>
      <Splide
        options={{
          // rewind: true,
          loop: true,
          gap: "10px",
          autoWidth: true,
          pagination: false,
        }}
      >
        {movies?.map((movie) => (
          <SplideSlide>
            <Link
              onClick={() => setShowBar(false)}
              to={`/detay/${movie.id}`}
            >
              <img className="movie" src={baseImgURL + movie.poster_path} />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
