import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import logo from '../../assets/images/logo.png';
import './Navbar.scss';

const Navbar = () => {
  const { t } = useTranslation();
  const [EnglishLanguage, setEnglishLanguage] = useState(true);

  return (
    <nav>
      <ul>
        <li className="logo">
          <img src={logo} alt="Gallery Logo" className="logo-main" />
        </li>
        <li>
          <NavLink to="/">{t('construction')}</NavLink>
        </li>
        <li>
          <NavLink to="/artist">{t('edges')}</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">{t('gallery')}</NavLink>
        </li>
        <li>
          <NavLink to="/contact">{t('contact')}</NavLink>
        </li>
        <li>
          <NavLink to="/guest">{t('guest')}</NavLink>
        </li>
      </ul>
      <div className="bottom-nav">
        <button
          type="button"
          className="language"
          onClick={() => {
            if (EnglishLanguage) {
              i18next.changeLanguage('es');
            } else {
              i18next.changeLanguage('en');
            }
            setEnglishLanguage(!EnglishLanguage);
          }}
        >
          {EnglishLanguage ? 'English' : 'Espanol'}
        </button>
        <div className="currency">{t('currency')}</div>
      </div>
    </nav>
  );
};

export default Navbar;
