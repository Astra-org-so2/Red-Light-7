import React, { useState } from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import './MapPoolSection.css';

interface MapPoolSectionProps {
  lang: Language;
}

export const MapPoolSection: React.FC<MapPoolSectionProps> = ({ lang }) => {
  const [activeMapId, setActiveMapId] = useState<string>(TEAM_CONFIG.mapPool[0].id);

  const currentMap =
    TEAM_CONFIG.mapPool.find((m) => m.id === activeMapId) || TEAM_CONFIG.mapPool[0];

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
              ? 'Интерактивная тактическая схема RED LIGHT 7 на соревновательных картах Standoff 2: позиции каждого игрока за Защиту (CT) и Атаку (T).'
              : 'Interactive RED LIGHT 7 tactical assignments across the competitive Standoff 2 map pool: player positions on Defense (CT) and Attack (T).'}
          </p>
        </div>
      </div>

      <div className="mappool-board corner-frame">
        {/* Переключатель карт в стиле iOS Segmented Pill */}
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
                <span className="map-tab-code">{m.code}</span>
                <span className="map-tab-name">{m.name}</span>
              </button>
            );
          })}
        </div>

        {/* Тактическая шапка выбранной карты */}
        <div className="mappool-overview-bar">
          <div className="map-Identity-col">
            <span className="map-tempo-tag">
              {lang === 'ru' ? currentMap.tempoRu : currentMap.tempoEn}
            </span>
            <h3 className="map-current-title">{currentMap.name}</h3>
            <p className="map-current-desc">
              {lang === 'ru' ? currentMap.styleRu : currentMap.styleEn}
            </p>
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

        {/* Карточки расстановки всех 6 игроков на выбранной карте */}
        <div className="mappool-assignments-grid">
          {currentMap.assignments.map((assign) => {
            const isSub = assign.roleTag === '6TH SUB';
            return (
              <div
                key={assign.player}
                className={`map-assign-card ${isSub ? 'is-sub-assign' : ''}`}
              >
                <div className="assign-card-head">
                  <span className="assign-player-name">{assign.player}</span>
                  <span className={`assign-role-badge ${isSub ? 'sub-badge' : ''}`}>
                    {assign.roleTag}
                  </span>
                </div>

                <div className="assign-sides-stack">
                  <div className="assign-side-row">
                    <span className="side-pill ct-pill">DEFENSE // CT</span>
                    <span className="side-pos-text">
                      {lang === 'ru' ? assign.ctPosRu : assign.ctPosEn}
                    </span>
                  </div>

                  <div className="assign-side-row">
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
    </section>
  );
};
