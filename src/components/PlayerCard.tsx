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
    <article className={`rl7-player-card corner-frame ${featured ? 'is-featured' : ''}`}>
      {/* Верхняя техническая планка */}
      <div className="rl7-player-topbar">
        <span className="rl7-player-unit">{player.specTag}</span>
        <span className="rl7-player-number">#{player.number}</span>
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
        <div className="rl7-player-crest">
          <RL7Logo variant="mark" />
        </div>
      </div>

      {/* Информационная панель игрока */}
      <div className="rl7-player-info">
        <div className="rl7-player-status-row">
          <span className="rl7-player-dot" />
          <span className="rl7-player-status">
            {lang === 'ru' ? player.statusRu : player.statusEn}
          </span>
        </div>

        <h3 className="rl7-player-nickname">{player.nickname}</h3>

        <div className="rl7-player-meta">
          <div className="rl7-player-meta-cell">
            <span className="meta-key">{lang === 'ru' ? 'ДИСЦИПЛИНА' : 'DISCIPLINE'}</span>
            <span className="meta-val">STANDOFF 2</span>
          </div>
          <div className="rl7-player-meta-cell">
            <span className="meta-key">{lang === 'ru' ? 'ИНДЕКС' : 'CALLSIGN'}</span>
            <span className="meta-val">{player.countryCode}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
