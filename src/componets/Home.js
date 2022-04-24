import classes from "./../page/page1.module.css";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section className={classes.temp}>
      <article className={classes.sintro}>
        <div className={classes.moon}>
          <div className={classes.moon1}></div>
        </div>

        <div className={classes.stick}>
          <div className={classes.img}>vanathi photo</div>
        </div>

        <div className={classes.logo}>
          <h4>Vanathi Muthuraman</h4>
          <p>Full stack webdeveloper and UI/UX designer</p>
          <div className={classes.social}>
            <div>
              <FontAwesomeIcon icon={faInstagram} color="deeppink" />{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faYoutube} color="red"></FontAwesomeIcon>
            </div>
            <div>
              <FontAwesomeIcon icon={faGithub} color="white" />{" "}
            </div>
            <div>
              <FontAwesomeIcon icon={faFacebook} color="blue"></FontAwesomeIcon>
            </div>
            <div>
              <FontAwesomeIcon icon={faGoogle} color="yellow" />{" "}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faLinkedin}
                color="dodgerblue"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </article>

      <article className={classes.sintro1}>
        <div className={classes.AbtSmall}>
          <div className={classes.Abt1}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/female-caring-for-plants-in-pot-4975481-4159234.png" alt='image1'></img>
          </div>
          <div className={classes.Abt2}>
            <h2>About me</h2>
            <p>ABout me </p>
            <button> About me </button>
          </div>
        </div>
      </article>

      <article className={classes.sintro1}>
        <div className={classes.Recent}>
          <h3>Recent Works</h3>
          <ul>
            <li><span></span> project 1</li>
            <li><span></span> project 2</li>
            <li><span></span> project 3</li>
            <li><span></span> project 4</li>
            <li><span></span> project 5</li>
          </ul>
          <button>Explore</button>
        </div>
      
      </article>

      <article className={classes.sintro1}>
        <div className={classes.contact}>
          <div  className={classes.contactA}><img src="https://st2.depositphotos.com/3591429/5246/i/600/depositphotos_52467875-stock-photo-hipster-man-filing-in-application.jpg" alt='image2'></img></div>
          <div  className={classes.contactB}>
            <span className={classes.triangleA}></span>
            <span className={classes.triangleB}></span>
          </div>
          <div className={classes.details}>
                    Contact
          </div>
        </div>
      </article>
    </section>
  );
}
