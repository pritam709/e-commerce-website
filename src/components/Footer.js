import Facebook from "../Icons/Facebook"
import Spotify from "../Icons/Spotify"
import Youtube from "../Icons/Youtube"
import classes from "./Footer.module.css"
const Footer=()=>{
    return <div className={classes.footer}>
       <div className={classes.generics}>
          <h1>The Generics</h1>
        </div>
        <div className={classes.contacts}>
       <div> <Youtube/></div>
        <div><Spotify/></div>
        <div><Facebook/></div>
        

        </div>
    </div>

}
export default Footer