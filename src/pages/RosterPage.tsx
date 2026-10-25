import React, { useState } from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { PlayerCard } from '../components/PlayerCard';
import { RL7Logo } from '../components/RL7Logo';
import './RosterPage.css';

interface RosterPageProps {
  lang: Language;
}

export const RosterPage: React.FC<RosterPageProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<string>(TEAM_CONFIG.roster[0].id);

  const activePlayer =
    TEAM_CONFIG.roster.find((p) => p.id === selectedId) || TEAM_CONFIG.roster[0];

  return (
    <div className="page-transition rl7-roster-page">
      <div className="swiss-container">
        {/* Шапка страницы состава */}
        <div className="section-header-grid">
          <div>
            <span className="tech-label">DIRECTORY // 02 — ACTIVE LINEUP</span>
            <h1 className="section-title-en">
              STANDOFF 2 <span>ROSTER</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Утверждённый состав RED LIGHT 7 (RL7). Все пять участников выступают в едином ранге основного состава без жёсткой фиксации ролей и капитана.'
                : 'Confirmed RED LIGHT 7 (RL7) Standoff 2 lineup. All five athletes operate with equal authority in a fluid, roleless tactical system.'}
            </p>
          </div>

          <div className="roster-header-meta">
            <div className="meta-pill">
              <span>DIVISION:</span>
              <strong>STANDOFF 2</strong>
            </div>
            <div className="meta-pill">
              <span>PLAYERS:</span>
              <strong>05 ACTIVE</strong>
            </div>
          </div>
        </div>

        {/* Интерактивное досье выбранного игрока (Spotlight Dossier) */}
        <div className="rl7-spotlight-dossier corner-frame">
          <div className="spotlight-tabs" role="tablist" aria-label="Выбор игрока состава">
            {TEAM_CONFIG.roster.map((player) => {
              const isSelected = player.id === activePlayer.id;
              return (
                <button
                  key={player.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`spotlight-tab-btn ${isSelected ? 'is-active' : ''}`}
                  onClick={() => setSelectedId(player.id)}
                >
                  <span className="tab-num">#{player.number}</span>
                  <span className="tab-nick">{player.nickname}</span>
                </button>
              );
            })}
          </div>

          <div className="spotlight-body">
            {/* Портрет в белой форме */}
            <div className="spotlight-portrait-box">
              <div className="spotlight-big-num" aria-hidden="true">
                {activePlayer.number}
              </div>
              <img
                src={activePlayer.portraitUrl}
                alt={`${activePlayer.nickname} in RL7 White Pro Kit`}
                className="spotlight-portrait-img"
              />
            </div>

            {/* Технические данные профиля */}
            <div className="spotlight-details">
              <div className="spotlight-top-row">
                <span className="tech-label">{activePlayer.specTag}</span>
                <RL7Logo variant="mark" className="spotlight-mini-crest" />
              </div>

              <div className="spotlight-name-block">
                <span className="spotlight-callsign-label">
                  {lang === 'ru' ? 'ИГРОВОЙ НИКНЕЙМ // CALLSIGN' : 'OFFICIAL CALLSIGN'}
                </span>
                <h2 className="spotlight-nickname">{activePlayer.nickname}</h2>
              </div>

              <div className="spotlight-specs-grid">
                <div className="spec-box">
                  <span className="spec-k">{lang === 'ru' ? 'СТАТУС В КЛУБЕ' : 'ROSTER STATUS'}</span>
                  <span className="spec-v">
                    {lang === 'ru' ? activePlayer.statusRu : activePlayer.statusEn}
                  </span>
                </div>
                <div className="spec-box">
                  <span className="spec-k">{lang === 'ru' ? 'ИГРОВОЙ НОМЕР' : 'JERSEY NUMBER'}</span>
                  <span className="spec-v" style={{ color: 'var(--brand-red)' }}>
                    #{activePlayer.number}
                  </span>
                </div>
                <div className="spec-box">
                  <span className="spec-k">{lang === 'ru' ? 'ДИСЦИПЛИНА' : 'DISCIPLINE'}</span>
                  <span className="spec-v">STANDOFF 2</span>
                </div>
                <div className="spec-box">
                  <span className="spec-k">{lang === 'ru' ? 'ЭКИПИРОВКА' : 'ASSIGNED KIT'}</span>
                  <span className="spec-v">RL7 WHITE PRO (VAR. B)</span>
                </div>
              </div>

              <p className="spotlight-note">
                {lang === 'ru'
                  ? 'Участник основного состава RED LIGHT 7. Индивидуальные игровые ID и турнирные показатели обновляются по мере проведения официальных матчей.'
                  : 'Member of the RED LIGHT 7 starting lineup. Official game IDs and tournament performance metrics are updated upon verified match completion.'}
              </p>
            </div>
          </div>
        </div>

        {/* Полная сетка карточек всех 5 игроков */}
        <div className="rl7-full-roster-section">
          <div className="roster-subbar">
            <span className="tech-label">
              {lang === 'ru'
                ? 'ПОЛНЫЙ СОСТАВ // ВСЕ 5 ИГРОКОВ'
                : 'COMPLETE STARTING FIVE // ALL UNITS'}
            </span>
            <span className="roster-subbar-right">
              L1TEZ / SHARINGANOV / MORPH / HAKO / KARAT
            </span>
          </div>

          <div className="rl7-roster-grid-5">
            {TEAM_CONFIG.roster.map((player) => (
              <div
                key={player.id}
                onClick={() => setSelectedId(player.id)}
                style={{ cursor: 'pointer' }}
              >
                <PlayerCard
                  player={player}
                  lang={lang}
                  featured={player.id === activePlayer.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
