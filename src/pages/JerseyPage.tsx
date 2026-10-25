import React from 'react';
import { Language, TEAM_CONFIG } from '../data/teamData';
import { RL7Logo } from '../components/RL7Logo';
import './JerseyPage.css';

interface JerseyPageProps {
  lang: Language;
}

export const JerseyPage: React.FC<JerseyPageProps> = ({ lang }) => {
  const paletteSwatches = [
    {
      hex: '#080808',
      nameRu: 'CARBON BLACK // ОСНОВА И ПЛЕЧИ',
      nameEn: 'CARBON BLACK // BASE & SHOULDERS',
      role: 'PRIMARY DARK',
    },
    {
      hex: '#F5F5F5',
      nameRu: 'CRISP WHITE // КОРПУС ДЖЕРСИ',
      nameEn: 'CRISP WHITE // JERSEY TORSO',
      role: 'KIT PRIMARY',
    },
    {
      hex: '#E10616',
      nameRu: 'RED LIGHT SIGNAL // АКЦЕНТЫ И ЛИНИИ',
      nameEn: 'RED LIGHT SIGNAL // SEAM PIPING',
      role: 'BRAND ACCENT',
    },
  ];

  return (
    <div className="page-transition rl7-jersey-page">
      <div className="swiss-container">
        {/* Заголовок страницы */}
        <div className="section-header-grid">
          <div>
            <span className="tech-label">DIRECTORY // 04 — APPAREL &amp; BRAND SYSTEM</span>
            <h1 className="section-title-en">
              WHITE PRO <span>JERSEY</span>
            </h1>
            <p className="section-subtitle-ru">
              {lang === 'ru'
                ? 'Официальная игровая джерси RED LIGHT 7 (Вариант Б). Спроектирована в эстетике швейцарского минимализма: белый корпус с чёрно-красной спортивной геометрией.'
                : 'Official RED LIGHT 7 competitive jersey (Variant B). Engineered in Swiss minimalist aesthetic: crisp white chassis with black and crimson athletic geometry.'}
            </p>
          </div>

          <div className="jersey-edition-badge">
            <span>SPECIFICATION:</span>
            <strong>{TEAM_CONFIG.jersey.code}</strong>
          </div>
        </div>

        {/* Главный стенд формы RL7 */}
        <div className="rl7-jersey-showcase-grid corner-frame">
          {/* Визуал джерси */}
          <div className="jersey-stage">
            <div className="jersey-stage-header">
              <span>// FRONT ELEVATION</span>
              <span style={{ color: 'var(--brand-red)' }}>VARIANT B — WHITE PRO KIT</span>
            </div>

            <div className="jersey-image-container">
              <img
                src={TEAM_CONFIG.jersey.imageUrl}
                alt="RED LIGHT 7 White Pro Esports Jersey"
                className="jersey-main-img"
              />
            </div>

            <div className="jersey-stage-footer">
              <span>AUTHENTIC CLUB ISSUE // NO THIRD-PARTY SPONSORS</span>
              <span>STANDOFF 2 PRO LINEUP</span>
            </div>
          </div>

          {/* Техническая спецификация кроя */}
          <div className="jersey-specs-panel">
            <div className="specs-panel-header">
              <span className="tech-label">TECHNICAL BREAKDOWN</span>
              <h2 className="specs-panel-title">
                {lang === 'ru' ? TEAM_CONFIG.jersey.titleRu : TEAM_CONFIG.jersey.titleEn}
              </h2>
            </div>

            <div className="specs-items-list">
              {TEAM_CONFIG.jersey.specs.map((spec) => (
                <div key={spec.code} className="spec-row-item">
                  <span className="spec-row-code">{spec.code}</span>
                  <h3 className="spec-row-title">
                    {lang === 'ru' ? spec.labelRu : spec.labelEn}
                  </h3>
                  <p className="spec-row-desc">
                    {lang === 'ru' ? spec.detailRu : spec.detailEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Блок айдентики: Логотип и строгая палитра из 3 цветов */}
        <div className="rl7-identity-system">
          <div className="section-header-grid">
            <div>
              <span className="tech-label">BRAND ARCHITECTURE // VISUAL SYSTEM</span>
              <h2 className="section-title-en">
                RL7 <span>IDENTITY</span>
              </h2>
            </div>
          </div>

          <div className="identity-bento-grid">
            {/* Карточка логотипа */}
            <div className="identity-logo-card corner-frame">
              <div className="id-card-top">
                <span>01 // VECTOR MONOGRAM</span>
                <span>SVG FORMAT</span>
              </div>
              <div className="id-logo-stage">
                <RL7Logo variant="mark" className="id-large-crest" />
              </div>
              <div className="id-card-bottom">
                <h4>
                  {lang === 'ru'
                    ? 'ТРЕУГОЛЬНАЯ МОНОГРАММА RL7'
                    : 'TRIANGULAR RL7 CREST'}
                </h4>
                <p>
                  {lang === 'ru'
                    ? 'Острая геометрия букв R и L в сочетании с агрессивной красной цифрой 7. Полностью соответствует нагрудной эмблеме на игровой форме.'
                    : 'Sharp geometric R and L letterforms fused with the crimson 7. Matches the chest crest on the official player kit.'}
                </p>
              </div>
            </div>

            {/* Карточка строгой 3-цветной палитры */}
            <div className="identity-palette-card corner-frame">
              <div className="id-card-top">
                <span>02 // STRICT TRI-COLOR SYSTEM</span>
                <span>HEX SPECS</span>
              </div>
              <div className="palette-swatches-list">
                {paletteSwatches.map((swatch) => (
                  <div key={swatch.hex} className="palette-swatch-row">
                    <div
                      className="swatch-color-block"
                      style={{
                        backgroundColor: swatch.hex,
                        border:
                          swatch.hex === '#080808'
                            ? '1px solid var(--border-grid)'
                            : 'none',
                      }}
                    />
                    <div className="swatch-info">
                      <div className="swatch-top-line">
                        <strong className="swatch-hex">{swatch.hex}</strong>
                        <span className="swatch-role">{swatch.role}</span>
                      </div>
                      <span className="swatch-name">
                        {lang === 'ru' ? swatch.nameRu : swatch.nameEn}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
