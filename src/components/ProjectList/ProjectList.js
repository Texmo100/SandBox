import React from 'react'
import ProjectItem from './ProjectItem'
import ItemContainer from '../UI/ItemContainer/ItemContainer'

import projectsData from '../../data/projectsData'
import styles from './ProjectList.module.css'


const ProjectList = () => {
    return (
        <ItemContainer>
            <ul className={styles["project-list"]}>
                {
                    projectsData.map(project => (
                        <ProjectItem key={project.id} projectName={project.projectName} version={project.version} />
                    ))
                }
            </ul>
        </ItemContainer>
    )
}

export default ProjectList