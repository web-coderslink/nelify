import "react-router-dom";
import { NavLink } from "react-router-dom";
import classes from './head.module.css'
export default function Header() {
  return (
    <header className={classes.head}>
      <div className={classes.icon}>
  <a href="/"><h4>Vanathi Muthuraman</h4></a>
      </div>

      <div className={classes.nav}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </div>
    </header>
  );
}
