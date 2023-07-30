import React from "react";
import classes from "./Home.module.css"
const Home=()=>{
  const fetchMovies=async()=>{

    const response = await fetch('https://swapi.dev/api/films/');
    const responseData= await response.json();
    console.log(responseData.results);
    

}
    return(
        <div className={classes.outer}>
        <div >
          <button onClick={fetchMovies} className={classes.btn}>Get our Latest Album</button>
        </div>
        <div className={classes.playBtn}>
        <div className={classes['arrow-right']}></div> </div>

        </div>
    )

}
export default Home;