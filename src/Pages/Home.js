import React, { useState,useEffect } from "react";
import classes from "./Home.module.css";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchMovies = async () => {
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        if (!response.ok) {
          throw new Error("something went wrong");
        }
        const responseData = await response.json();
  
        console.log(responseData.results);
        setMovies(responseData.results);
        
      } catch (error) {
        setError(error.message)
      }
  
      setIsLoading(false);
    };

    fetchMovies();
  },[])

 
  return (
    <>
      <div className={classes.outer}>
        <div>
          <button className={classes.btn}>
            Get our Latest Album
          </button>
        </div>
        <div className={classes.playBtn}>
          <div className={classes["arrow-right"]}></div>{" "}
        </div>
      </div>
      <div>
        {isLoading && <p>Loading......</p>}
        {!isLoading && error && <p> {error}</p>}
        <ul>
          {movies.map((item) => {
            return <li key={item.episode_id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Home;
