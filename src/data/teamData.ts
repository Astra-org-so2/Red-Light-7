export type Language = 'ru' | 'en';

export interface PlayerProfile {
  id: string;
  number: string;
  nickname: string;
  statusRu: string;
  statusEn: string;
  division: string;
  gameId?: string; // Поле для игрового ID Standoff 2 (можно заполнить позже)
  roleRu?: string; // Опционально: роль в будущем (сейчас не используется по ТЗ)
  roleEn?: string;
  portraitUrl: string;
  countryCode: string;
  specTag: string;
}

export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string; // Поставьте реальную ссылку вместо '', когда появится аккаунт
  statusRu: string;
  statusEn: string;
}

/**
 * ЕДИНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ КОМАНДЫ RED LIGHT 7 (RL7)
 * Здесь можно легко изменить никнеймы, номера, ссылки на соцсети, слоган и фотографии
 * без необходимости редактировать компоненты интерфейса.
 */
export const TEAM_CONFIG = {
  brand: {
    fullName: 'RED LIGHT 7',
    shortName: 'RL7',
    tag: 'RL7 ESPORTS',
    discipline: 'STANDOFF 2',
    foundedYear: '2026',
    kitEdition: 'RL7 WHITE PRO KIT // VARIANT B',
    sloganRu: 'ТОЧНОСТЬ. ХЛАДНОКРОВИЕ. КРАСНЫЙ СИГНАЛ.',
    sloganEn: 'PRECISION. COMPOSURE. THE RED SIGNAL.',
    subSloganRu:
      'Киберспортивная организация по дисциплине Standoff 2. Построена вокруг дисциплины, командной синергии и бескомпромиссного технического исполнения.',
    subSloganEn:
      'Competitive Standoff 2 esports organization built around tactical discipline, team synergy, and uncompromising execution.',
  },

  /**
   * ОСНОВНОЙ СОСТАВ КОМАНДЫ (ROSTER)
   * Роли и капитан не указаны намеренно (в соответствии с актуальным составом).
   */
  roster: [
    {
      id: 'rl7-01',
      number: '01',
      nickname: 'L1tez',
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'ACTIVE ROSTER',
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-01',
      specTag: 'UNIT // ALPHA-01',
    },
    {
      id: 'rl7-02',
      number: '02',
      nickname: 'sharinganov',
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'ACTIVE ROSTER',
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-02',
      specTag: 'UNIT // ALPHA-02',
    },
    {
      id: 'rl7-03',
      number: '03',
      nickname: 'morph',
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'ACTIVE ROSTER',
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-03',
      specTag: 'UNIT // ALPHA-03',
    },
    {
      id: 'rl7-04',
      number: '04',
      nickname: 'hako',
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'ACTIVE ROSTER',
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-04',
      specTag: 'UNIT // ALPHA-04',
    },
    {
      id: 'rl7-05',
      number: '07',
      nickname: 'karat',
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'ACTIVE ROSTER',
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-07',
      specTag: 'UNIT // ALPHA-07',
    },
  ] as PlayerProfile[],

  /**
   * СПЕЦИФИКАЦИЯ ИГРОВОЙ ДЖЕРСИ (ВАРИАНТ Б — БЕЛАЯ PRO KIT)
   */
  jersey: {
    code: 'RL7-KIT-01W',
    titleRu: 'БЕЛАЯ ИГРОВАЯ ДЖЕРСИ RL7 (PRO KIT)',
    titleEn: 'RL7 WHITE PRO JERSEY (VARIANT B)',
    imageUrl: './assets/jersey/rl7-white-jersey.png',
    specs: [
      {
        code: '01 // BASE COLOR',
        labelRu: 'Матовый кристально-белый корпус (#F5F5F5)',
        labelEn: 'Matte Crisp White Chassis (#F5F5F5)',
        detailRu: 'Создаёт максимальный визуальный контраст на тёмной арене.',
        detailEn: 'Engineered for high-contrast stage presence against dark studio lighting.',
      },
      {
        code: '02 // YOKE & COLLAR',
        labelRu: 'Угольно-чёрный плечевой пояс (#080808)',
        labelEn: 'Carbon Black Shoulder Yoke (#080808)',
        detailRu: 'Строгая спортивная геометрия плеч и воротника.',
        detailEn: 'Structured anatomical shoulder panels and reinforced collar.',
      },
      {
        code: '03 // RED LIGHT PIPING',
        labelRu: 'Алые векторные линии швов (#E10616)',
        labelEn: 'Crimson Signal Seam Piping (#E10616)',
        detailRu: 'Фирменные акценты Red Light 7 вдоль грудного контура.',
        detailEn: 'Signature Red Light 7 geometric vector lines across chest contours.',
      },
      {
        code: '04 // IDENTITY CLEANLINESS',
        labelRu: 'Чистый клубный брендинг без визуального шума',
        labelEn: 'Pure Club Identity — Zero Clutter',
        detailRu: 'Только нагрудная монограмма RL7 и технический индекс команды.',
        detailEn: 'Exclusively features the RL7 chest crest and technical typography.',
      },
    ],
  },

  /**
   * СОЦИАЛЬНЫЕ СЕТИ И МЕДИА-КАНАЛЫ
   * Ссылки оставлены пустыми ('') до запуска официальных страниц — сайт отобразит их
   * со стильными векторными иконками и статусом ожидания без битых переходов.
   */
  socials: [
    {
      id: 'telegram',
      name: 'TELEGRAM',
      handle: '@RL7_ESPORTS // TBA',
      url: '',
      statusRu: 'СКОРО ПОДКЛЮЧЕНИЕ',
      statusEn: 'CHANNEL COMING SOON',
    },
    {
      id: 'vk',
      name: 'VKONTAKTE',
      handle: 'VK.COM/RL7 // TBA',
      url: '',
      statusRu: 'СКОРО ПОДКЛЮЧЕНИЕ',
      statusEn: 'COMMUNITY COMING SOON',
    },
    {
      id: 'youtube',
      name: 'YOUTUBE',
      handle: 'RL7 MEDIA // TBA',
      url: '',
      statusRu: 'СКОРО ПОДКЛЮЧЕНИЕ',
      statusEn: 'HIGHLIGHTS COMING SOON',
    },
    {
      id: 'discord',
      name: 'DISCORD',
      handle: 'RL7 SERVER // TBA',
      url: '',
      statusRu: 'СКОРО ПОДКЛЮЧЕНИЕ',
      statusEn: 'SERVER COMING SOON',
    },
    {
      id: 'tiktok',
      name: 'TIKTOK',
      handle: '@RL7_SO2 // TBA',
      url: '',
      statusRu: 'СКОРО ПОДКЛЮЧЕНИЕ',
      statusEn: 'CLIPS COMING SOON',
    },
  ] as SocialChannel[],
};
