import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
        created by Vanathi @copyrights
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
    </footer>
  );
}
