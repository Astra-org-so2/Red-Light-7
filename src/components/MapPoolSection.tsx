import React, { useState } from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import './MapPoolSection.css';

interface MapPoolSectionProps {
  lang: Language;
}

export const MapPoolSection: React.FC<MapPoolSectionProps> = ({ lang }) => {
  const [activeMapId, setActiveMapId] = useState<string>(TEAM_CONFIG.mapPool[0].id);
  const [activeSide, setActiveSide] = useState<'ct' | 't'>('ct');
  const [selectedPlayer, setSelectedPlayer] = useState<string>('L1tez');

  const currentMap =
    TEAM_CONFIG.mapPool.find((m) => m.id === activeMapId) || TEAM_CONFIG.mapPool[0];

  const focusedAssign =
    currentMap.assignments.find((a) => a.player === selectedPlayer) ||
    currentMap.assignments[0];

  return (
    <section className="rl7-mappool-section">
      <div className="section-header-grid">
        <div>
          <span className="tech-label">TACTICAL SYSTEM // STANDOFF 2 MAP POOL</span>
          <h2 className="section-title-en">
            MAP POOL <span>&amp; ROLES</span>
          </h2>
          <p className="section-subtitle-ru">
            {lang === 'ru'
              ? 'Интерактивный тактический радар Standoff 2: кликайте по картам, переключайте сторону (Защита CT / Атака T) и смотрите реальную расстановку игроков прямо на карте.'
              : 'Interactive Standoff 2 tactical radar: select a map, switch sides (Defense CT / Attack T), and inspect live player positions directly on the minimap.'}
          </p>
        </div>
      </div>

      <div className="mappool-board corner-frame">
        {/* 1. Карточки выбора карты с реальными панорамными превью из Standoff 2 */}
        <div className="mappool-tabs" role="tablist" aria-label="Выбор карты Standoff 2">
          {TEAM_CONFIG.mapPool.map((m) => {
            const isSelected = m.id === currentMap.id;
            return (
              <button
                key={m.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`mappool-tab-btn ${isSelected ? 'is-active' : ''}`}
                onClick={() => setActiveMapId(m.id)}
              >
                <div className="map-tab-thumb-wrap">
                  <img
                    src={m.previewUrl}
                    alt={m.name}
                    className="map-tab-thumb"
                    loading="lazy"
                  />
                  <div className="map-tab-thumb-fade" />
                </div>
                <div className="map-tab-meta">
                  <span className="map-tab-code">{m.code}</span>
                  <span className="map-tab-name">{m.name}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Верхняя панель выбранной карты + переключатель стороны CT / T */}
        <div className="mappool-overview-bar">
          <div className="map-identity-col">
            <span className="map-tempo-tag">
              {lang === 'ru' ? currentMap.tempoRu : currentMap.tempoEn}
            </span>
            <h3 className="map-current-title">{currentMap.name}</h3>
            <p className="map-current-desc">
              {lang === 'ru' ? currentMap.styleRu : currentMap.styleEn}
            </p>
          </div>

          <div className="map-controls-col">
            {/* Переключатель стороны Защита (CT) / Атака (T) */}
            <div className="side-switcher-pill" role="group" aria-label="Выбор стороны">
              <button
                type="button"
                className={`side-switch-btn ${activeSide === 'ct' ? 'is-active' : ''}`}
                onClick={() => setActiveSide('ct')}
              >
                {lang === 'ru' ? 'DEFENSE // СПЕЦНАЗ (CT)' : 'DEFENSE // CT SIDE'}
              </button>
              <button
                type="button"
                className={`side-switch-btn ${activeSide === 't' ? 'is-active' : ''}`}
                onClick={() => setActiveSide('t')}
              >
                {lang === 'ru' ? 'ATTACK // АТАКА (T)' : 'ATTACK // T SIDE'}
              </button>
            </div>

            <div className="map-signature-box">
              <span className="sig-k">
                {lang === 'ru' ? 'КЛЮЧЕВАЯ ЗАГОТОВКА RL7' : 'RL7 SIGNATURE CALL'}
              </span>
              <strong className="sig-v">
                {lang === 'ru' ? currentMap.signatureExecRu : currentMap.signatureExecEn}
              </strong>
            </div>
          </div>
        </div>

        {/* 3. ГЛАВНЫЙ ИНТЕРАКТИВНЫЙ БЛОК: КАРТА-РАДАР С МАРКЕРАМИ ИГРОКОВ + СПИСОК СПРАВА */}
        <div className="mappool-interactive-stage">
          {/* Левая часть: Официальная мини-карта Standoff 2 с живыми пинами игроков */}
          <div className="radar-map-canvas">
            <div className="radar-map-topbar">
              <span className="radar-live-badge">
                <span className="red-signal-dot" />
                <span>
                  {currentMap.name} //{' '}
                  {activeSide === 'ct'
                    ? lang === 'ru'
                      ? 'РАССТАНОВКА ЗАЩИТЫ (CT)'
                      : 'DEFENSE SETUP (CT)'
                    : lang === 'ru'
                      ? 'РАССТАНОВКА АТАКИ (T)'
                      : 'ATTACK EXECUTE (T)'}
                </span>
              </span>
              <span className="radar-hint-text">
                {lang === 'ru' ? 'Нажмите на игрока на карте' : 'Click any player pin'}
              </span>
            </div>

            <div className="radar-image-wrapper">
              {/* Фоновое свечение под картой */}
              <img
                src={currentMap.minimapUrl}
                alt={`${currentMap.name} Standoff 2 Tactical Radar`}
                className="radar-minimap-img"
              />

              {/* Живые маркеры всех игроков прямо поверх карты */}
              {currentMap.assignments.map((assign) => {
                const x = activeSide === 'ct' ? assign.ctX : assign.tX;
                const y = activeSide === 'ct' ? assign.ctY : assign.tY;
                const isSelected = assign.player === focusedAssign.player;
                const isSub = assign.roleTag === '6TH SUB';
                const isCaptain = assign.roleTag.includes('CAPTAIN');

                return (
                  <button
                    key={assign.player}
                    type="button"
                    className={`radar-player-pin ${isSelected ? 'is-selected' : ''} ${
                      isSub ? 'is-sub-pin' : isCaptain ? 'is-captain-pin' : ''
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    onClick={() => setSelectedPlayer(assign.player)}
                    title={`${assign.player} (${assign.roleTag})`}
                  >
                    <span className="pin-pulse" />
                    <span className="pin-dot">
                      {isCaptain ? `★ #${assign.number}` : `#${assign.number}`}
                    </span>
                    <span className="pin-label">
                      {assign.player}
                      {isCaptain ? ' (C)' : ''}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Нижний HUD-инспектор выбранного маркера на карте */}
            <div className="radar-focused-hud">
              <div className="hud-left">
                <span className="hud-num">#{focusedAssign.number}</span>
                <div>
                  <div className="hud-player-line">
                    <strong>
                      {focusedAssign.player}
                      {focusedAssign.roleTag.includes('CAPTAIN') ? ' ★' : ''}
                    </strong>
                    <span className="hud-role-pill">{focusedAssign.roleTag}</span>
                  </div>
                  <span className="hud-pos-val">
                    {activeSide === 'ct'
                      ? lang === 'ru'
                        ? `Защита (CT): ${focusedAssign.ctPosRu}`
                        : `Defense (CT): ${focusedAssign.ctPosEn}`
                      : lang === 'ru'
                        ? `Атака (T): ${focusedAssign.tPosRu}`
                        : `Attack (T): ${focusedAssign.tPosEn}`}
                  </span>
                </div>
              </div>
              <div className="hud-coords">
                COORD // X:{activeSide === 'ct' ? focusedAssign.ctX : focusedAssign.tX}% Y:
                {activeSide === 'ct' ? focusedAssign.ctY : focusedAssign.tY}%
              </div>
            </div>
          </div>

          {/* Правая часть: Карточки всех игроков, синхронизированные с картой */}
          <div className="mappool-assignments-list">
            {currentMap.assignments.map((assign) => {
              const isSub = assign.roleTag === '6TH SUB';
              const isCaptain = assign.roleTag.includes('CAPTAIN');
              const isSelected = assign.player === focusedAssign.player;
              return (
                <div
                  key={assign.player}
                  onClick={() => setSelectedPlayer(assign.player)}
                  className={`map-assign-card ${isSub ? 'is-sub-assign' : ''} ${
                    isSelected ? 'is-focused-card' : ''
                  }`}
                >
                  <div className="assign-card-head">
                    <div className="assign-player-title">
                      <span className="assign-num">#{assign.number}</span>
                      <span className="assign-player-name">
                        {assign.player}
                        {isCaptain ? ' (C)' : ''}
                      </span>
                    </div>
                    <span
                      className={`assign-role-badge ${
                        isSub ? 'sub-badge' : isCaptain ? 'captain-badge' : ''
                      }`}
                    >
                      {assign.roleTag}
                    </span>
                  </div>

                  <div className="assign-sides-stack">
                    <div
                      className={`assign-side-row ${
                        activeSide === 'ct' ? 'active-side-highlight' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlayer(assign.player);
                        setActiveSide('ct');
                      }}
                    >
                      <span className="side-pill ct-pill">DEFENSE // CT</span>
                      <span className="side-pos-text">
                        {lang === 'ru' ? assign.ctPosRu : assign.ctPosEn}
                      </span>
                    </div>

                    <div
                      className={`assign-side-row ${
                        activeSide === 't' ? 'active-side-highlight' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlayer(assign.player);
                        setActiveSide('t');
                      }}
                    >
                      <span className="side-pill t-pill">ATTACK // T</span>
                      <span className="side-pos-text">
                        {lang === 'ru' ? assign.tPosRu : assign.tPosEn}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
