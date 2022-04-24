import classes from "./About.module.css";
import Value from "./Range";
export default function About() {
  return (
    <section className={classes.About}>
      <div className={classes.cardTop}>
        <div className={classes.title}>Skills</div>
        <div className={classes.contents}>
          <table style={{ width: "100%" }}>
            <tr style={{ backgroundColor: "black" }}>
              <th style={{ width: "50%" }}>Back-end</th>
              <th style={{ width: "50%" }}>front-end</th>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
              <td> <Value title='Node js' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
            <td> <Value title='SQL' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>
            <tr style={{ backgroundColor: "black" }}>
            <td> <Value title='PHP' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>
            <tr style={{ backgroundColor: "black" }}>
            <td> <Value title='Express Js' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
            <td> <Value title='Mongoose' fill='80%' /></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
            <td></td>
              <td><Value title='React js' fill='80%' /></td>
            </tr>
            <tr style={{ backgroundColor: "black" }}>
              <th>Software</th>
              <td> VScode MYSQL MongoDB Postman</td>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
              <th>Hosting Platforms</th>
              <td>Netlify Heroku SurghSh</td>
            </tr>

            <tr style={{ backgroundColor: "black" }}>
              <th>other</th>
              <td>Python</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={classes.cardTop}>
        <div className={classes.title}>About me</div>
        <div className={classes.contents}>
          <p>
            bshdf hoihgf jhiuerg h8uertb ihnjvnywiip jbkjvhopeiprt bjhoierg
            jkehgiehbg wjhjbvoierhg oio9uruiwgbngv kjnvbeoishegfwjkrgb
            jhjkfbvkjbeg bkehrfbriugh bjoivheogbr jshvioeugioh jbkjvndoiueg nb
            vkjdhvoej jioshfiugbf fromnbnvbkehgi jnvkhioghworighnw
            ljbvkdbijhwrug nbvkjfhogihwrignf
          </p>
        </div>
      </div>

      <div className={classes.cardTop}>
        <div className={classes.title}>Certifications</div>
        <div className={classes.contents}>
          <table style={{ width: "100%" , backgroundColor:'black'}}>
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

      <div className={classes.cardTop}>
        <div className={classes.title}>About me</div>
        <div className={classes.contents}></div>
      </div>
    </section>
  );
}
