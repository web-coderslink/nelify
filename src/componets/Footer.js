import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faYoutube,
  faFigma
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
        created by Vanathi @copyrights
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
           <a  href='https://www.figma.com/files/project/48232135/Team-project?fuid=1070212503789656397' > <FontAwesomeIcon  icon={faFigma} color='torquise'  ></FontAwesomeIcon></a>
          </div>
    </footer>
  );
}
