import "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from './head.module.css'
export default function Header() {
  return (
    <header className={classes.head}>
      <div className={classes.icon}>
        <h4>vanathi Resume</h4>
      </div>

      <div className={classes.nav}>
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/project">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </header>
  );
}
