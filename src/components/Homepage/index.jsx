import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './homepage.module.css'
import Typewriter from 'typewriter-effect'

const Homepage = () => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.container}>
            <Typewriter 
                options={{
                    delay: 70,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(t('home.hello-world'))
                    .pauseFor(1500)
                    typewriter.typeString(t('home.description'))
                    .start()

                }}
            />
        </div>
    )
}

export default Homepage