import classes from "./../page/page1.module.css";
import "@fortawesome/fontawesome-svg-core";
import  "@fortawesome/free-regular-svg-icons";
import "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFigma,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
            <a href="https://www.instagram.com/vanavan_art/">
              <FontAwesomeIcon icon={faInstagram} color="deeppink" />{" "}
            </a>
            <a href="https://youtu.be/EtuG-qX4mqc">
              <FontAwesomeIcon icon={faYoutube} color="red"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/web-coderslink">
              <FontAwesomeIcon icon={faGithub} color="white" />{" "}
              </a>
            <a href="https://www.facebook.com/vanathi.muthuraman.7">
              <FontAwesomeIcon icon={faFacebook} color="blue"></FontAwesomeIcon>
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faGoogle} color="yellow" />
              </a>
            <a href="https://www.linkedin.com/in/vanathi-muthuraman-911502b6/">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="dodgerblue"
              ></FontAwesomeIcon>
           </a>
           <a  href='https://www.figma.com/files/project/48232135/Team-project?fuid=1070212503789656397' > <FontAwesomeIcon  icon={faFigma} color='white'  ></FontAwesomeIcon></a>
          </div>
        </div>
      </article>

      <article className={classes.sintro1}>
        <div className={classes.AbtSmall}>
          <div className={classes.Abt1}>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-caring-for-plants-in-pot-4975481-4159234.png"
              alt="image1"
            ></img>
          </div>
          <div className={classes.Abt2}>
            <h2>About me</h2>
            <p>Hello, I am vanathi  and I am a  beginner in web development . Im  a creative thinker and an excellent artist . Started web developement few months ago and now I spend most of my day, experimenting with HTML, CSS and JavaScript (and its endless list of frameworks). I enjoy coding and the challenge of learning something new everyday. My works are in Figma and Github. 
               </p>
            <a href='/aboutme'><button>Read more</button></a>
          </div>
        </div>
      </article>

      <article className={classes.sintro1}>
        <div className={classes.Recent}>
          <h3>Recent Works</h3>
          <ul>
            <li>
              <span></span> project 1
            </li>
            <li>
              <span></span> project 2
            </li>
            <li>
              <span></span> project 3
            </li>
            <li>
              <span></span> project 4
            </li>
            <li>
              <span></span> project 5
            </li>
          </ul>
          <button>Explore</button>
        </div>
      </article>

      <article className={classes.sintro1}>
        <div className={classes.contact}>
          <div className={classes.contactA}>
            <img
              src="https://st2.depositphotos.com/3591429/5246/i/600/depositphotos_52467875-stock-photo-hipster-man-filing-in-application.jpg"
              alt="image2"
            ></img>
          </div>
          <div className={classes.contactB}>
            <span className={classes.triangleA}></span>
            <span className={classes.triangleB}></span>
          </div>
          <div className={classes.details}>
            <div style={{marginBottom:'1rem'}}>CONTACT</div>
            <div style={{marginBottom:'1rem'}}>Vanathi Muthuraman</div>
            <div style={{marginBottom:'1rem'}}><FontAwesomeIcon icon={faPhone} color='white' />  +9361567651</div>
            <div><FontAwesomeIcon icon={faEnvelope} color='white' /> vanathiceles9024@gmail.com</div>
            <div className={classes.social}>
            <a href="https://www.instagram.com/vanavan_art/">
              <FontAwesomeIcon icon={faInstagram} color="deeppink" />{" "}
            </a>
            <a href="https://youtu.be/EtuG-qX4mqc">
              <FontAwesomeIcon icon={faYoutube} color="red"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/web-coderslink">
              <FontAwesomeIcon icon={faGithub} color="white" />{" "}
              </a>
            <a href="https://www.facebook.com/vanathi.muthuraman.7">
              <FontAwesomeIcon icon={faFacebook} color="blue"></FontAwesomeIcon>
            </a>
            <a href="/">
              <FontAwesomeIcon icon={faGoogle} color="yellow" />
              </a>
            <a href="https://www.linkedin.com/in/vanathi-muthuraman-911502b6/">
              <FontAwesomeIcon
                icon={faLinkedin}
                color="dodgerblue"
              ></FontAwesomeIcon>
           </a>
           <a  href='https://www.figma.com/files/project/48232135/Team-project?fuid=1070212503789656397' > <FontAwesomeIcon  icon={faFigma} color='white'  ></FontAwesomeIcon></a>
          </div>
          </div>
        </div>
      </article>
    </section>
  );
}
