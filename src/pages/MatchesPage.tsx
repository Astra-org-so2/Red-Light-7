import React from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { CrosshairIcon } from '../components/SocialIcons';
import './MatchesPage.css';

interface MatchesPageProps {
  lang: Language;
}

export const MatchesPage: React.FC<MatchesPageProps> = ({ lang }) => {
  const upcomingSlots = [
    {
      slotId: 'FIXTURE // 01',
      stageRu: 'ОФИЦИАЛЬНЫЙ МАТЧ // СТАДИЯ TBA',
      stageEn: 'OFFICIAL MATCH // STAGE TBA',
      format: 'BO3 // 5V5',
    },
    {
      slotId: 'FIXTURE // 02',
      stageRu: 'КВАЛИФИКАЦИЯ // СТАДИЯ TBA',
      stageEn: 'QUALIFIER // STAGE TBA',
      format: 'BO3 // 5V5',
    },
    {
      slotId: 'FIXTURE // 03',
      stageRu: 'ТУРНИРНАЯ СЕРИЯ // СТАДИЯ TBA',
      stageEn: 'TOURNAMENT SERIES // STAGE TBA',
      format: 'BO5 // 5V5',
    },
  ];

  return (
    <div className="page-transition rl7-matches-page">
      <div className="swiss-container">
        {/* Заголовок страницы */}
        <div className="section-header-grid">
          <div>
            <span className="tech-label">DIRECTORY // 03 — COMPETITIVE SCHEDULE</span>
            <h1 className="section-title-en">
              MATCHES <span>&amp; EVENTS</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Официальный календарь выступлений и турнирный архив RED LIGHT 7 по Standoff 2. Публикуются исключительно подтверждённые матчи.'
                : 'Official competitive calendar and tournament archive for RED LIGHT 7 Standoff 2 division. Only verified fixtures are listed.'}
            </p>
          </div>

          <div className="matches-live-indicator">
            <span className="red-signal-dot" />
            <span>SCHEDULE STATUS: UPCOMING // TBA</span>
          </div>
        </div>

        {/* Главный технический монитор статуса TBA */}
        <div className="rl7-tba-monitor corner-frame">
          <div className="tba-monitor-topbar">
            <span>// TELEMETRY: RL7-COMPETITIVE-RADAR</span>
            <span style={{ color: 'var(--brand-red)' }}>AWAITING OFFICIAL BRACKET</span>
          </div>

          <div className="tba-monitor-content">
            <div className="tba-icon-ring">
              <CrosshairIcon size={32} />
            </div>

            <div className="tba-monitor-text">
              <span className="tba-eyebrow">UPCOMING MATCHES // TBA</span>
              <h2 className="tba-headline">
                {lang === 'ru'
                  ? 'РАСПИСАНИЕ БЛИЖАЙШИХ МАТЧЕЙ ФОРМИРУЕТСЯ'
                  : 'UPCOMING MATCH SCHEDULE IN PREPARATION'}
              </h2>
              <p className="tba-subtext">
                {lang === 'ru'
                  ? 'Состав RL7 (L1tez, sharinganov, morph, hako, karat) проходит тренировочный цикл и подготовку к турнирным выступлениям. Даты матчей, соперники и трансляции будут опубликованы после официальной жеребьёвки.'
                  : 'The RL7 lineup (L1tez, sharinganov, morph, hako, karat) is currently in an active scrimmage and preparation block. Match dates, opponents, and stream links will appear here once brackets are locked.'}
              </p>
            </div>
          </div>

          {/* Зарезервированные слоты сетки */}
          <div className="tba-slots-grid">
            {upcomingSlots.map((slot) => (
              <div key={slot.slotId} className="tba-slot-card">
                <div className="slot-card-top">
                  <span className="slot-id">{slot.slotId}</span>
                  <span className="slot-format">{slot.format}</span>
                </div>
                <div className="slot-teams-row">
                  <div className="slot-team rl7-side">
                    <span className="team-tag">RL7</span>
                    <span className="team-name">{TEAM_CONFIG.brand.fullName}</span>
                  </div>
                  <span className="slot-vs-badge">VS</span>
                  <div className="slot-team opponent-side">
                    <span className="team-tag">TBA</span>
                    <span className="team-name">
                      {lang === 'ru' ? 'СОПЕРНИК TBA' : 'OPPONENT TBA'}
                    </span>
                  </div>
                </div>
                <div className="slot-card-footer">
                  <span>{lang === 'ru' ? slot.stageRu : slot.stageEn}</span>
                  <span className="slot-date">DATE // TBA</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Раздел Достижений и Архива (без выдуманных кубков) */}
        <div className="rl7-achievements-block">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">ARCHIVE // HONORS &amp; RECORDS</span>
              <h2 className="section-title-en">
                ACHIEVEMENTS <span>LOG</span>
              </h2>
              <p className="section-subtitle-ru">
                {lang === 'ru'
                  ? 'Журнал официальных титулов и призовых мест организации RED LIGHT 7.'
                  : 'Official record of tournament honors and podium finishes by RED LIGHT 7.'}
              </p>
            </div>
          </div>

          <div className="achievements-empty-grid corner-frame">
            <div className="ach-col">
              <span className="ach-index">SEASON // 2026</span>
              <h3 className="ach-title">
                {lang === 'ru' ? 'НАЧАЛО НОВОЙ ИСТОРИИ RL7' : 'NEW COMPETITIVE CHAPTER'}
              </h3>
              <p className="ach-desc">
                {lang === 'ru'
                  ? 'Мы не публикуем вымышленные награды или неофициальные прак-матчи. В этот реестр заносятся только верифицированные результаты турниров по Standoff 2.'
                  : 'We do not list unverified scrims or fabricated trophies. This registry is strictly reserved for official Standoff 2 tournament placements.'}
              </p>
            </div>
            <div className="ach-status-box">
              <span className="ach-code">RECORDS STATUS</span>
              <strong className="ach-state">SEASON IN PROGRESS // TBA</strong>
              <span className="ach-sub">RL7 STANDOFF 2 DIVISION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
