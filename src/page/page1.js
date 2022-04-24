//import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import classes from "./page1.module.css";

export default function Intro() {
  return (
    <section className={classes.intro}>
      <Header />

      <main>
        <Outlet></Outlet>
      </main>

  
        <Footer />
    
    </section>
  );
}
