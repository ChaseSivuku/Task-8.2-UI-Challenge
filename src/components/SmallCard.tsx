import React from 'react'
import styles from './SmallCard.module.css'

type Props = {
    type: string,
    backgroundC?: string,
    time: string,
    weekly: string
    header?: string
}

export const SmallCard: React.FC<Props> = ({type, backgroundC, time, weekly, header}) => {
  return (
    <>
        <div className={styles.cardContainer}>
            <div className={styles.header}
                style={{
                    backgroundColor: backgroundC,
                    backgroundImage: `url(/images/${header})`
                }}
            >
            </div>
            <div className={styles.info}>
                <div className={styles.heading}>
                    <p>{type}</p>
                    <button className={styles.topButton}><img src="/images/icon-ellipsis.svg" alt="..." /></button>
                </div>
                <div className={styles.metrics}>
                    <p className={styles.time}>{time}hrs</p>
                    <p className={styles.weekly}>Last week - {weekly}hrs</p>
                </div>
            </div>
        </div>
    </>
  )
}
