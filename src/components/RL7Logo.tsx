import React from 'react';

interface RL7LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

/**
 * Векторный логотип RED LIGHT 7 (RL7) со скруглённой геометрией в стиле iOS
 * и иконкой-бейжем App Icon.
 */
export const RL7Logo: React.FC<RL7LogoProps> = ({ variant = 'full', className = '' }) => {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="RL7 Emblem"
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="24"
          fill="#111113"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="2.5"
        />
        <polygon
          points="16,24 84,24 50,82"
          fill="#080808"
          stroke="#F5F5F7"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path
          d="M26 31H47V37H35L42 46H32L25 37V31Z"
          fill="#F5F5F7"
          strokeLinejoin="round"
        />
        <path d="M45 31H52V53H60V59H45V31Z" fill="#F5F5F7" strokeLinejoin="round" />
        <path
          d="M55 31H76L52 70L47 62L64 37H55V31Z"
          fill="#E10616"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        userSelect: 'none',
      }}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="4"
          y="4"
          width="92"
          height="92"
          rx="24"
          fill="#141416"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="3"
        />
        <polygon
          points="16,24 84,24 50,82"
          fill="#080808"
          stroke="#F5F5F7"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M26 31H47V37H35L42 46H32L25 37V31Z" fill="#F5F5F7" />
        <path d="M45 31H52V53H60V59H45V31Z" fill="#F5F5F7" />
        <path d="M55 31H76L52 70L47 62L64 37H55V31Z" fill="#E10616" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.18rem',
            letterSpacing: '-0.01em',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <span>RED LIGHT</span>
          <span style={{ color: 'var(--brand-red)' }}>7</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: 'var(--text-secondary)',
            marginTop: '3px',
          }}
        >
          Standoff 2 Esports
        </span>
      </div>
    </div>
  );
};
