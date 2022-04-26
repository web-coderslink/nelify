import classes from './project.module.css'
import ProjectCard from './ProjCard'

export default function Project(){
    return (<section className={classes.project} >
        <article className={classes.title}>Projects done</article>
        <main className={classes.lst}>
           <ProjectCard name='Quick Image Edit' image='https://www.solutions4u-asia.com/TRG/TRG12/DigitalImageProcessing2.PNG' details='some' link=" https://qucik_image.surge.sh/"/>
           <ProjectCard name='Daily Journal' image='https://i.pinimg.com/564x/64/d5/56/64d5567450b47b03b7f38de620f59a58.jpg' details='some' link="https://trackers-app.herokuapp.com/"/>
           <ProjectCard name='image to text' image='some image' details='some' link="https://illustrious-lebkuchen-fd79e9.netlify.app"/>
           <ProjectCard name='job hunt' image='some image' details='some' />
           <ProjectCard name='Render recepie' image='some image' details='some' />
        </main>
        <article className={classes.title}>Mini projects</article>
        <main className={classes.lst}>
        <ProjectCard name='some name' image='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210318144140/pig-Game.gif' details='some' />
        <ProjectCard name='Weather app' image='https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg' details='some' link="https://late-condition.surge.sh/" />
        </main>
    </section>)
}