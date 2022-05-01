import classes from "./projCards.module.css";

export default function ProjectCardFigma(props) {
  return (
    <article className={classes.projcards}>
      <div className={classes.subcard}>
        <div>{props.name}</div>
        <a href={props.link}>
          <img src={props.image} alt="projectimg" />
        </a>
       
      </div>
    </article>
  );
}
