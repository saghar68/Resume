import React from 'react';
import styles from "../components/Logo.module.css";
//import twitter from "../images/twitter.png";
//import facebook from "../images/facebook.png";
//import instagram from "../images/instagram.jpeg";
import logox from "../images/logo.png"


const logo = () => {
    return (
        <div className={styles.container}>
           <img src={logox} alt="logo" />
           <button className={styles.btn} type="button">DOWNLOAD CV</button>
           <button className={styles.btn} type="button">HIRE ME</button>
        </div>
        
       
        
         
        
        
    );
};

export default logo;