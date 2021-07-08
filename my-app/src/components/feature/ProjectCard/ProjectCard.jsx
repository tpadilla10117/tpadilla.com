import React from 'react';
import styles from './ProjectCard.module.scss';

//I need to update this with my styles - this appears on the main Landing Page:

const ProjectCard = ({img, title, tech, cardCoverText, onClick}) => {
    return (
        <div className={styles.projCardContainer} onClick={onClick}>
        {/* <div className={styles.Img}>
          {svgImg}
        </div> */}
        {/* <div className={styles.Text}>
          <h1>{title}</h1>
          <h2>{tech}</h2>
        </div> */}


        {/* Where I'm starting my styles: */}
        <div className={styles.projCardBox}>
          <div className={styles.imgWrapper}>
              <img src={img} alt=""/>
          </div>

          <div className={styles.detailsBox}>
            <div className={styles.contentBox}>
              <p>{cardCoverText}</p>
            </div>
          </div>
        </div>



    </div>
    )
}

export default ProjectCard;

{/* <div className="projCard-container">

        
  <div className="projCard-box">
      <div className="img-wrapper">
          <img src={CrwnClothing} alt="A clickable card of an application called `Crwn Clothing`"/>
      </div>

      <div className="details-box">
      <div className="content-box">
          
          <p>An e-commerce for Stylish, Trendy Clothing</p>
      </div>
      </div>
  </div> */}