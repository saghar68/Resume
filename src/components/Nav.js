import React from 'react';
import styles from "../components/Nav.module.css";
import Radium from "radium"



const Nav = () => {
    
        return (

          <header className={styles.header}>
              
            <div className={styles.logo}>
    
                    <h4>Walter Patterson</h4>
            </div>
                <ul className={styles.list}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Education</li>
                    <li>Portfolio</li>
                    <li>References</li>
                    <li>Contact</li>
                </ul>
                
            

            </header>
        );
    };


export default Radium(Nav);