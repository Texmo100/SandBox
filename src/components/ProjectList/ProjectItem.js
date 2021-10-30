import React from 'react'

import styles from './ProjectItem.module.css'

const ProjectItem = props => {
    return (
        <li className={styles["project-item"]}>
            <p className={styles["project-item__name"]}>{props.projectName}</p>
            <p className={styles["project-item__version"]}>{props.version}</p>
        </li>
    )
}

export default ProjectItem