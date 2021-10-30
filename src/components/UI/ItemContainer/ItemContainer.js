import React from 'react'

import styles from './ItemContainer.module.css'

const ItemContainer = props => {
    return <div className={styles.container}>{props.children}</div>
}

export default ItemContainer