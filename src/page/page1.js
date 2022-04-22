//import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
import Header from "../componets/Header";
import classes from "./page1.module.css";

export default function Intro() {
  return (
    <section className={classes.intro}>
      <header>
        <Header />
      </header>

      <main>
        <div className={classes.temp}>

          <div>

            <div className={classes.moon}>
              <div className={classes.moon1}></div>
              <div className={classes.water}></div>
            </div>

          </div>

          <div className={classes.stick}>
            <div className={classes.img}>vanathi photo</div>
          </div>

          <div className={classes.sintro}>
               <div>
                   hsdfkshfjsdhdklfjlksfjskldfjisfjlksdjflklkshf
               </div>

          </div>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
