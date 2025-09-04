import React from 'react'
import styles from './MainCard.module.css'
import stylesTwo from './SmallCard.module.css'

type Props = {
    name?: string,
    surname?: string, 
    pic?: string
}

export const MainCard: React.FC <Props> = ({name, surname, pic}) => {
  return (
    <>
        <div className={styles.cardContainer}>
            <div className={styles.profile}>
                <div className={styles.profilePic}>
                    <img src={`/images/${pic}`} alt="" />
                </div>
                <div className={styles.profileNames}>
                    <p className={stylesTwo.weekly}>Report for</p>
                    <p className={styles.names}>{name}</p>
                    <p className={styles.names}>{surname}</p>
                </div>
            </div>
            <div className={styles.intervals}>
                <div className={`${styles.values} ${stylesTwo.weekly}`}>
                    <ul>
                        <li>Daily</li>
                        <li style={{color: 'white'}}>Weekly</li>
                        <li>Monthly</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
