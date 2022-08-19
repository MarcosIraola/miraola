import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import styles from './homepage.module.css'
import TypingComponent from '../Typewrite/TypingComponent';
import '../Typewrite/typing-component.css';

const Homepage = () => {
    const { t } = useTranslation();
    
    return (
        <div className={styles.container}>
            {/* <h1 className={styles.title}>{t('home.hello-world')} <br/> {t('home.description')}</h1> */}
            <TypingComponent
                classString=""
                text1={t('home.hello-world')}
                // text2={t('home.description')}
                typingContentElementId="typing-write"
                // styles={TypingComponentStyles}
            />
        </div>
    )
}

export default Homepage