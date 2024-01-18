import React, { useState,useEffect  } from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

import {ExperienceDetail} from './ExperienceDetail';

export const Experience = () => {
  const defaultSkillTitle = skills[0].title; // Assuming 'skills' is an array and has at least one skill

  const [selectedSkill, setSelectedSkill] = useState(defaultSkillTitle);
  const [selectedExperience, setSelectedExperience] = useState(null);

   // Add the useEffect hook here
   useEffect(() => {
    if (selectedExperience) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedExperience]);
  
  const handleSkillClick = (skillTitle) => {
    setSelectedSkill(skillTitle);
  };
 
  const handleHistoryItemClick = (historyItem) => {
    console.log("History item clicked:", historyItem);
    setSelectedExperience(historyItem);
  };

  
  

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>

          {skills.map((skill, id) => {
          
            return (
              <div 
                key={id} 
                className={`${styles.skill} ${selectedSkill === skill.title ? styles.skillSelected : ''}`} 
                onClick={() => handleSkillClick(skill.title)}
                onAnimationEnd={() => setSelectedSkill(null)} // Reset the animation state after it ends
                >
              
              
              <div className={styles.skillImageContainer}>
                 
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                 
              </div>
              <p>{skill.title}</p>
            </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history
           .filter(historyItem => !selectedSkill || (historyItem.skills && historyItem.skills.includes(selectedSkill)))
           .map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem} onClick={() => handleHistoryItemClick(historyItem)}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.projectTitle}`}</h3>
                  <p>{`${historyItem.startDate}`}</p>
                  <ul>
                    {historyItem.summary.map((sum, id) => {
                      return <li key={id}>{sum}</li>;
                    })}
                  </ul>
                </div>
                <div className={styles.overlayContent}>
                  <a href="#!">View Project</a> {/* Link to the project or detail view */}
                </div>
                
              </li>
            );
          })}
        </ul>
      </div>
      {selectedExperience && (
        <>
        <div className={`${styles.overlay} ${selectedExperience ? styles.overlayVisible : ''}`}
            onClick={() => setSelectedExperience(null)}
        ></div>
        <ExperienceDetail
        key={selectedExperience ? selectedExperience.projectTitle : 'none'}
          detail={selectedExperience}
          onClose={() => setSelectedExperience(null)}/>

          </>
      )}
    </section>
  );
};