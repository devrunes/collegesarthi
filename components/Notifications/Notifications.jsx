import React from 'react'
import styles from "./Notifications.module.css"

export default function Notifications() {
    return (
        <div>
            <button className={styles.AskQuestion}>Ask a Question</button>
            <button className={styles.SamplePapers}>Sample Papers</button>
            <div>
                <div>Notifications</div>
                <ol>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ol>
            </div>
        </div>
    )
}
