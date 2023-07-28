import classes from "./Home.module.css"
const Home=()=>{
    return(
        <div className={classes.outer}>
        <div >
          <button className={classes.btn}>Get our Latest Album</button>
        </div>
        <div className={classes.playBtn}>
        <div className={classes['arrow-right']}></div> </div>

        </div>
    )

}
export default Home;