import classes from "./Range.module.css";

export default function Value(props) {
  return (
    <section className={classes.box}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.Value}>
        <div className={classes.fill} style={{ width: `${props.fill}` }}>
          
         <span>{props.fill}</span> </div>
      </div>
      
    </section>
  );
}
