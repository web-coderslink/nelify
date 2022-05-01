import classes from './project.module.css'
import ProjectCard from './ProjCard'
import ProjectCardFigma from './ProjCardFigma'

export default function Project(){
    return (<section className={classes.project} >
        <article className={classes.title}>Projects done</article>
        <main className={classes.lst}>
           <ProjectCard name='Quick Image Edit' image='https://www.solutions4u-asia.com/TRG/TRG12/DigitalImageProcessing2.PNG' details='Edit image, Adding background, Frame, image blur, cropping image and download image in jpg/png form' link=" https://qucik_image.surge.sh/"/>
           <ProjectCard name='Daily Journal' image='https://i.pinimg.com/564x/64/d5/56/64d5567450b47b03b7f38de620f59a58.jpg' details='A Journal to update everyday work' link="https://trackers-app.herokuapp.com/"/>
           <ProjectCard name='image to text' image='https://easypdf.com/images/OCR-tool.png' details='Converts image to text using tessaract' link="https://illustrious-lebkuchen-fd79e9.netlify.app"/>
           <ProjectCard name='Resume' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMYncxSsKqG2R808ed780rARZhfsdGR0wyg&usqp=CAU' details='My Resume using Reactjs' link='https://626c2990943bb40009db38ca--glistening-parfait-3963bb.netlify.app/' />
           <ProjectCard name='Render recepie' image='https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=800&h=533&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F04%2F15%2FSour-Power-FT-2-MAG0522.jpg' details='Collection of recipes can be searched and create your own recipe' link='https://render-recipe.netlify.app/' />
        </main>
        <article className={classes.title}>Mini projects</article>
        <main className={classes.lst}>
        <ProjectCard name='Pig game' image='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210318144140/pig-Game.gif' details='Roll dice to Score' />
        <ProjectCard name='Weather app' image='https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg' details='Weather report of places' link="https://late-condition.surge.sh/" />
        <ProjectCard name='Meals Today' image='https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg' details='Choose dish and add it to cart for serving' link='https://626c24b3461b920059cdbcda--ephemeral-bunny-176a29.netlify.app/' />
        </main>

        <article className={classes.title}>Figma Projects</article>
        <main className={classes.lst}>
         <ProjectCardFigma image='https://github.com/web-coderslink/Figma-projects/blob/main/Android%20Large%20-%201hat-shop-mob.png?raw=true' name='Hats shop(mobile)' />
         <ProjectCardFigma image='https://github.com/web-coderslink/Figma-projects/blob/main/Desktop%20-%201.jpg?raw=true' name='Hats shop(desktop)' />
         <ProjectCardFigma  name='Hats shop(tab)'   image='https://github.com/web-coderslink/Figma-projects/blob/main/iPad%20mini%208.3%20-%201hat-shop.png?raw=true'/>
         <ProjectCardFigma image='https://github.com/web-coderslink/Figma-projects/blob/main/resumetempvanathi-resume-1.png?raw=true' name='Resume template' />
         <ProjectCardFigma image='https://github.com/web-coderslink/Figma-projects/blob/main/resumetempvanathi-resume-2.png?raw=true' name='Resume template' />
         <ProjectCardFigma image='https://github.com/web-coderslink/Figma-projects/blob/main/resumetempvanathi-resume-3.png?raw=true' name='Resume template' />
        </main>
    </section>)
}