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
            <span className="tech-label">DIRECTORY // 02 — ACTIVE LINEUP &amp; RESERVE</span>
            <h1 className="section-title-en">
              STANDOFF 2 <span>ROSTER</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Утверждённый боевой состав RED LIGHT 7 (RL7): стартовая пятёрка с чётким распределением тактических ролей и джокер ротации (6-й игрок).'
                : 'Confirmed RED LIGHT 7 (RL7) Standoff 2 unit: starting five with specialized tactical roles plus our impact sixth-man wildcard.'}
            </p>
          </div>

          <div className="roster-header-meta">
            <div className="meta-pill">
              <span>STARTING:</span>
              <strong>05 PLAYERS</strong>
            </div>
            <div className="meta-pill">
              <span>RESERVE:</span>
              <strong>01 SUB (DELF1N)</strong>
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
                  <span className="tab-num">
                    #{player.number} {player.isReserve ? '// SUB' : ''}
                  </span>
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

            {/* Технические данные профиля, роль и характеристики */}
            <div className="spotlight-details">
              <div className="spotlight-top-row">
                <span className="tech-label">{activePlayer.specTag}</span>
                <RL7Logo variant="mark" className="spotlight-mini-crest" />
              </div>

              <div className="spotlight-name-block">
                <span className="spotlight-callsign-label">
                  {lang === 'ru' ? activePlayer.roleRu : activePlayer.roleEn}
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
                  <span className="spec-k">{lang === 'ru' ? 'СПЕЦИАЛИЗАЦИЯ' : 'TACTICAL ROLE'}</span>
                  <span className="spec-v">
                    {lang === 'ru' ? activePlayer.roleRu : activePlayer.roleEn}
                  </span>
                </div>
                <div className="spec-box">
                  <span className="spec-k">{lang === 'ru' ? 'ФИРМЕННЫЙ ПЕРК' : 'SIGNATURE PERK'}</span>
                  <span className="spec-v" style={{ color: 'var(--brand-red)' }}>
                    {lang === 'ru' ? activePlayer.perkRu : activePlayer.perkEn}
                  </span>
                </div>
              </div>

              {/* Шкалы характеристик в досье */}
              <div className="spotlight-metrics-box">
                {activePlayer.metrics.map((m) => (
                  <div key={m.labelEn} className="spotlight-metric-row">
                    <div className="spotlight-metric-head">
                      <span>{lang === 'ru' ? m.labelRu : m.labelEn}</span>
                      <strong>{m.value} / 100</strong>
                    </div>
                    <div className="spotlight-metric-track">
                      <div
                        className="spotlight-metric-fill"
                        style={{ width: `${m.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="spotlight-note">
                {lang === 'ru' ? activePlayer.traitRu : activePlayer.traitEn}
              </p>
            </div>
          </div>
        </div>

        {/* Полная сетка карточек всех 6 игроков (5 основных + 1 запасной) */}
        <div className="rl7-full-roster-section">
          <div className="roster-subbar">
            <span className="tech-label">
              {lang === 'ru'
                ? 'ПОЛНЫЙ СОСТАВ // 5 ОСНОВНЫХ + 1 ЗАПАСНОЙ'
                : 'COMPLETE SQUAD // 5 STARTING + 1 RESERVE'}
            </span>
            <span className="roster-subbar-right">
              L1TEZ / SHARINGANOV / MORPH / HAKO / KARAT + DELF1N (SUB)
            </span>
          </div>

          <div className="rl7-roster-grid-6">
            {TEAM_CONFIG.roster.map((player) => (
              <div
                key={player.id}
                onClick={() => setSelectedId(player.id)}
                style={{ cursor: 'pointer', display: 'flex' }}
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
