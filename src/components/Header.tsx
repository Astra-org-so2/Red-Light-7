import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Language } from '../data/teamData';
import { RL7Logo } from './RL7Logo';
import './Header.css';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      path: '/',
      index: '01',
      labelRu: 'ГЛАВНАЯ',
      labelEn: 'HOME',
      code: 'OVERVIEW',
    },
    {
      path: '/roster',
      index: '02',
      labelRu: 'СОСТАВ',
      labelEn: 'ROSTER',
      code: 'LINEUP // 05',
    },
    {
      path: '/matches',
      index: '03',
      labelRu: 'МАТЧИ',
      labelEn: 'MATCHES',
      code: 'SCHEDULE // TBA',
    },
    {
      path: '/jersey',
      index: '04',
      labelRu: 'ФОРМА',
      labelEn: 'PRO KIT',
      code: 'VARIANT B',
    },
    {
      path: '/about',
      index: '05',
      labelRu: 'О КЛУБЕ',
      labelEn: 'ABOUT RL7',
      code: 'IDENTITY',
    },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="rl7-header">
      <div className="swiss-container rl7-header-inner">
        {/* Логотип */}
        <Link to="/" className="rl7-header-brand" onClick={closeMenu} aria-label="RED LIGHT 7 Home">
          <RL7Logo variant="full" />
        </Link>

        {/* Десктопная навигация в стиле швейцарской таблицы */}
        <nav className="rl7-nav-desktop" aria-label="Основная навигация">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rl7-nav-link ${isActive ? 'rl7-nav-link-active' : ''}`
              }
            >
              <span className="rl7-nav-index">// {item.index}</span>
              <span className="rl7-nav-label">
                {lang === 'ru' ? item.labelRu : item.labelEn}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Правый технический блок: статус + переключатель RU/EN + мобильная кнопка */}
        <div className="rl7-header-actions">
          <div className="rl7-status-pill" title="Standoff 2 Active Division">
            <span className="red-signal-dot" />
            <span className="rl7-status-text">SO2 // ACTIVE</span>
          </div>

          <button
            type="button"
            className="rl7-lang-toggle"
            onClick={onToggleLang}
            aria-label={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
          >
            <span className={lang === 'ru' ? 'lang-active' : ''}>RU</span>
            <span className="lang-divider">/</span>
            <span className={lang === 'en' ? 'lang-active' : ''}>EN</span>
          </button>

          <button
            type="button"
            className={`rl7-burger ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="rl7-mobile-drawer">
          <div className="swiss-container rl7-mobile-drawer-inner">
            <div className="rl7-mobile-meta">
              <span className="tech-label">NAVIGATION // RED LIGHT 7</span>
            </div>
            <nav className="rl7-mobile-nav" aria-label="Мобильная навигация">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rl7-mobile-link ${isActive ? 'rl7-mobile-link-active' : ''}`
                  }
                >
                  <div className="rl7-mobile-link-left">
                    <span className="rl7-mobile-index">// {item.index}</span>
                    <span className="rl7-mobile-title">
                      {lang === 'ru' ? item.labelRu : item.labelEn}
                    </span>
                  </div>
                  <span className="rl7-mobile-code">{item.code}</span>
                </NavLink>
              ))}
            </nav>
            <div className="rl7-mobile-footer">
              <span>STANDOFF 2 ESPORTS DIVISION</span>
              <span style={{ color: 'var(--brand-red)' }}>RL7 // 2026</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
