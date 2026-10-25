import React from 'react';
import { Language, PlayerRadarStats } from '../data/teamData';

interface RadarChartProps {
  stats: PlayerRadarStats;
  lang: Language;
}

/**
 * Векторная радар-диаграмма (пятиугольник навыков) игрока RL7 в стиле iOS Dark Mode.
 * Строго в палитре Black / White / Brand Red (#E10616).
 */
export const RadarChart: React.FC<RadarChartProps> = ({ stats, lang }) => {
  const size = 230;
  const center = size / 2;
  const maxRadius = 76;

  const axes = [
    { key: 'aim', label: 'AIM', value: stats.aim },
    { key: 'entry', label: 'ENTRY', value: stats.entry },
    { key: 'clutch', label: 'CLUTCH', value: stats.clutch },
    { key: 'utility', label: lang === 'ru' ? 'РАСКИД' : 'UTILITY', value: stats.utility },
    { key: 'iq', label: 'GAME IQ', value: stats.iq },
  ];

  const getPoint = (index: number, pct: number) => {
    const angle = (Math.PI * 2 * index) / axes.length - Math.PI / 2;
    const r = (pct / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const rings = [35, 68, 100];

  const playerPoints = axes
    .map((axis, i) => {
      const pt = getPoint(i, axis.value);
      return `${pt.x.toFixed(1)},${pt.y.toFixed(1)}`;
    })
    .join(' ');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '4px',
          padding: '0 6px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--text-secondary)',
          letterSpacing: '0.1em',
        }}
      >
        <span>{lang === 'ru' ? 'РАДАР НАВЫКОВ' : 'SKILL MATRIX'}</span>
        <span style={{ color: 'var(--brand-red)', fontWeight: 700 }}>PRO METRICS</span>
      </div>

      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ overflow: 'visible' }}
        aria-label="Player Skill Radar Chart"
      >
        {/* Концентрические пятиугольники сетки */}
        {rings.map((ringPct) => {
          const pts = axes
            .map((_, i) => {
              const p = getPoint(i, ringPct);
              return `${p.x.toFixed(1)},${p.y.toFixed(1)}`;
            })
            .join(' ');
          return (
            <polygon
              key={ringPct}
              points={pts}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Лучи от центра к вершинам */}
        {axes.map((axis, i) => {
          const outer = getPoint(i, 100);
          return (
            <line
              key={axis.key}
              x1={center}
              y1={center}
              x2={outer.x}
              y2={outer.y}
              stroke="rgba(255, 255, 255, 0.09)"
              strokeWidth="1"
            />
          );
        })}

        {/* Заполненный многоугольник показателей игрока */}
        <polygon
          points={playerPoints}
          fill="rgba(225, 6, 22, 0.24)"
          stroke="#E10616"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Точки вершин и подписи */}
        {axes.map((axis, i) => {
          const valPt = getPoint(i, axis.value);
          const labelPt = getPoint(i, 126);
          return (
            <g key={axis.key}>
              <circle
                cx={valPt.x}
                cy={valPt.y}
                r="3.8"
                fill="#F5F5F7"
                stroke="#E10616"
                strokeWidth="2"
              />
              <text
                x={labelPt.x}
                y={labelPt.y - 4}
                textAnchor="middle"
                fill="#A1A1A6"
                fontFamily="var(--font-mono)"
                fontSize="8.5"
                fontWeight="600"
              >
                {axis.label}
              </text>
              <text
                x={labelPt.x}
                y={labelPt.y + 8}
                textAnchor="middle"
                fill="#F5F5F7"
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fontWeight="700"
              >
                {axis.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
