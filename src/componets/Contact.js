import classes from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faYoutube,faFigma
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Contact() {
  return (
    <>
      <section className={classes.Contact}>
        <div className={classes.card}>
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
           <a  href='https://www.figma.com/files/project/48232135/Team-project?fuid=1070212503789656397' > <FontAwesomeIcon  icon={faFigma} color='torquise'  ></FontAwesomeIcon></a>
          </div>
        </div>
    
      </section>
    </>
  );
}
