import React from 'react'
import styles from './HomeExams.module.css'


export default function HomeExams() {
    return (
        <section className={styles.homeExamsSection}>
            <div className={styles.homeExamsHeading}>
                <h2>Top Featured Exams</h2>
                <p>Detailed information on every exam in one place, just for you!</p>
            </div>
            <div>
                <div className={styles.homeExamsCard}>
                    <div className={styles.topBar}>
                        <h3>Jee Mains</h3>
                        <button>Get Updates</button>
                    </div>
                    <div className={styles.middle}>
                        <p>lorem ipsum dolor sit amet, consectetur adip non pro id element u et dolor in repieres amet</p>
                    </div>
                    <div className={styles.footer}>

                    </div>
                </div>
            </div>
        </section>
    )
}
