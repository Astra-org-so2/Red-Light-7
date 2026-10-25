import React from 'react';
import { Language, PlayerProfile } from '../data/teamData';
import { RL7Logo } from './RL7Logo';
import './PlayerCard.css';

interface PlayerCardProps {
  player: PlayerProfile;
  lang: Language;
  featured?: boolean;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ player, lang, featured = false }) => {
  return (
    <article
      className={`rl7-player-card corner-frame ${featured ? 'is-featured' : ''} ${
        player.isReserve ? 'is-reserve-card' : ''
      }`}
    >
      {/* Верхняя планка карточки */}
      <div className="rl7-player-topbar">
        <span className="rl7-player-unit">{player.specTag}</span>
        <span className={`rl7-player-number ${player.isReserve ? 'reserve-badge' : ''}`}>
          #{player.number}
        </span>
      </div>

      {/* Визуальный блок с силуэтом игрока в белой джерси RL7 */}
      <div className="rl7-player-visual">
        <div className="rl7-player-bg-number" aria-hidden="true">
          {player.number}
        </div>
        <img
          src={player.portraitUrl}
          alt={`${player.nickname} — RED LIGHT 7 Standoff 2 Player`}
          className="rl7-player-img"
          loading="lazy"
        />
        <div className="rl7-player-vignette" />

        {/* Бейдж роли поверх нижней части портрета */}
        <div className="rl7-player-role-pill">
          {lang === 'ru' ? player.roleRu : player.roleEn}
        </div>

        <div className="rl7-player-crest">
          <RL7Logo variant="mark" />
        </div>
      </div>

      {/* Информационная панель игрока */}
      <div className="rl7-player-info">
        <div className="rl7-player-status-row">
          <span
            className={`rl7-player-dot ${player.isReserve ? 'reserve-dot' : ''}`}
          />
          <span className="rl7-player-status">
            {lang === 'ru' ? player.statusRu : player.statusEn}
          </span>
        </div>

        <h3 className="rl7-player-nickname">{player.nickname}</h3>

        {/* Отличительная особенность / перк */}
        <div className="rl7-player-perk-box">
          <span className="perk-label">
            {lang === 'ru' ? 'ОСОБЕННОСТЬ:' : 'SIGNATURE TRAIT:'}
          </span>
          <strong className="perk-title">
            {lang === 'ru' ? player.perkRu : player.perkEn}
          </strong>
        </div>

        <p className="rl7-player-trait-desc">
          {lang === 'ru' ? player.traitRu : player.traitEn}
        </p>

        {/* Шкалы ключевых характеристик в стиле iOS */}
        <div className="rl7-player-metrics">
          {player.metrics.map((m) => (
            <div key={m.labelEn} className="metric-bar-item">
              <div className="metric-bar-top">
                <span className="metric-name">
                  {lang === 'ru' ? m.labelRu : m.labelEn}
                </span>
                <span className="metric-val">{m.value}</span>
              </div>
              <div className="metric-track">
                <div
                  className="metric-fill"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
