import React from 'react';
import { Link } from 'react-router-dom';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { PlayerCard } from '../components/PlayerCard';
import { MapPoolSection } from '../components/MapPoolSection';
import { MatchResultsShowcase } from '../components/MatchResultsShowcase';
import { ArrowUpRightIcon, CrosshairIcon } from '../components/SocialIcons';
import './HomePage.css';

interface HomePageProps {
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ lang }) => {
  return (
    <div className="page-transition">
      {/* 1. HERO SECTION */}
      <section className="rl7-hero">
        <div className="swiss-container">
          <div className="rl7-hero-grid">
            {/* Левая колонка: Типографика и манифест */}
            <div className="rl7-hero-copy">
              <div className="rl7-hero-eyebrow">
                <span className="red-signal-dot" />
                <span>STANDOFF 2 ESPORTS ORGANIZATION // EST. 2026</span>
              </div>

              <h1 className="rl7-hero-title">
                <span className="title-line-main">RED LIGHT</span>
                <span className="title-line-accent">
                  <span className="seven-num">7</span>
                  <span className="rl7-tag-box">RL7</span>
                </span>
              </h1>

              <p className="rl7-hero-slogan">
                {lang === 'ru' ? TEAM_CONFIG.brand.sloganRu : TEAM_CONFIG.brand.sloganEn}
              </p>

              <p className="rl7-hero-desc">
                {lang === 'ru'
                  ? TEAM_CONFIG.brand.subSloganRu
                  : TEAM_CONFIG.brand.subSloganEn}
              </p>

              <div className="rl7-hero-cta-group">
                <Link to="/roster" className="btn-rl7 btn-rl7-primary">
                  <span>{lang === 'ru' ? 'СМОТРЕТЬ СОСТАВ' : 'VIEW ROSTER'}</span>
                  <ArrowUpRightIcon size={16} />
                </Link>
                <Link to="/jersey" className="btn-rl7 btn-rl7-outline">
                  <span>{lang === 'ru' ? 'ФОРМА RL7 (PRO KIT)' : 'EXPLORE PRO KIT'}</span>
                </Link>
              </div>

              {/* Техническая сводка состава */}
              <div className="rl7-hero-stats-strip">
                <div className="hero-stat-cell">
                  <span className="stat-k">{lang === 'ru' ? 'ДИСЦИПЛИНА' : 'DISCIPLINE'}</span>
                  <span className="stat-v">STANDOFF 2</span>
                </div>
                <div className="hero-stat-cell">
                  <span className="stat-k">{lang === 'ru' ? 'СОСТАВ КОМАНДЫ' : 'SQUAD SIZE'}</span>
                  <span className="stat-v">5 PLAYERS // 5V5</span>
                </div>
                <div className="hero-stat-cell">
                  <span className="stat-k">{lang === 'ru' ? 'ЭКИПИРОВКА' : 'OFFICIAL KIT'}</span>
                  <span className="stat-v" style={{ color: 'var(--brand-red)' }}>
                    WHITE PRO // B
                  </span>
                </div>
              </div>
            </div>

            {/* Правая колонка: Промо-постер команды в белой форме RL7 */}
            <div className="rl7-hero-visual corner-frame">
              <div className="rl7-hero-visual-header">
                <span>// VISUAL ID: RL7-LINEUP-2026</span>
                <span style={{ color: 'var(--brand-red)' }}>STARTING FIVE // 5V5</span>
              </div>

              <div className="rl7-hero-poster-wrap">
                <img
                  src="./assets/hero/rl7-hero-team.png"
                  alt="RED LIGHT 7 Standoff 2 Lineup in White Pro Jersey"
                  className="rl7-hero-poster-img"
                />
                <div className="rl7-hero-poster-overlay" />

                {/* Нижняя плашка с никнеймами и ролями на постере */}
                <div className="rl7-hero-lineup-tags">
                  {TEAM_CONFIG.roster.map((p) => (
                    <Link
                      to="/roster"
                      key={p.id}
                      className={`hero-player-chip ${p.isCaptain ? 'is-captain-chip' : ''}`}
                    >
                      <span className="chip-num">
                        #{p.number} {p.isCaptain ? '• CAPTAIN' : p.isReserve ? '• SUB' : ''}
                      </span>
                      <span className="chip-name">
                        {p.nickname} {p.isCaptain ? '★' : ''}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Технический разделитель-тикер */}
      <div className="rl7-ticker-bar" aria-hidden="true">
        <div className="swiss-container rl7-ticker-inner">
          <span>RED LIGHT 7 // RL7 ESPORTS</span>
          <span className="ticker-dot" />
          <span>L1TEZ / SHARINGANOV / MORPH (CAPTAIN) / HAKO / KARAT</span>
          <span className="ticker-dot" />
          <span>STANDOFF 2 COMPETITIVE DIVISION</span>
          <span className="ticker-dot" />
          <span>WHITE PRO KIT EDITION</span>
        </div>
      </div>

      {/* 2. ROSTER PREVIEW — Состав команды (5 игроков основы) */}
      <section className="rl7-home-section">
        <div className="swiss-container">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">01 // ACTIVE STARTING LINEUP</span>
              <h2 className="section-title-en">
                ROSTER <span>RL7</span>
              </h2>
              <p className="section-subtitle-ru">
                {lang === 'ru'
                  ? 'Боевой состав организации RED LIGHT 7 по дисциплине Standoff 2: сыгранная пятёрка основы под лидерством капитана morph с чёткой тактической специализацией.'
                  : 'RED LIGHT 7 competitive Standoff 2 squad: our starting five led by captain morph with specialized tactical roles.'}
              </p>
            </div>
            <Link to="/roster" className="btn-rl7 btn-rl7-outline">
              <span>{lang === 'ru' ? 'ОТКРЫТЬ ДОСЬЕ ИГРОКОВ' : 'FULL ROSTER DOSSIER'}</span>
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>

          <div className="rl7-roster-grid-5">
            {TEAM_CONFIG.roster.map((player) => (
              <PlayerCard key={player.id} player={player} lang={lang} />
            ))}
          </div>

          {/* Интерактивный Map Pool Standoff 2 */}
          <MapPoolSection lang={lang} />
        </div>
      </section>

      {/* 2.5. ВЕРИФИЦИРОВАННЫЕ РЕЗУЛЬТАТЫ МАТЧЕЙ И СКРИНШОТЫ */}
      <section className="rl7-home-section">
        <div className="swiss-container">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">02 // VERIFIED IN-GAME SCOREBOARDS</span>
              <h2 className="section-title-en">
                RECENT <span>RESULTS</span>
              </h2>
              <p className="section-subtitle-ru">
                {lang === 'ru'
                  ? 'Официальные скриншоты результатов и итоговые таблицы матчей RED LIGHT 7 в Standoff 2: сухая победа 13:0 на Hanami, 30 фрагов от L1tez против [КРЫМ] и разгром [3FORZ].'
                  : 'Verified post-match scoreboards and in-game captures of RED LIGHT 7 in Standoff 2: 13:0 shutout on Hanami, L1tez 30-frag carry vs [КРЫМ], and 13:8 win over [3FORZ].'}
              </p>
            </div>
            <Link to="/matches" className="btn-rl7 btn-rl7-primary">
              <span>{lang === 'ru' ? 'ЗАБИТЬ ПРАК / ВСЕ МАТЧИ' : 'BOOK A SCRIM / ALL MATCHES'}</span>
              <ArrowUpRightIcon size={16} />
            </Link>
          </div>

          <MatchResultsShowcase lang={lang} />
        </div>
      </section>

      {/* 3. СПЛИТ-СЕКЦИЯ: БЕЛАЯ ФОРМА RL7 + БЫСТРАЯ СВОДКА МАТЧЕЙ */}
      <section className="rl7-home-section">
        <div className="swiss-container">
          <div className="rl7-home-bento">
            {/* Карточка джерси */}
            <div className="rl7-bento-card corner-frame">
              <div className="bento-card-top">
                <span className="tech-label">03 // PRO KIT SHOWCASE</span>
                <span className="bento-code">{TEAM_CONFIG.jersey.code}</span>
              </div>

              <div className="bento-jersey-layout">
                <div className="bento-jersey-text">
                  <h3 className="bento-title">
                    RL7 WHITE <span>PRO KIT</span>
                  </h3>
                  <p className="bento-desc">
                    {lang === 'ru'
                      ? 'Официальная игровая джерси команды (Вариант Б): матовый белый корпус, угольно-чёрный плечевой контур и алые геометрические линии швов с нагрудной монограммой RL7.'
                      : 'Official team pro jersey (Variant B): matte white body, carbon-black shoulder yoke, and crimson geometric seam piping with the RL7 chest crest.'}
                  </p>
                  <ul className="bento-spec-list">
                    <li>
                      <span>01</span>
                      {lang === 'ru'
                        ? 'Контрастный белый крой с чёрными плечами'
                        : 'High-contrast white torso & black shoulders'}
                    </li>
                    <li>
                      <span>02</span>
                      {lang === 'ru'
                        ? 'Нагрудная треугольная эмблема RL7'
                        : 'Triangular RL7 chest monogram'}
                    </li>
                    <li>
                      <span>03</span>
                      {lang === 'ru'
                        ? 'Чистый дизайн без случайных спонсоров'
                        : 'Zero sponsor clutter — pure club identity'}
                    </li>
                  </ul>
                  <Link to="/jersey" className="btn-rl7 btn-rl7-primary">
                    <span>{lang === 'ru' ? 'ДЕТАЛЬНЫЙ ОБЗОР ФОРМЫ' : 'INSPECT JERSEY'}</span>
                    <ArrowUpRightIcon size={16} />
                  </Link>
                </div>

                <div className="bento-jersey-preview">
                  <img
                    src={TEAM_CONFIG.jersey.imageUrl}
                    alt="RL7 White Pro Kit Jersey"
                    className="bento-jersey-img"
                  />
                </div>
              </div>
            </div>

            {/* Карточка актуальной формы команды и вызова на прак */}
            <div className="rl7-bento-card corner-frame">
              <div className="bento-card-top">
                <span className="tech-label">04 // SCRIM &amp; MATCH RADAR</span>
                <span className="bento-code" style={{ color: 'var(--brand-red)' }}>
                  6W — 1L (86% WR)
                </span>
              </div>

              <div className="bento-matches-body">
                <div className="matches-tba-badge">
                  <CrosshairIcon size={18} />
                  <span>VERIFIED FORM // OPEN FOR SCRIMS</span>
                </div>

                <h3 className="bento-title">
                  {lang === 'ru' ? (
                    <>
                      ВЫЗВАТЬ RL7 <span>НА ПРАК</span>
                    </>
                  ) : (
                    <>
                      CHALLENGE <span>RL7</span>
                    </>
                  )}
                </h3>

                <p className="bento-desc">
                  {lang === 'ru'
                    ? 'Команда активно проводит праки (BO1 / BO3 / BO5) и готова к вызовам от стаков и организаций Standoff 2. Прямая связь через Telegram.'
                    : 'The squad actively plays BO1 / BO3 / BO5 scrims and is open to challenges from Standoff 2 teams directly via Telegram.'}
                </p>

                <div className="tba-placeholder-table">
                  <div className="tba-row">
                    <span className="tba-slot">HANAMI // 5V5</span>
                    <span className="tba-vs">RL7 13 : 0 27z / FLCNS</span>
                    <span className="tba-status">SHUTOUT WIN</span>
                  </div>
                  <div className="tba-row">
                    <span className="tba-slot">PROVINCE // 5V5</span>
                    <span className="tba-vs">RL7 13 : 12 [КРЫМ]</span>
                    <span className="tba-status">L1TEZ 30K</span>
                  </div>
                  <div className="tba-row">
                    <span className="tba-slot">PROVINCE // 5V5</span>
                    <span className="tba-vs">RL7 13 : 8 [3FORZ]</span>
                    <span className="tba-status">VICTORY</span>
                  </div>
                </div>

                <Link to="/matches" className="btn-rl7 btn-rl7-outline">
                  <span>{lang === 'ru' ? 'ОТПРАВИТЬ ВЫЗОВ НА ПРАК' : 'OPEN SCRIM GENERATOR'}</span>
                  <ArrowUpRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
