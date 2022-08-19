import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './homepage.module.css'

const Homepage = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('home.hello-world')} <br/> {t('home.description')}</h1>
        </div>
    )
}

export default Homepage