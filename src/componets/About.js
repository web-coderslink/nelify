import classes from "./About.module.css";
import Value from "./Range";
import '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faCode } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <section className={classes.About}>
      <div className={classes.cardTop}>
        <div className={classes.title}><FontAwesomeIcon icon={faCode} /></div>
        <div className={classes.contents}>
          <table style={{ width: "100%" }}>
            <tr>
              <th style={{ width: "50%" }}>Back-end</th>
              <th style={{ width: "50%" }}>front-end</th>
            </tr>

            <tr>
              <td> <Value title='Node js' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>

            <tr>
            <td> <Value title='SQL' fill='70%' /></td>
              <td><Value title='java script' fill='90%' /></td>
            </tr>
            <tr>
            <td> <Value title='PHP' fill='50%' /></td>
              <td><Value title='HTML/CSS' fill='90%' /></td>
            </tr>
            <tr>
            <td> <Value title='Express Js' fill='70%' /></td>
              <td><Value title='Bootstrap' fill='70%' /></td>
            </tr>

            <tr>
            <td> <Value title='Mongoose' fill='50%' /></td>
              <td><Value title='JQuery' fill='60%' /></td>
            </tr>

            <tr>
            <td></td>
              <td><Value title='pug' fill='40%' /></td>
            </tr>
            <tr>
              <th>Software</th>
              <td> VScode MYSQL MongoDB Postman Figma</td>
            </tr>

            <tr>
              <th>Hosting Platforms</th>
              <td>Netlify Heroku SurghSh</td>
            </tr>

            <tr>
              <th>other</th>
              <td>Python</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={classes.cardTop}>
        <div className={classes.title}>
        About me</div>
        <div className={classes.contents}>
          <p>
          Having been introduced to web development few months ago i was able to master MERN stack framework.
          
          </p>
        </div>
      </div>

      <div className={classes.cardTop}>
        <div className={classes.title}><FontAwesomeIcon icon={faCertificate} /></div>
        <div className={classes.contents}>
          <table style={{ width: "100%" , backgroundColor:'rgb(40, 4, 10)'}}>
              <tr>
                <th>java script</th>
                <td>The Complete JavaScript Course 2022: From Zero to Expert!</td>
              </tr>

              <tr>
                <th>PHP</th>
                <td> The Complete PHP MYSQL Professional Course with 5 Projects</td>
              </tr>

              <tr>
                <th>React</th>
                <td>React - The Complete Guide (incl Hooks, React Router, Redux)</td>
              </tr>

              <tr>
                <th>Node Js</th>
                <td>has to enter</td>
              </tr>
          </table>
        </div>
      </div>


    </section>
  );
}
