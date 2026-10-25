import React, { useState } from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { CrosshairIcon } from '../components/SocialIcons';
import './MatchesPage.css';

interface MatchesPageProps {
  lang: Language;
}

export const MatchesPage: React.FC<MatchesPageProps> = ({ lang }) => {
  // Состояние генератора заявки на прак (Scrim Request)
  const [teamName, setTeamName] = useState<string>('');
  const [contactHandle, setContactHandle] = useState<string>('');
  const [format, setFormat] = useState<'BO1' | 'BO3' | 'BO5'>('BO3');
  const [timeSlot, setTimeSlot] = useState<string>('20:00 MSK');
  const [selectedMaps, setSelectedMaps] = useState<string[]>(['SANDSTONE', 'PROVINCE', 'RUST']);
  const [scrimCopied, setScrimCopied] = useState<boolean>(false);

  const mapOptions = ['SANDSTONE', 'PROVINCE', 'RUST', 'BREEZE', 'DUNE'];
  const timeOptions = ['18:00 MSK', '19:30 MSK', '20:00 MSK', '21:30 MSK'];

  const toggleMapSelection = (mapName: string) => {
    setSelectedMaps((prev) =>
      prev.includes(mapName)
        ? prev.length > 1
          ? prev.filter((m) => m !== mapName)
          : prev
        : [...prev, mapName]
    );
  };

  const formattedTicket = [
    `[RL7 SCRIM REQUEST // STANDOFF 2]`,
    `OPPONENT: ${teamName.trim() || 'TEAM TBA'}`,
    `FORMAT: ${format} (5v5 Competitive)`,
    `MAPS: ${selectedMaps.join(' / ')}`,
    `TIME: ${timeSlot}`,
    `CONTACT: ${contactHandle.trim() || '@captain_tba'}`,
  ].join('\n');

  const handleCopyScrim = (e: React.FormEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(formattedTicket);
    }
    setScrimCopied(true);
    setTimeout(() => setScrimCopied(false), 3000);
  };

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
            <span className="tech-label">DIRECTORY // 03 — COMPETITIVE SCHEDULE &amp; SCRIMS</span>
            <h1 className="section-title-en">
              MATCHES <span>&amp; SCRIMS</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Официальный календарь выступлений, интерактивная форма вызова RED LIGHT 7 на прак (Scrim) и турнирный архив.'
                : 'Official competitive calendar, interactive RED LIGHT 7 scrimmage challenge form, and tournament archive.'}
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
                  ? 'Состав RL7 (L1tez, sharinganov, morph, hako, karat + delf1n) проходит тренировочный цикл и подготовку к турнирным выступлениям. Даты матчей, соперники и трансляции будут опубликованы после официальной жеребьёвки.'
                  : 'The RL7 squad (L1tez, sharinganov, morph, hako, karat + delf1n) is in an active scrimmage block. Match dates, opponents, and stream links will appear here once brackets are locked.'}
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

        {/* Пункт 7: БЫСТРАЯ ФОРМА «ЗАБИТЬ ПРАК (SCRIM) С RL7» */}
        <div className="rl7-scrim-section">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">PRACTICE CHALLENGE // SCRIM GENERATOR</span>
              <h2 className="section-title-en">
                BOOK A <span>SCRIM VS RL7</span>
              </h2>
              <p className="section-subtitle-ru">
                {lang === 'ru'
                  ? 'Сформируйте карточку вызова на тренировочный матч (прак) против основного состава RED LIGHT 7 по Standoff 2 и скопируйте её в 1 клик.'
                  : 'Configure a practice scrimmage request against the RED LIGHT 7 Standoff 2 lineup and copy the formatted ticket in one click.'}
              </p>
            </div>
          </div>

          <div className="scrim-builder-grid corner-frame">
            <form className="scrim-form-col" onSubmit={handleCopyScrim}>
              <div className="scrim-input-row">
                <div className="scrim-field">
                  <label htmlFor="scrim-team">
                    {lang === 'ru' ? 'НАЗВАНИЕ ВАШЕЙ КОМАНДЫ / ТЕГ' : 'YOUR TEAM NAME / TAG'}
                  </label>
                  <input
                    id="scrim-team"
                    type="text"
                    placeholder={lang === 'ru' ? 'Например: ASTRA ESPORTS' : 'e.g. ASTRA ESPORTS'}
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                  />
                </div>

                <div className="scrim-field">
                  <label htmlFor="scrim-contact">
                    {lang === 'ru' ? 'КОНТАКТ КАПИТАНА / МЕНЕДЖЕРА' : 'CAPTAIN / MANAGER CONTACT'}
                  </label>
                  <input
                    id="scrim-contact"
                    type="text"
                    placeholder="Telegram @username / VK"
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                  />
                </div>
              </div>

              <div className="scrim-input-row">
                <div className="scrim-field">
                  <label>{lang === 'ru' ? 'ФОРМАТ СЕРИИ' : 'SERIES FORMAT'}</label>
                  <div className="scrim-pills-group">
                    {(['BO1', 'BO3', 'BO5'] as const).map((fmt) => (
                      <button
                        key={fmt}
                        type="button"
                        className={`scrim-pill-btn ${format === fmt ? 'is-selected' : ''}`}
                        onClick={() => setFormat(fmt)}
                      >
                        {fmt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="scrim-field">
                  <label>{lang === 'ru' ? 'ВРЕМЯ ПРАКА (МСК)' : 'PREFERRED TIME SLOT'}</label>
                  <div className="scrim-pills-group">
                    {timeOptions.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`scrim-pill-btn ${timeSlot === slot ? 'is-selected' : ''}`}
                        onClick={() => setTimeSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="scrim-field">
                <label>
                  {lang === 'ru'
                    ? 'ВЫБЕРИТЕ КАРТЫ ИЗ ПУЛА STANDOFF 2'
                    : 'SELECT STANDOFF 2 MAPS'}
                </label>
                <div className="scrim-pills-group">
                  {mapOptions.map((mapName) => {
                    const active = selectedMaps.includes(mapName);
                    return (
                      <button
                        key={mapName}
                        type="button"
                        className={`scrim-pill-btn ${active ? 'is-selected' : ''}`}
                        onClick={() => toggleMapSelection(mapName)}
                      >
                        {mapName}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="btn-rl7 btn-rl7-primary scrim-submit-btn">
                {scrimCopied
                  ? lang === 'ru'
                    ? '✓ ЗАЯВКА НА ПРАК СКОПИРОВАНА В БУФЕР ОБМЕНА'
                    : '✓ SCRIM TICKET COPIED TO CLIPBOARD'
                  : lang === 'ru'
                    ? 'СКОПИРОВАТЬ ГОТОВУЮ ЗАЯВКУ НА ПРАК'
                    : 'COPY FORMATTED SCRIM REQUEST'}
              </button>
            </form>

            {/* Предпросмотр карточки прака в реальном времени */}
            <div className="scrim-preview-col">
              <div className="scrim-preview-header">
                <span>LIVE TICKET PREVIEW</span>
                <span style={{ color: 'var(--brand-red)' }}>READY TO SEND</span>
              </div>

              <div className="scrim-versus-banner">
                <div className="vs-side">
                  <strong>RL7</strong>
                  <span>RED LIGHT 7</span>
                </div>
                <span className="vs-badge">{format}</span>
                <div className="vs-side">
                  <strong>{teamName.trim() ? teamName.trim().slice(0, 12).toUpperCase() : 'OPPONENT'}</strong>
                  <span>CHALLENGER</span>
                </div>
              </div>

              <pre className="scrim-code-output">{formattedTicket}</pre>

              <p className="scrim-preview-hint">
                {lang === 'ru'
                  ? 'После копирования отправьте этот блок в официальный Telegram или VK команды RL7.'
                  : 'After copying, paste this ticket directly into RL7 official Telegram or VK.'}
              </p>
            </div>
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
