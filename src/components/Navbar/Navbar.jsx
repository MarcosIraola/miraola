import React from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import style from './navbar.module.css'

const Navbar = () => {
    const { t } = useTranslation();

    const changeES = () => {
        i18n.changeLanguage('es')
    }
    const changeEN = () => {
        i18n.changeLanguage('en')
    }

    const onChange = (event) => {
        // console.log(event.target.value)
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div className={style.container}>
            <div className={style.links}>
                <Link to='/'>Home</Link>
                <Link to='/'>Portfolio</Link>
                <Link to='/'>Artwork</Link>
            </div>
            <div className={style.social}>
                {/* <Link to='/'>Tw</Link>
                <Link to='/'>In</Link> */}
                <select onChange={onChange}>
                    <option value='es'>ES</option>
                    <option value='en'>EN</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar