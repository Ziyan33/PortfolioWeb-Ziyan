import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";


export const About = () => {
  return (
    <section  id="about" className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
                src={getImageUrl("about/aboutImage.png")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Education Background</h3>
                        <p>
                        I'm a junior software engineer at Centennial College, graduating in April 2024.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Project Experience</h3>
                        <p>
                            I'm proficient in full-stack development and data analytics, with three years of academic hands-on lab experience                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="UI Icon"/>
                    <div className={styles.aboutItemText}>
                        <h3>Entrepreneurial Work</h3>
                        <p>
                        I'm a digital marketer with three years of experience in video platforms, generating 20 million views
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
};

