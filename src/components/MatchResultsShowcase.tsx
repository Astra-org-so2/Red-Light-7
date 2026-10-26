import React, { useState } from 'react';
import { Language, MatchResultItem, TEAM_CONFIG } from '../data/teamData';
import './MatchResultsShowcase.css';

interface MatchResultsShowcaseProps {
  lang: Language;
}

export const MatchResultsShowcase: React.FC<MatchResultsShowcaseProps> = ({ lang }) => {
  const results = TEAM_CONFIG.matchResults;
  const [activeMatchId, setActiveMatchId] = useState<string>(results[0].id);
  const [lightboxMatch, setLightboxMatch] = useState<MatchResultItem | null>(null);

  const currentMatch = results.find((m) => m.id === activeMatchId) || results[0];

  const winsCount = results.filter((m) => m.isWin).length;
  const lossesCount = results.length - winsCount;
  const winratePct = Math.round((winsCount / results.length) * 100);

  const handleNextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxMatch) return;
    const idx = results.findIndex((m) => m.id === lightboxMatch.id);
    const nextIdx = (idx + 1) % results.length;
    setLightboxMatch(results[nextIdx]);
  };

  const handlePrevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!lightboxMatch) return;
    const idx = results.findIndex((m) => m.id === lightboxMatch.id);
    const prevIdx = (idx - 1 + results.length) % results.length;
    setLightboxMatch(results[prevIdx]);
  };

  return (
    <div className="rl7-results-showcase">
      {/* 1. ВЕРХНЯЯ ПАНЕЛЬ СТАТИСТИКИ (KPI STRIP) */}
      <div className="results-kpi-strip">
        <div className="results-kpi-card">
          <span className="kpi-label">
            {lang === 'ru' ? 'БАЛАНС МАТЧЕЙ (АРХИВ)' : 'VERIFIED RECORD'}
          </span>
          <strong className="kpi-value">
            {winsCount}W — {lossesCount}L
          </strong>
          <span className="kpi-sub">
            {lang === 'ru'
              ? `${results.length} ОФИЦИАЛЬНЫХ СКРИНШОТОВ`
              : `${results.length} VERIFIED SCREENSHOTS`}
          </span>
        </div>

        <div className="results-kpi-card is-accent">
          <span className="kpi-label">{lang === 'ru' ? 'ПРОЦЕНТ ПОБЕД' : 'WINRATE'}</span>
          <strong className="kpi-value">{winratePct}%</strong>
          <span className="kpi-sub">
            {lang === 'ru' ? 'ДОМИНАЦИЯ RL7 В SO2' : 'HIGH-TEMPO DOMINANCE'}
          </span>
        </div>

        <div className="results-kpi-card">
          <span className="kpi-label">
            {lang === 'ru' ? 'ЛУЧШИЙ РАЗГРОМ' : 'BEST SHUTOUT'}
          </span>
          <strong className="kpi-value">13 : 0</strong>
          <span className="kpi-sub">HANAMI vs 27z / FLCNS</span>
        </div>

        <div className="results-kpi-card">
          <span className="kpi-label">
            {lang === 'ru' ? 'РЕКОРД ФРАГОВ ЗА КАРТУ' : 'SINGLE-MAP FRAG RECORD'}
          </span>
          <strong className="kpi-value">30 KILLS</strong>
          <span className="kpi-sub">[RL7] L1tez vs [КРЫМ] (13:12)</span>
        </div>
      </div>

      {/* 2. ГЛАВНЫЙ ИНТЕРАКТИВНЫЙ ЦЕНТР РАЗБОРА МАТЧА */}
      <div className="results-interactive-board corner-frame">
        {/* Переключатель 6 матчей */}
        <div className="results-tabs-bar" role="tablist">
          {results.map((item) => {
            const isSelected = item.id === currentMatch.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`result-tab-pill ${isSelected ? 'is-active' : ''} ${
                  !item.isWin ? 'is-loss-tab' : ''
                }`}
                onClick={() => setActiveMatchId(item.id)}
              >
                <div className="tab-pill-top">
                  <span className="tab-map-tag">{item.map}</span>
                  <span className={`tab-outcome-dot ${item.isWin ? 'win' : 'loss'}`}>
                    {item.isWin ? (lang === 'ru' ? 'ПОБЕДА' : 'WIN') : '10:13'}
                  </span>
                </div>
                <div className="tab-pill-score">
                  <strong>
                    RL7 {item.rl7Score} : {item.opponentScore}
                  </strong>
                  <span>vs {item.opponentTag}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Основная двухколоночная область: Скриншот слева + Цифровая таблица справа */}
        <div className="results-stage-grid">
          {/* Левая колонка: Оригинальный скриншот из Standoff 2 */}
          <div className="result-screenshot-col">
            <div className="screenshot-topbar">
              <span className="screenshot-code">
                {currentMatch.code} // {currentMatch.map} ({currentMatch.region})
              </span>
              <span className="screenshot-time">{currentMatch.timeLabel}</span>
            </div>

            <div
              className="screenshot-frame-box"
              onClick={() => setLightboxMatch(currentMatch)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setLightboxMatch(currentMatch);
              }}
            >
              <img
                src={currentMatch.screenshotUrl}
                alt={`RL7 ${currentMatch.rl7Score}:${currentMatch.opponentScore} vs ${currentMatch.opponentTag}`}
                className="screenshot-main-img"
              />

              <div className="screenshot-overlay-hud">
                <div className="overlay-score-chip">
                  <span className="chip-status">
                    {currentMatch.isWin
                      ? lang === 'ru'
                        ? 'ПОБЕДА RL7'
                        : 'RL7 VICTORY'
                      : lang === 'ru'
                        ? 'БОЕВОЙ МАТЧ'
                        : 'CLOSE MATCH'}
                  </span>
                  <strong>
                    RL7 {currentMatch.rl7Score} : {currentMatch.opponentScore}{' '}
                    {currentMatch.opponentTag}
                  </strong>
                </div>

                <button
                  type="button"
                  className="screenshot-zoom-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxMatch(currentMatch);
                  }}
                >
                  {lang === 'ru' ? 'ОТКРЫТЬ СКРИНШОТ (FULL HD)' : 'OPEN FULL SCREENSHOT'}
                </button>
              </div>
            </div>

            <div className="screenshot-opponent-bar">
              <span className="opp-k">
                {lang === 'ru' ? 'СОСТАВ СОПЕРНИКА:' : 'OPPONENT LINEUP:'}
              </span>
              <span className="opp-v">{currentMatch.opponentLineup}</span>
            </div>
          </div>

          {/* Правая колонка: Оцифрованная статистика игроков RL7 */}
          <div className="result-telemetry-col">
            <div className="telemetry-head">
              <div className="telemetry-badges-row">
                <span className={`telemetry-outcome-pill ${currentMatch.isWin ? 'is-win' : ''}`}>
                  {lang === 'ru' ? currentMatch.badgeRu : currentMatch.badgeEn}
                </span>
                <span className="telemetry-side-pill">
                  {currentMatch.rl7Side === 'T'
                    ? lang === 'ru'
                      ? 'СТОРОНА: АТАКА (T)'
                      : 'SIDE: ATTACK (T)'
                    : lang === 'ru'
                      ? 'СТОРОНА: ОБОРОНА (CT)'
                      : 'SIDE: DEFENSE (CT)'}
                </span>
              </div>

              <h3 className="telemetry-title">
                {lang === 'ru' ? currentMatch.headlineRu : currentMatch.headlineEn}
              </h3>

              <p className="telemetry-desc">
                {lang === 'ru' ? currentMatch.summaryRu : currentMatch.summaryEn}
              </p>
            </div>

            {/* MVP-плашка */}
            <div className="telemetry-mvp-box">
              <span className="mvp-tag">★ MATCH HIGHLIGHT // MVP</span>
              <strong className="mvp-line">
                {lang === 'ru' ? currentMatch.mvpLineRu : currentMatch.mvpLineEn}
              </strong>
            </div>

            {/* Таблица статистики игроков RL7 */}
            <div className="telemetry-scoreboard-wrap">
              <div className="scoreboard-table-head">
                <span>{lang === 'ru' ? 'ИГРОК RL7' : 'RL7 PLAYER'}</span>
                <span className="num-col">{lang === 'ru' ? 'У (K)' : 'K'}</span>
                <span className="num-col">{lang === 'ru' ? 'П (A)' : 'A'}</span>
                <span className="num-col">{lang === 'ru' ? 'С (D)' : 'D'}</span>
                <span className="num-col">K/D</span>
                <span className="num-col">{lang === 'ru' ? 'СЧЕТ' : 'PTS'}</span>
              </div>

              <div className="scoreboard-rows">
                {currentMatch.scoreboard.map((row, idx) => {
                  const kd = (row.kills / Math.max(1, row.deaths)).toFixed(2);
                  const isHighKd = Number(kd) >= 1.35;
                  return (
                    <div
                      key={row.nickname}
                      className={`scoreboard-row ${row.isMvp ? 'is-mvp-row' : ''}`}
                    >
                      <div className="sb-player-cell">
                        <span className="sb-rank">{idx + 1}</span>
                        <div className="sb-name-wrap">
                          <span className="sb-nick">{row.nickname}</span>
                          {row.stars > 0 && (
                            <span className="sb-stars">{'★'.repeat(row.stars)}</span>
                          )}
                        </div>
                      </div>
                      <span className="num-col sb-kills">{row.kills}</span>
                      <span className="num-col sb-assists">{row.assists}</span>
                      <span className="num-col sb-deaths">{row.deaths}</span>
                      <span className={`num-col sb-kd ${isHighKd ? 'high-kd' : ''}`}>
                        {kd}
                      </span>
                      <span className="num-col sb-score">{row.score}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ГАЛЕРЕЯ ВСЕХ СКРИНШОТОВ В СЕТКЕ BENTO */}
      <div className="results-gallery-block">
        <div className="gallery-subbar">
          <span className="tech-label">
            {lang === 'ru'
              ? `ГАЛЕРЕЯ СКРИНШОТОВ // НАЖМИТЕ ДЛЯ УВЕЛИЧЕНИЯ (${results.length} КАРТ)`
              : `SCREENSHOT GALLERY // CLICK TO INSPECT (${results.length} MAPS)`}
          </span>
          <span className="gallery-subbar-hint">
            {lang === 'ru' ? '100% ОРИГИНАЛЬНЫЕ СКРИНШОТЫ ИЗ ИГРЫ' : '100% AUTHENTIC IN-GAME CAPTURES'}
          </span>
        </div>

        <div className="results-gallery-grid">
          {results.map((item) => {
            const isSelected = item.id === currentMatch.id;
            return (
              <div
                key={item.id}
                className={`gallery-shot-card ${isSelected ? 'is-selected-shot' : ''}`}
                onClick={() => {
                  setActiveMatchId(item.id);
                  setLightboxMatch(item);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveMatchId(item.id);
                    setLightboxMatch(item);
                  }
                }}
              >
                <div className="shot-thumb-wrap">
                  <img
                    src={item.screenshotUrl}
                    alt={`${item.map} RL7 ${item.rl7Score}:${item.opponentScore}`}
                    className="shot-thumb-img"
                    loading="lazy"
                  />
                  <div className="shot-thumb-badge-row">
                    <span className="shot-map-pill">{item.map}</span>
                    <span className={`shot-score-pill ${item.isWin ? 'win' : 'loss'}`}>
                      RL7 {item.rl7Score} : {item.opponentScore}
                    </span>
                  </div>
                </div>

                <div className="shot-card-meta">
                  <div className="shot-meta-top">
                    <strong>vs {item.opponentTag}</strong>
                    <span>{item.timeLabel}</span>
                  </div>
                  <p className="shot-meta-mvp">
                    {lang === 'ru' ? item.badgeRu : item.badgeEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. ПОЛНОЭКРАННЫЙ LIGHTBOX ДЛЯ ПРОСМОТРА ОРИГИНАЛЬНОГО СКРИНШОТА */}
      {lightboxMatch && (
        <div
          className="rl7-lightbox-backdrop"
          onClick={() => setLightboxMatch(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="rl7-lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-topbar">
              <div className="lightbox-title-group">
                <span className="lightbox-badge">{lightboxMatch.map}</span>
                <strong>
                  RL7 {lightboxMatch.rl7Score} : {lightboxMatch.opponentScore} vs{' '}
                  {lightboxMatch.opponentTag}
                </strong>
                <span className="lightbox-mvp-note">
                  {lang === 'ru' ? lightboxMatch.mvpLineRu : lightboxMatch.mvpLineEn}
                </span>
              </div>

              <div className="lightbox-controls">
                <button
                  type="button"
                  className="lightbox-nav-btn"
                  onClick={handlePrevLightbox}
                  aria-label="Previous screenshot"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="lightbox-nav-btn"
                  onClick={handleNextLightbox}
                  aria-label="Next screenshot"
                >
                  →
                </button>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setLightboxMatch(null)}
                >
                  ✕ {lang === 'ru' ? 'ЗАКРЫТЬ' : 'CLOSE'}
                </button>
              </div>
            </div>

            <div className="lightbox-img-stage">
              <img
                src={lightboxMatch.screenshotUrl}
                alt={`Full screenshot RL7 vs ${lightboxMatch.opponentTag}`}
                className="lightbox-full-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
