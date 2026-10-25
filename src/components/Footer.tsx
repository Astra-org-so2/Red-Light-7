import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { RL7Logo } from './RL7Logo';
import { SocialVectorIcon } from './SocialIcons';
import './Footer.css';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rl7-footer">
      <div className="swiss-container">
        <div className="rl7-footer-grid">
          {/* Колонка 1: Бренд */}
          <div className="rl7-footer-col rl7-footer-brand-col">
            <RL7Logo variant="full" />
            <p className="rl7-footer-desc">
              {lang === 'ru'
                ? 'Официальный киберспортивный клуб RED LIGHT 7 (RL7) по дисциплине Standoff 2. Строгая система, командная дисциплина и фирменный стиль.'
                : 'Official RED LIGHT 7 (RL7) Standoff 2 esports organization. Built on precision, discipline, and technical minimalism.'}
            </p>
            <div className="rl7-footer-kit-badge">
              <span>PRO KIT:</span>
              <strong>{TEAM_CONFIG.brand.kitEdition}</strong>
            </div>
          </div>

          {/* Колонка 2: Разделы сайта */}
          <div className="rl7-footer-col">
            <h4 className="rl7-footer-heading">
              // {lang === 'ru' ? 'НАВИГАЦИЯ' : 'DIRECTORY'}
            </h4>
            <ul className="rl7-footer-links">
              <li>
                <Link to="/">{lang === 'ru' ? '01 / Главная' : '01 / Home'}</Link>
              </li>
              <li>
                <Link to="/roster">
                  {lang === 'ru' ? '02 / Состав (Roster)' : '02 / Active Roster'}
                </Link>
              </li>
              <li>
                <Link to="/matches">
                  {lang === 'ru' ? '03 / Матчи и турниры' : '03 / Matches & Events'}
                </Link>
              </li>
              <li>
                <Link to="/jersey">
                  {lang === 'ru' ? '04 / Игровая форма RL7' : '04 / White Pro Jersey'}
                </Link>
              </li>
              <li>
                <Link to="/about">
                  {lang === 'ru' ? '05 / О клубе и медиа' : '05 / About & Socials'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Активный состав */}
          <div className="rl7-footer-col">
            <h4 className="rl7-footer-heading">
              // {lang === 'ru' ? 'СОСТАВ SO2' : 'SO2 LINEUP'}
            </h4>
            <ul className="rl7-footer-roster-list">
              {TEAM_CONFIG.roster.map((player) => (
                <li key={player.id}>
                  <span className="roster-num">#{player.number}</span>
                  <span className="roster-nick">{player.nickname}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 4: Векторные иконки соцсетей */}
          <div className="rl7-footer-col">
            <h4 className="rl7-footer-heading">
              // {lang === 'ru' ? 'МЕДИА-КАНАЛЫ' : 'MEDIA CHANNELS'}
            </h4>
            <p className="rl7-footer-social-note">
              {lang === 'ru'
                ? 'Официальные страницы команды находятся на этапе запуска (TBA):'
                : 'Official social media channels are being prepared (TBA):'}
            </p>
            <div className="rl7-footer-social-icons">
              {TEAM_CONFIG.socials.map((soc) =>
                soc.url ? (
                  <a
                    key={soc.id}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rl7-social-icon-box"
                    title={soc.name}
                    aria-label={soc.name}
                  >
                    <SocialVectorIcon id={soc.id} size={18} />
                  </a>
                ) : (
                  <Link
                    key={soc.id}
                    to="/about"
                    className="rl7-social-icon-box"
                    title={`${soc.name} — ${lang === 'ru' ? soc.statusRu : soc.statusEn}`}
                    aria-label={soc.name}
                  >
                    <SocialVectorIcon id={soc.id} size={18} />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Нижняя техническая строка */}
        <div className="rl7-footer-bottom">
          <div>
            © {currentYear} RED LIGHT 7 (RL7 ESPORTS).{' '}
            {lang === 'ru' ? 'ВСЕ ПРАВА ЗАЩИЩЕНЫ.' : 'ALL RIGHTS RESERVED.'}
          </div>
          <div className="rl7-footer-bottom-right">
            <span>STANDOFF 2 COMPETITIVE DIVISION</span>
            <span className="footer-sep">//</span>
            <span style={{ color: 'var(--brand-red)' }}>SWISS EDITORIAL SYSTEM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
