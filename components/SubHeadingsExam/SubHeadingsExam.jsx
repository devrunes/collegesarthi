import React from 'react'
import styles from './SubHeadingsExam.module.css';
export default function SubHeadingsExam(props) {
    const {data} = props
    console.log(data)
    return (
        <div>
            {data.map(subHeading => (
                 <ul className={styles.ListItem} >{subHeading}</ul>
            ))}
        </div>
    )
}
