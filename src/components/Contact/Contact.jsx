import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:zliu169@my.centennialcollege.com">zliu169@my.centennialcollege.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"/>
                <a href="https://www.linkedin.com/in/ziyan-liu33">Ziyan's Linkedin</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"/>
                <a href="https://github.com/Ziyan33">Ziyan's Github</a>
            </li>
        </ul>
    </footer>

  );
};