import React from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { SocialVectorIcon } from '../components/SocialIcons';
import './AboutPage.css';

interface AboutPageProps {
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const pillars = [
    {
      num: '01',
      titleRu: 'ТАКТИЧЕСКАЯ СИНЕРГИЯ 5V5',
      titleEn: 'TACTICAL 5V5 SYNERGY',
      descRu:
        'Чёткое разделение ролей внутри стартовой пятёрки (L1tez, sharinganov, morph, hako, karat) обеспечивает полный контроль карты и мгновенную адаптацию по ходу серии.',
      descEn:
        'Specialized role distribution across our starting five (L1tez, sharinganov, morph, hako, karat) ensures complete map control and mid-series adaptability.',
    },
    {
      num: '02',
      titleRu: 'ТЕХНИЧЕСКИЙ МИНИМАЛИЗМ',
      titleEn: 'TECHNICAL PRECISION',
      descRu:
        'Никакого лишнего шума — ни в игре, ни в визуальном стиле. Строгая дисциплина расстановок, выверенные тайминги и хладнокровие в клатч-ситуациях.',
      descEn:
        'Zero clutter in execution or identity. Disciplined spacing, calculated timings, and composure under pressure.',
    },
    {
      num: '03',
      titleRu: 'ФОКУС НА STANDOFF 2',
      titleEn: 'STANDOFF 2 SPECIALIZATION',
      descRu:
        'Клуб целенаправленно развивает подразделение по Standoff 2, выстраивая системный тренировочный процесс для участия в турнирах.',
      descEn:
        'Dedicated exclusively to competitive Standoff 2 with structured preparation for tournament play.',
    },
  ];

  return (
    <div className="page-transition rl7-about-page">
      <div className="swiss-container">
        {/* Заголовок */}
        <div className="section-header-grid">
          <div>
            <span className="tech-label">DIRECTORY // 05 — ORGANIZATION &amp; CHANNELS</span>
            <h1 className="section-title-en">
              ABOUT <span>RED LIGHT 7</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Философия, соревновательные принципы и официальные медиа-ресурсы киберспортивной организации RL7.'
                : 'Philosophy, competitive principles, and official media channels of the RL7 esports organization.'}
            </p>
          </div>
        </div>

        {/* Манифест клуба */}
        <div className="rl7-manifesto-box corner-frame">
          <div className="manifesto-left">
            <span className="manifesto-code">// CLUB MANIFESTO</span>
            <h2 className="manifesto-heading">
              RED LIGHT 7 <br />
              <span>RL7 ESPORTS</span>
            </h2>
          </div>

          <div className="manifesto-right">
            <p className="manifesto-lead">
              {lang === 'ru'
                ? 'RED LIGHT 7 — это киберспортивная команда по дисциплине Standoff 2, объединяющая пятёрку игроков вокруг строгой игровой системы и узнаваемой чёрно-бело-красной эстетики.'
                : 'RED LIGHT 7 is a competitive Standoff 2 organization uniting five players around a disciplined tactical system and an unmistakable black, white, and red identity.'}
            </p>
            <p className="manifesto-body">
              {lang === 'ru'
                ? 'Название «Red Light 7» символизирует критический сигнал максимальной концентрации: момент перед началом раунда, когда включается полная фокусировка на результате.'
                : 'The name "Red Light 7" represents the critical signal of peak concentration — the exact second before the round barrier drops and pure execution begins.'}
            </p>
          </div>
        </div>

        {/* 3 столпа философии */}
        <div className="rl7-pillars-grid">
          {pillars.map((item) => (
            <div key={item.num} className="rl7-pillar-card corner-frame">
              <span className="pillar-num">// {item.num}</span>
              <h3 className="pillar-title">
                {lang === 'ru' ? item.titleRu : item.titleEn}
              </h3>
              <p className="pillar-desc">{lang === 'ru' ? item.descRu : item.descEn}</p>
            </div>
          ))}
        </div>

        {/* Секция социальных сетей с векторными иконками */}
        <div className="rl7-socials-section">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">OFFICIAL NETWORK // MEDIA HUB</span>
              <h2 className="section-title-en">
                SOCIAL <span>CHANNELS</span>
              </h2>
              <p className="section-subtitle-ru">
                {lang === 'ru'
                  ? 'Официальные медиа-каналы клуба представлены ниже. Ссылки активируются по мере публикации командных страниц (редактируются в src/data/teamData.ts).'
                  : 'Official club channels are listed below. Direct links activate upon channel launch (configured in src/data/teamData.ts).'}
              </p>
            </div>
          </div>

          <div className="rl7-socials-grid">
            {TEAM_CONFIG.socials.map((soc) => {
              const hasUrl = Boolean(soc.url && soc.url.trim().length > 0);
              return (
                <div key={soc.id} className="rl7-social-card corner-frame">
                  <div className="social-card-top">
                    <div className="social-vector-wrap">
                      <SocialVectorIcon id={soc.id} size={22} />
                    </div>
                    <span className="social-status-tag">
                      {hasUrl
                        ? 'ACTIVE'
                        : lang === 'ru'
                          ? soc.statusRu
                          : soc.statusEn}
                    </span>
                  </div>

                  <div className="social-card-mid">
                    <h3 className="social-name">{soc.name}</h3>
                    <span className="social-handle">{soc.handle}</span>
                  </div>

                  {hasUrl ? (
                    <a
                      href={soc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-rl7 btn-rl7-primary social-btn"
                    >
                      {lang === 'ru' ? 'ПЕРЕЙТИ В КАНАЛ' : 'OPEN CHANNEL'}
                    </a>
                  ) : (
                    <div className="social-pending-bar">
                      <span className="red-signal-dot" />
                      <span>{lang === 'ru' ? 'КАНАЛ В ПОДГОТОВКЕ' : 'LINK PENDING TBA'}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
