import React ,{useContext}from 'react'
import styles from './askAQueForm.module.css';
import SignUp from './SignUp';
import { ModelOpenContext } from "../../lib/authContext";
import Image from 'next/image';
import { useAuth } from "../../lib/auth";
const AskAQueForm = () => {

  const [model,setModel]=useContext(ModelOpenContext);

  //get user
    const { auth, user } = useAuth();

  const handleCrossClick = () => {
    setModel({ open: false, modelNo: 0 });
  };




    return (
 
      <div className={styles.auth_cont}>
        <div className={styles.auth_cont_p2}>
            <SignUp handleCrossClick={handleCrossClick} user={auth && auth.isLogin ? user : false}/>
        </div>
        <div  className={styles.auth_cont_p1}>
          <h2>why Join Us?</h2>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Never Miss an Update</p>
          </div>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Get All the Details regarding:</p>
          </div>
          <ul>
            <li>Exams</li>
            <li>Colleges</li>
            <li>Courses</li>
          </ul>
          <div className={styles.auth_cont_items}>
            <div className={styles.auth_tick_image}>
              <Image src="/tick.svg" alt="tick" layout="fill" />
            </div>
            <p>Stay Care Free</p>
          </div>
        </div>
      </div>
    
    )
}

export default AskAQueForm
