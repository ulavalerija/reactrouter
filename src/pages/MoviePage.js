import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const [movieData, set_movieData] = useState({});
  const route_parameters = useParams();

  useEffect(() => {
    async function fetchData(imdbID) {
      console.log("id", imdbID);
      const data = await axios.get(
        `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=9d0414f`
      );
      console.log("fetched data", data.data);
      set_movieData(data.data);
    }
    fetchData(route_parameters.imdbID);
  }, []);

  return (
    <div>
      <h2>{movieData.Title}</h2>
      <h3>
        {movieData.Year} {movieData.Genre}
      </h3>
      <img src={movieData.Poster}></img>
      <h4>
        Director: {movieData.Director}, Language: {movieData.Language}{" "}
      </h4>
    </div>
  );
}
