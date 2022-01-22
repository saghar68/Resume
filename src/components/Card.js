
import react from "react";
import card from "../components/Card";
import Radium from "radium";
import styles from "../components/Card.module.css";
import {MdOutlineDateRange,MdAttachEmail } from "react-icons/md";
import {FaSkype,FaPhoneAlt} from "react-icons/fa";
import {FaRegAddressCard} from "react-icons/fa"


const Card = () => {
    return (
        <div className={styles.boxes}>
            <div className={styles.leftbox}>
            <h3>About Me</h3>
            <p>Hello! im Saghar Abazari.
                i am passionate about UI/UX design
             and web design a skilled 
             front-end developer and mester of
              graphic design tools such as 
              photoshop and quick learner and 
              a team worker that gets the job done.
              i can easily capitaliz on how hanging 
              fruits and quickly maximize timely 
              deliverbles for real-time schemas. 
                </p>
                </div>
                <div className={styles.rightbox}>
                <h3>Bio</h3>
                <ul className={styles.flex}>
                
                 <i><MdOutlineDateRange/>Age</i>
                 <li>28</li>
                   
                 
             
                 <i><MdAttachEmail/>Email</i>
                <li>saghi.abazari@gmail.com</li>

                  <i><FaSkype/>Skype</i>
                 <li>username@skype.com</li>
             
            
                 <i><FaPhoneAlt/>Phone</i>
                 <li>+7465842124</li>
            
            
                 <i><FaRegAddressCard/>Address</i>
                 <li>Stoke-on-trent,England,Uk</li>
             </ul>
                  </div>

                </div>
                


    );

}


export default (Card);