import React from 'react';
import Styles from "../components/About.module.css";
import Radium from "radium";
import card from "../images/keyboard.jpg";
import newpic from "../images/sagharphoto.jpeg";



const About = () => {
   
        return (
            <div className={Styles.imageBox}>
              <img className={Styles.imgBg} src={card} alt="keywords"/>  
              <div className={Styles.imageText}> 
              <img  src={newpic} alt="my real img"/>  
              <h1>Saghar Abazari</h1>
              <h3>Frontend Web Developer</h3>
              </div>
              
            </div>
            
        );
    }


export default Radium (About);