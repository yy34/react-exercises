import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies, fetchMovies } from "../src/features/slices/movie/index";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const searchedMovie = "scarface";
  useEffect(() => {
    dispatch(fetchMovies(searchedMovie));
  }, []);
  return <h1 className="text-3xl font-bold">Movie App with React Toolkit</h1>;
}

export default App;
