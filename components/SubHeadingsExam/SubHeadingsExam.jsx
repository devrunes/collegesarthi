import Link from 'next/link';
import React from 'react'
import styles from './SubHeadingsExam.module.css';
export default function SubHeadingsExam(props) {
    const {data, query} = props
    // console.log(data,Object.keys(data))
    return (
        <div>
            {/* {data.map(subHeading => (
                 <ul className={styles.ListItem} >{subHeading}</ul>
            ))} */}
        {
            Object.entries(data).map(([key, value]) => (
                <ul className={styles.ListItem}>
                <Link href={`/blogs/${query.type}/${query.article}#${value}`}>
                    <a>{key}</a>
                </Link>
                </ul>
            ))
        }
        </div>
    )
}
