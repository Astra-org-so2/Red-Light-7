import React, { useState } from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { PlayerCard } from '../components/PlayerCard';
import { RL7Logo } from '../components/RL7Logo';
import { RadarChart } from '../components/RadarChart';
import { MapPoolSection } from '../components/MapPoolSection';
import './RosterPage.css';

interface RosterPageProps {
  lang: Language;
}

export const RosterPage: React.FC<RosterPageProps> = ({ lang }) => {
  const [selectedId, setSelectedId] = useState<string>(TEAM_CONFIG.roster[0].id);
  const [copiedConfig, setCopiedConfig] = useState<boolean>(false);

  const activePlayer =
    TEAM_CONFIG.roster.find((p) => p.id === selectedId) || TEAM_CONFIG.roster[0];

  const handleCopyConfig = () => {
    const textToCopy = `${activePlayer.nickname} (RL7) SO2 Config — Device: ${activePlayer.proSettings.device} | Sens: ${activePlayer.proSettings.sensitivity} | Scope: ${activePlayer.proSettings.scopeSens} | Accel: ${activePlayer.proSettings.acceleration} | Code: ${activePlayer.proSettings.configCode}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    }
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2600);
  };

  return (
    <div className="page-transition rl7-roster-page">
      <div className="swiss-container">
        {/* Шапка страницы состава */}
        <div className="section-header-grid">
          <div>
            <span className="tech-label">DIRECTORY // 02 — ACTIVE STARTING LINEUP</span>
            <h1 className="section-title-en">
              STANDOFF 2 <span>ROSTER</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Утверждённый боевой состав RED LIGHT 7 (RL7): стартовая пятёрка с чётким распределением ролей, радар скиллов, игровые настройки (только смартфоны) и тактический Map Pool.'
                : 'Confirmed RED LIGHT 7 (RL7) Standoff 2 unit: starting five with specialized roles, skill radar, smartphone pro settings, and tactical Map Pool.'}
            </p>
          </div>

          <div className="roster-header-meta">
            <div className="meta-pill">
              <span>STARTING:</span>
              <strong>05 PLAYERS</strong>
            </div>
            <div className="meta-pill">
              <span>FORMAT:</span>
              <strong>5V5 COMPETITIVE</strong>
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
                  onClick={() => {
                    setSelectedId(player.id);
                    setCopiedConfig(false);
                  }}
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
            {/* Левая колонка: Портрет в белой форме + Радар навыков */}
            <div className="spotlight-left-stack">
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

              {/* Пункт 3: Векторная радар-диаграмма скиллов */}
              <RadarChart stats={activePlayer.radar} lang={lang} />
            </div>

            {/* Правая колонка: Роль, перк, характеристики + Пункт 1: Pro Settings & Arsenal */}
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

              {/* Пункт 1: PRO SETTINGS, ДЕВАЙСЫ И ЛЮБИМОЕ ОРУЖИЕ STANDOFF 2 */}
              <div className="pro-settings-card">
                <div className="pro-settings-header">
                  <div>
                    <span className="pro-settings-eyebrow">
                      {lang === 'ru'
                        ? 'ТУРНИРНЫЙ РЕГЛАМЕНТ // ТОЛЬКО СМАРТФОНЫ (iOS / ANDROID)'
                        : 'TOURNAMENT LEGAL // SMARTPHONE ONLY (iOS / ANDROID)'}
                    </span>
                    <h3 className="pro-settings-title">
                      {lang === 'ru'
                        ? `ИГРОВЫЕ НАСТРОЙКИ ${activePlayer.nickname.toUpperCase()}`
                        : `${activePlayer.nickname.toUpperCase()} PRO SETTINGS`}
                    </h3>
                  </div>

                  <button
                    type="button"
                    className={`copy-config-btn ${copiedConfig ? 'is-copied' : ''}`}
                    onClick={handleCopyConfig}
                  >
                    {copiedConfig
                      ? lang === 'ru'
                        ? '✓ СКОПИРОВАНО'
                        : '✓ COPIED'
                      : lang === 'ru'
                        ? 'СКОПИРОВАТЬ КОНФИГ'
                        : 'COPY CONFIG'}
                  </button>
                </div>

                <div className="pro-settings-grid">
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'ДЕВАЙС / ЭКРАН' : 'DEVICE / HZ'}</span>
                    <span className="ps-v">{activePlayer.proSettings.device}</span>
                  </div>
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'РАСКЛАДКА (CLAW)' : 'HUD LAYOUT'}</span>
                    <span className="ps-v">
                      {lang === 'ru'
                        ? activePlayer.proSettings.layoutRu
                        : activePlayer.proSettings.layoutEn}
                    </span>
                  </div>
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'ЧУВСТВИТЕЛЬНОСТЬ' : 'SENSITIVITY'}</span>
                    <span className="ps-v" style={{ color: 'var(--brand-red)' }}>
                      {activePlayer.proSettings.sensitivity}
                    </span>
                  </div>
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'СЕНСА В ПРИЦЕЛЕ' : 'SCOPE SENS'}</span>
                    <span className="ps-v">{activePlayer.proSettings.scopeSens}</span>
                  </div>
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'УСКОРЕНИЕ' : 'ACCELERATION'}</span>
                    <span className="ps-v">{activePlayer.proSettings.acceleration}</span>
                  </div>
                  <div className="pro-setting-cell">
                    <span className="ps-k">{lang === 'ru' ? 'ФИРМЕННЫЙ АРСЕНАЛ' : 'SIGNATURE WEAPONS'}</span>
                    <div className="weapons-chips">
                      {activePlayer.proSettings.weapons.map((w) => (
                        <span key={w} className="weapon-chip">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="spotlight-note">
                {lang === 'ru' ? activePlayer.traitRu : activePlayer.traitEn}
              </p>
            </div>
          </div>
        </div>

        {/* Полная сетка карточек всех 5 игроков */}
        <div className="rl7-full-roster-section">
          <div className="roster-subbar">
            <span className="tech-label">
              {lang === 'ru'
                ? 'ПОЛНЫЙ СОСТАВ // 5 ИГРОКОВ ОСНОВЫ'
                : 'COMPLETE SQUAD // STARTING FIVE'}
            </span>
            <span className="roster-subbar-right">
              L1TEZ / SHARINGANOV / MORPH / HAKO / KARAT
            </span>
          </div>

          <div className="rl7-roster-grid-6">
            {TEAM_CONFIG.roster.map((player) => (
              <div
                key={player.id}
                onClick={() => {
                  setSelectedId(player.id);
                  window.scrollTo({ top: 140, behavior: 'smooth' });
                }}
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

        {/* Пункт 5: Интерактивный Map Pool Standoff 2 и позиции игроков */}
        <MapPoolSection lang={lang} />
      </div>
    </div>
  );
};
