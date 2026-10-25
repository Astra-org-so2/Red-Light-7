import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const SocialVectorIcon: React.FC<{ id: string; size?: number }> = ({
  id,
  size = 20,
}) => {
  switch (id) {
    case 'telegram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 3.5L2.5 11L9.5 13.5L18.5 6.5L12 15L12.5 20.5L15.5 17L19.5 20L21.5 3.5Z" />
        </svg>
      );
    case 'vk':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7C3.3 13.8 6.8 18 13.2 18H13.7V14.1C15.9 14.3 17.5 15.9 18.2 18H21.3C20.4 14.9 18.2 13.2 16.7 12.5C18.2 11.6 20 9.6 20.5 7H17.7C17 9.3 15.4 11.4 13.7 11.6V7H10.9V15C9.1 14.5 6.7 12.1 6.5 7H3Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <polygon points="10,9 15,12 10,15" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'discord':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12C9 12.55 8.55 13 8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12Z" fill="currentColor" />
          <path d="M17 12C17 12.55 16.55 13 16 13C15.45 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12Z" fill="currentColor" />
          <path d="M18.9 5C17.4 4.3 15.8 3.9 14.1 3.7L13.6 4.7C12.5 4.5 11.5 4.5 10.4 4.7L9.9 3.7C8.2 3.9 6.6 4.3 5.1 5C2.1 9.4 1.3 13.7 1.7 17.9C3.7 19.4 5.7 20.3 7.6 20.9L8.9 19.1C8.2 18.8 7.5 18.5 6.9 18.1C7.1 18.2 8.9 19.2 12 19.2C15.1 19.2 16.9 18.2 17.1 18.1C16.5 18.5 15.8 18.8 15.1 19.1L16.4 20.9C18.3 20.3 20.3 19.4 22.3 17.9C22.8 13 21.5 8.8 18.9 5Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12A4 4 0 1 0 13 16V4A5 5 0 0 0 18 9" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8V16M8 12H16" />
        </svg>
      );
  }
};

export const ArrowUpRightIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

export const CrosshairIcon: React.FC<IconProps> = ({ size = 16, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8" />
    <line x1="12" y1="1" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="23" />
    <line x1="1" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="23" y2="12" />
  </svg>
);
