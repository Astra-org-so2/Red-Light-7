export type Language = 'ru' | 'en';

export interface PlayerMetric {
  labelRu: string;
  labelEn: string;
  value: number;
}

export interface PlayerProfile {
  id: string;
  number: string;
  nickname: string;
  isReserve?: boolean;
  statusRu: string;
  statusEn: string;
  roleRu: string;
  roleEn: string;
  perkRu: string;
  perkEn: string;
  traitRu: string;
  traitEn: string;
  metrics: PlayerMetric[];
  division: string;
  gameId?: string;
  portraitUrl: string;
  countryCode: string;
  specTag: string;
}

export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  statusRu: string;
  statusEn: string;
}

/**
 * ЕДИНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ КОМАНДЫ RED LIGHT 7 (RL7)
 * Содержит 5 игроков основы (L1tez, sharinganov, morph, hako, karat)
 * и запасного игрока (delf1n), включая роли, отличительные особенности и характеристики.
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
   * СОСТАВ КОМАНДЫ (5 ОСНОВНЫХ + 1 ЗАПАСНОЙ)
   */
  roster: [
    {
      id: 'rl7-01',
      number: '01',
      nickname: 'L1tez',
      isReserve: false,
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'STARTING FIVE',
      roleRu: 'ENTRY FRAGGER // ОПЕН-ФРАГЕР',
      roleEn: 'ENTRY FRAGGER',
      perkRu: 'ВСКРЫТИЕ ПЛЕНТОВ И ПЕРВЫЙ КОНТАКТ',
      perkEn: 'SPACE CREATOR & FIRST CONTACT',
      traitRu:
        'Агрессивный локомотив атаки. Задаёт высокий темп с первых секунд раунда, выигрывает стартовые дуэли и расчищает пространство для выхода команды на точку.',
      traitEn:
        'Explosive spearhead of the attack. Dictates early-round pace, secures opening duels, and creates space for site executes.',
      metrics: [
        { labelRu: 'ОПЕН-ДУЭЛИ (FIRST BLOOD)', labelEn: 'OPENING DUELS', value: 96 },
        { labelRu: 'СКОРОСТЬ НАВОДКИ', labelEn: 'AIM VELOCITY', value: 94 },
        { labelRu: 'АГРЕССИЯ И ТЕМП', labelEn: 'ENTRY AGGRESSION', value: 95 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-01',
      specTag: 'UNIT // ALPHA-01',
    },
    {
      id: 'rl7-02',
      number: '02',
      nickname: 'sharinganov',
      isReserve: false,
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'STARTING FIVE',
      roleRu: 'SNIPER // ГЛАВНЫЙ СНАЙПЕР',
      roleEn: 'PRIMARY AWPER / SNIPER',
      perkRu: 'КОНТРОЛЬ ДИСТАНЦИИ И ФЛИК-ШОТЫ',
      perkEn: 'LONG-RANGE LOCKDOWN & FLICKS',
      traitRu:
        'Хладнокровный снайпер с феноменальной реакцией. Полностью перекрывает ключевые магистрали карты и мгновенно наказывает соперника за малейшую ошибку на пике.',
      traitEn:
        'Ice-cold sniper with lightning reflexes. Locks down long sightlines and punishes even the slightest shoulder peek.',
      metrics: [
        { labelRu: 'ТОЧНОСТЬ СНАЙПИНГА', labelEn: 'SNIPER PRECISION', value: 97 },
        { labelRu: 'КОНТРОЛЬ ЛИНИЙ', labelEn: 'LINE LOCKDOWN', value: 94 },
        { labelRu: 'ХЛАДНОКРОВИЕ', labelEn: 'COMPOSURE', value: 93 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-02',
      specTag: 'UNIT // ALPHA-02',
    },
    {
      id: 'rl7-03',
      number: '03',
      nickname: 'morph',
      isReserve: false,
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'STARTING FIVE',
      roleRu: 'LURKER // МАСТЕР КЛАТЧЕЙ',
      roleEn: 'LURKER & CLUTCH SPECIALIST',
      perkRu: 'ЧТЕНИЕ РОТАЦИЙ И СИТУАЦИИ 1vX',
      perkEn: 'ROTATION READS & 1vX CLUTCHES',
      traitRu:
        'Теневой интеллект команды. Идеально чувствует тайминги перетяжек соперника, режет ротации в спину и вытаскивает самые безнадёжные клатчи в концовках раундов.',
      traitEn:
        'The shadow tactician. Reads enemy rotations with surgical timing, cuts off flanks, and thrives in high-pressure 1vX late rounds.',
      metrics: [
        { labelRu: 'ЧТЕНИЕ ИГРЫ (GAME SENSE)', labelEn: 'GAME SENSE & IQ', value: 96 },
        { labelRu: 'РЕАЛИЗАЦИЯ КЛАТЧЕЙ', labelEn: 'CLUTCH CONVERSION', value: 95 },
        { labelRu: 'ЧУВСТВО ТАЙМИНГА', labelEn: 'TIMING MASTERY', value: 94 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-03',
      specTag: 'UNIT // ALPHA-03',
    },
    {
      id: 'rl7-04',
      number: '04',
      nickname: 'hako',
      isReserve: false,
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'STARTING FIVE',
      roleRu: 'SUPPORT // ОПОРНИК И РАСКИДКА',
      roleEn: 'SUPPORT & SITE ANCHOR',
      perkRu: 'ТАКТИЧЕСКИЕ ГРАНАТЫ И УДЕРЖАНИЕ ТОЧКИ',
      perkEn: 'UTILITY PRECISION & SITE DEFENSE',
      traitRu:
        'Фундамент командной структуры RL7. Обеспечивает идеальную геометрию смоков и флешек под выход тиммейтов, а в защите намертво цементирует свой плент против численного преимущества.',
      traitEn:
        'Backbone of the RL7 tactical setup. Delivers pixel-perfect utility for executes and anchors defensive sites against multi-man pushes.',
      metrics: [
        { labelRu: 'ЭФФЕКТИВНОСТЬ ГРАНАТ', labelEn: 'UTILITY IMPACT', value: 96 },
        { labelRu: 'ОБОРОНА ТОЧКИ (ANCHOR)', labelEn: 'SITE ANCHORING', value: 94 },
        { labelRu: 'КОМАНДНЫЙ РАЗМЕН', labelEn: 'TRADE EFFICIENCY', value: 95 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-04',
      specTag: 'UNIT // ALPHA-04',
    },
    {
      id: 'rl7-05',
      number: '07',
      nickname: 'karat',
      isReserve: false,
      statusRu: 'ОСНОВНОЙ СОСТАВ',
      statusEn: 'STARTING FIVE',
      roleRu: 'RIFLER / FLEX // УНИВЕРСАЛ',
      roleEn: 'STAR RIFLER / FLEX',
      perkRu: 'ЭТАЛОННЫЙ СПРЕЙ И ВТОРОЙ ТЕМП',
      perkEn: 'ELITE SPRAY CONTROL & MULTI-ROLE',
      traitRu:
        'Главная огневая мощь на средних дистанциях. Отличается эталонным контролем зажима и мгновенным переключением между агрессивным пушем и расчётливым ретейком.',
      traitEn:
        'Relentless mid-range firepower. Combines textbook recoil control with seamless transitions between aggressive trading and calculated retakes.',
      metrics: [
        { labelRu: 'КОНТРОЛЬ СПРЕЯ (AIM)', labelEn: 'RIFLE MECHANICS', value: 96 },
        { labelRu: 'УНИВЕРСАЛЬНОСТЬ', labelEn: 'ROLE ADAPTABILITY', value: 95 },
        { labelRu: 'УСПЕШНОСТЬ РЕТЕЙКОВ', labelEn: 'RETAKE EXECUTION', value: 93 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-1.png',
      countryCode: 'RL7-07',
      specTag: 'UNIT // ALPHA-07',
    },
    {
      id: 'rl7-06',
      number: '06',
      nickname: 'delf1n',
      isReserve: true,
      statusRu: 'ЗАПАСНОЙ ИГРОК // 6TH MAN',
      statusEn: 'RESERVE // IMPACT SUB',
      roleRu: '6TH PLAYER // ТАКТИЧЕСКИЙ ДЖОКЕР',
      roleEn: '6TH PLAYER / WILDCARD SUB',
      perkRu: 'ГИБКАЯ СМЕНА СТИЛЯ И ИМПАКТ С ЗАМЕНЫ',
      perkEn: 'TEMPO SHIFTER & MULTI-POSITION',
      traitRu:
        'Секретное оружие ротации RL7. Способен выйти на любую карту серии, закрыть дефицитную позицию без просадки по стрельбе и сломать подготовку оппонента нестандартными мувами.',
      traitEn:
        'RL7 tactical wildcard. Steps into any map or role on demand, disrupts opponent preparation, and injects fresh tempo mid-series.',
      metrics: [
        { labelRu: 'ГИБКОСТЬ ПОЗИЦИЙ', labelEn: 'POSITIONAL VERSATILITY', value: 95 },
        { labelRu: 'СМЕНА ТЕМПА ИГРЫ', labelEn: 'TEMPO DISRUPTION', value: 94 },
        { labelRu: 'ИМПАКТ С ЗАМЕНЫ', labelEn: 'INSTANT IMPACT', value: 92 },
      ],
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-06',
      specTag: 'UNIT // RESERVE-06',
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
