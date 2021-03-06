import React from 'react';
import styles from './ProjectCard.module.scss';

//I need to update this with my styles - this appears on the main Landing Page:

const ProjectCard = ({img, cardCoverText, onClick}) => {
    return (
        <div className={styles.projCardContainer} onClick={onClick}>
      

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