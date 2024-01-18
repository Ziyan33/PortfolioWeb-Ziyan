import React from "react";
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";


export const Hero = () =>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Ziyan</h1>
                <p className={styles.description}>I'm a Full stack developer </p>

                <a href="mailto:zliu169@my.centennialcollege.com" className={styles.contactBtn}>
                    Contact me
                </a>
            </div>
            <img src={getImageUrl("hero/selfieImage1.png")} alt="Hero Image of me" className={styles.heroImg}/>
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
        </section>
    )
}