import React from 'react';
import styles from './ExperienceDetail.module.css';
import experienceDetailsData from '../../data/experienceDetails.json';
import { getImageUrl } from '../../utils'; // Assuming this utility correctly resolves image paths

export const ExperienceDetail = ({ detail, onClose }) => {
  if (!detail) return null;

  const detailData = experienceDetailsData.find(d => d.projectTitle === detail.projectTitle);
  const backgroundImage = getImageUrl("experience/bgBlue.png");
  const closeButtonImage = getImageUrl("experience/closeBtn.png");
  const projectImage = getImageUrl(detailData.projectImageUrl);

  if (!detailData) return <p className={styles.notFound}>Detail not found</p>;

  return (
    <div className={`${styles.detailContainer} ${detail ? styles.visible : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <button onClick={onClose} className={styles.closeButton}>   
        <img src={closeButtonImage} alt="Close" />
      </button>
      
      <div className={styles.content}>
        <h2 className={`${styles.projectTitle} ${styles.purpleTitle}`}>
          {detailData.projectTitle}
        </h2>
        
        <img src={projectImage} alt={detailData.projectTitle} className={styles.projectImage} />

        <div className={styles.projectOverview}>
        <div className={styles.projectOverviewTitle}>
          <h4>Project Overview:</h4></div>
          {detailData.projectOverview.map((item, index) => (
            <p key={index} className={styles.text}>{item}</p>
          ))}
        </div>

        <div className={styles.technologiesUsed}>
        <div className={styles.technologiesUsedTitle}>
          <h4>Technologies Used:</h4></div>
          {detailData.technologiesUsed.map((tech, index) => (
            <span key={index} className={styles.techTag}>{tech}</span>
          ))}
         </div>

         <div className={styles.linkTitle}>
          <h4>Link:</h4></div>
         <div className={styles.buttonContainer}>
        {detailData.videoDemoUrl &&(
          <div className={styles.btn}>
           <a href={detailData.videoDemoUrl} target="_blank" rel="noopener noreferrer">
            <span className={styles.buttonIcon}> {/* SVG icon here if needed */} </span>
            Video Demo
          </a></div>)}

        {detailData.githubUrl &&(
          <div className={styles.btn}>
            <a href={detailData.githubUrl} target="_blank" rel="noopener noreferrer" >
              <span className={styles.buttonIcon}> {/* SVG icon here if needed */} </span>
              GitHub
            </a></div>)}

        </div>


        <div className={styles.keyFeatures}>
        <div className={styles.keyFeaturesTitle}>
        <h4>Key Features:</h4></div>
          <ul>
            {detailData.keyFeatures.map((feature, index) => (
              <li key={index} className={styles.listItem}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className={styles.lessonsLearned}>
          <h4 className={styles.lessonsLearnedTitle}>Lesson Learned:</h4>
          <p className={styles.text}>{detailData.lessonsLearned}</p>
        </div>
        {detailData.potentialImprovement && detailData.potentialImprovement.length > 0 && (
        <div className={styles.potentialImprovement}>
          <h4 className={styles.potentialImprovementTitle}>Potential Improvement:</h4>
          <p className={styles.text}>{detailData.potentialImprovement.join(", ")}</p>
        </div>
        )}
      </div>
    </div>
  );
};
