
import styles from './Auth.module.css';
import SignUp from './SignUp';
import Image from 'next/image';
const Auth = () => {
    return (
        <div
      className={styles.auth_wrapper}
    >
      <div className={styles.auth_cont}>
        <div className={styles.auth_cont_p2}>
         
            <SignUp/>
         
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
    </div>
    )
}

export default Auth
