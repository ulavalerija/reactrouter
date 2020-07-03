import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchState, set_searchState] = useState("idle");

  const search = async () => {
    console.log("Start searching for:", searchText);
    const queryParam = encodeURIComponent(searchText);
    set_searchState("searching...");
    const data = await axios.get(
      `http://www.omdbapi.com/?s=${queryParam}&apikey=9d0414f`
    );
    console.log("Success!", data.data.Search);
    setMovies(data.data.Search);
    set_searchState("done");
  };
  return (
    <div>
      <h1>Discover some movies!</h1>
      <h2>{searchState}</h2>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>
        {movies.map((movie) => {
          return (
            <div>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>{" "}
              {movie.Year} <img src={movie.Poster}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
