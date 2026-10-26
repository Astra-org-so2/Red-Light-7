export type Language = 'ru' | 'en';

export interface PlayerMetric {
  labelRu: string;
  labelEn: string;
  value: number;
}

export interface PlayerRadarStats {
  aim: number;
  entry: number;
  clutch: number;
  utility: number;
  iq: number;
}

export interface PlayerProSettings {
  device: string;
  fps: string;
  layoutRu: string;
  layoutEn: string;
  sensitivity: string;
  scopeSens: string;
  acceleration: string;
  weapons: string[];
  configCode: string;
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
  radar: PlayerRadarStats;
  proSettings: PlayerProSettings;
  division: string;
  gameId?: string;
  portraitUrl: string;
  countryCode: string;
  specTag: string;
}

export interface MapAssignment {
  player: string;
  number: string;
  roleTag: string;
  ctPosRu: string;
  ctPosEn: string;
  tPosRu: string;
  tPosEn: string;
  /** Координаты маркера игрока в процентах (0..100) прямо на мини-карте за CT */
  ctX: number;
  ctY: number;
  /** Координаты маркера игрока в процентах (0..100) прямо на мини-карте за T */
  tX: number;
  tY: number;
}

export interface TacticalMapInfo {
  id: string;
  name: string;
  code: string;
  minimapUrl: string;
  previewUrl: string;
  tempoRu: string;
  tempoEn: string;
  styleRu: string;
  styleEn: string;
  signatureExecRu: string;
  signatureExecEn: string;
  assignments: MapAssignment[];
}

export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  statusRu: string;
  statusEn: string;
}

export interface MatchPlayerStat {
  nickname: string;
  kills: number;
  assists: number;
  deaths: number;
  score: number;
  stars: number;
  isMvp?: boolean;
}

export interface MatchResultItem {
  id: string;
  code: string;
  map: 'HANAMI' | 'PROVINCE' | 'RUST';
  region: string;
  timeLabel: string;
  rl7Score: number;
  opponentScore: number;
  opponentTag: string;
  opponentLineup: string;
  isWin: boolean;
  rl7Side: 'T' | 'CT';
  badgeRu: string;
  badgeEn: string;
  headlineRu: string;
  headlineEn: string;
  summaryRu: string;
  summaryEn: string;
  screenshotUrl: string;
  mvpPlayer: string;
  mvpLineRu: string;
  mvpLineEn: string;
  scoreboard: MatchPlayerStat[];
}

/**
 * ЕДИНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ КОМАНДЫ RED LIGHT 7 (RL7)
 */
export const TEAM_CONFIG = {
  brand: {
    fullName: 'RED LIGHT 7',
    shortName: 'RL7',
    tag: 'RL7 ESPORTS',
    discipline: 'STANDOFF 2',
    foundedYear: '2026',
    kitEdition: 'RL7 WHITE PRO KIT // VARIANT B',
    scrimTelegramUsername: 'ecstazy322',
    scrimTelegramUrl: 'https://t.me/ecstazy322',
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
      radar: { aim: 96, entry: 98, clutch: 86, utility: 84, iq: 90 },
      proSettings: {
        device: 'iPhone 16 Pro Max // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Смартфон (Без гиро)',
        layoutEn: '4-Finger Claw // Smartphone (No Gyro)',
        sensitivity: '2.45',
        scopeSens: '1.80',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'M4A1', 'G22'],
        configCode: 'RL7-L1TEZ-IPHONE-SENS-2.45-SCOPE-1.80',
      },
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
      radar: { aim: 98, entry: 89, clutch: 93, utility: 85, iq: 94 },
      proSettings: {
        device: 'iPhone 15 Pro Max // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Точечный флик',
        layoutEn: '4-Finger Claw // Precision Flick',
        sensitivity: '2.10',
        scopeSens: '1.35',
        acceleration: '0.05',
        weapons: ['AWM', 'DEAGLE', 'USP'],
        configCode: 'RL7-SHARINGANOV-IPHONE-SENS-2.10-SCOPE-1.35',
      },
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
      radar: { aim: 92, entry: 84, clutch: 98, utility: 90, iq: 97 },
      proSettings: {
        device: 'ASUS ROG Phone 8 Pro (Android) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Микроконтроль',
        layoutEn: '4-Finger Claw // Micro-Control',
        sensitivity: '1.95',
        scopeSens: '1.65',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'VAL', 'USP'],
        configCode: 'RL7-MORPH-ANDROID-SENS-1.95-SCOPE-1.65',
      },
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
      radar: { aim: 90, entry: 86, clutch: 91, utility: 98, iq: 95 },
      proSettings: {
        device: 'iPhone 15 Pro // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Быстрая раскидка',
        layoutEn: '4-Finger Claw // Fast Utility',
        sensitivity: '2.20',
        scopeSens: '1.70',
        acceleration: '0.00 (OFF)',
        weapons: ['M4A1', 'AKR', 'FIVE-SEVEN'],
        configCode: 'RL7-HAKO-IPHONE-SENS-2.20-SCOPE-1.70',
      },
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
      radar: { aim: 96, entry: 93, clutch: 92, utility: 89, iq: 93 },
      proSettings: {
        device: 'RedMagic 9S Pro (Android) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Контроль зажима',
        layoutEn: '4-Finger Claw // Spray Control',
        sensitivity: '2.30',
        scopeSens: '1.75',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'M4', 'DEAGLE'],
        configCode: 'RL7-KARAT-ANDROID-SENS-2.30-SCOPE-1.75',
      },
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
      radar: { aim: 93, entry: 94, clutch: 90, utility: 91, iq: 94 },
      proSettings: {
        device: 'OnePlus 12 (Android) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Гибридный стиль',
        layoutEn: '4-Finger Claw // Hybrid Style',
        sensitivity: '2.35',
        scopeSens: '1.60',
        acceleration: '0.02',
        weapons: ['AKR', 'M4A1', 'AWM'],
        configCode: 'RL7-DELF1N-ANDROID-SENS-2.35-SCOPE-1.60',
      },
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-06',
      specTag: 'UNIT // RESERVE-06',
    },
  ] as PlayerProfile[],

  /**
   * ИНТЕРАКТИВНЫЙ MAP POOL STANDOFF 2 С РЕАЛЬНЫМИ КАРТАМИ И КООРДИНАТАМИ ИГРОКОВ НА РАДАРЕ
   */
  mapPool: [
    {
      id: 'sandstone',
      name: 'SANDSTONE',
      code: 'SO2-MAP // 01',
      minimapUrl: './assets/maps/sandstone-minimap.png',
      previewUrl: './assets/maps/sandstone-preview.png',
      tempoRu: 'ВЫСОКИЙ ТЕМП // КОНТРОЛЬ МИДА',
      tempoEn: 'HIGH TEMPO // MID CONTROL',
      styleRu:
        'Быстрый захват мида через снайперский пик sharinganov и синхронный сплит-выход на плент А через Апартаменты и Площадь под раскидку hako.',
      styleEn:
        'Early mid lockdown via sharinganov sniper pick followed by synchronized A-split executes through Apartments and Square.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: A-SPLIT (АПАРТАМЕНТЫ + ПЛОЩАДЬ)',
      signatureExecEn: 'SIGNATURE ROUND: APARTMENTS & SQUARE A-SPLIT',
      assignments: [
        {
          player: 'L1tez',
          number: '01',
          roleTag: 'ENTRY',
          ctPosRu: 'Апартаменты / Балкон А',
          ctPosEn: 'Apartments / A Balcony',
          tPosRu: 'Врыв на плент А из Апартаментов',
          tPosEn: 'First Entry A-Site from Apartments',
          ctX: 60,
          ctY: 20,
          tX: 66,
          tY: 22,
        },
        {
          player: 'sharinganov',
          number: '02',
          roleTag: 'SNIPER',
          ctPosRu: 'Спуск Мид / Снайперский пик',
          ctPosEn: 'Mid Stairs / Sniper Lockdown',
          tPosRu: 'Отстрел Мида от Переулка',
          tPosEn: 'Alley-to-Mid Sniper Pick',
          ctX: 59,
          ctY: 53,
          tX: 37,
          tY: 48,
        },
        {
          player: 'morph',
          number: '03',
          roleTag: 'LURKER',
          ctPosRu: 'Арка / Нижний Мид',
          ctPosEn: 'Arch / Lower Mid Cutoff',
          tPosRu: 'Люк через Длину под плент B',
          tPosEn: 'Deep Long Lurk to B-Site',
          ctX: 44,
          ctY: 60,
          tX: 45,
          tY: 82,
        },
        {
          player: 'hako',
          number: '04',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки B (Anchor)',
          ctPosEn: 'B-Site Hard Anchor',
          tPosRu: 'Раскидка гранат со Двора на А',
          tPosEn: 'Courtyard Execute Utility',
          ctX: 60,
          ctY: 79,
          tX: 50,
          tY: 26,
        },
        {
          player: 'karat',
          number: '07',
          roleTag: 'RIFLER',
          ctPosRu: 'Опорник точки A / Площадь',
          ctPosEn: 'A-Site / Square Rifler',
          tPosRu: 'Выход через Площадь (Трейд)',
          tPosEn: 'Square Trade Rifler',
          ctX: 73,
          ctY: 24,
          tX: 62,
          tY: 34,
        },
        {
          player: 'delf1n',
          number: '06',
          roleTag: '6TH SUB',
          ctPosRu: 'Развилка / Быстрая хелпа А-Мид',
          ctPosEn: 'Fork / Fast Mid-A Rotator',
          tPosRu: 'Прорыв через Переход на B',
          tPosEn: 'Passage Tempo Breaker',
          ctX: 70,
          ctY: 42,
          tX: 54,
          tY: 70,
        },
      ],
    },
    {
      id: 'province',
      name: 'PROVINCE',
      code: 'SO2-MAP // 02',
      minimapUrl: './assets/maps/province-minimap.png',
      previewUrl: './assets/maps/province-preview.png',
      tempoRu: 'ДИСТАНЦИОННЫЕ ДУЭЛИ // РЕТЕЙКИ',
      tempoEn: 'LONG-RANGE DUELS // RETAKES',
      styleRu:
        'Дисциплинированная игра на дальних дистанциях, контроль Лестницы, Длины и Погреба с акцентом на структурированные ретейки.',
      styleEn:
        'Disciplined long-angle holds across Stairs, Long, and Cellar with structured multi-man retakes.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: СПЛИТ B ЧЕРЕЗ ТОННЕЛЬ И РАЗВИЛКУ',
      signatureExecEn: 'SIGNATURE ROUND: TUNNEL & FORK B-SPLIT',
      assignments: [
        {
          player: 'L1tez',
          number: '01',
          roleTag: 'ENTRY',
          ctPosRu: 'Агрессивный приём Лестницы',
          ctPosEn: 'Aggressive Stairs Hold',
          tPosRu: 'Вскрытие плента B через Развилку',
          tPosEn: 'Fork-to-B Entry Spearhead',
          ctX: 31,
          ctY: 51,
          tX: 32,
          tY: 62,
        },
        {
          player: 'sharinganov',
          number: '02',
          roleTag: 'SNIPER',
          ctPosRu: 'Длина A с AWM',
          ctPosEn: 'Long A Sniper Lockdown',
          tPosRu: 'Отстрел Улицы и Мида',
          tPosEn: 'Outside-to-Mid Sniper Control',
          ctX: 80,
          ctY: 53,
          tX: 49,
          tY: 36,
        },
        {
          player: 'morph',
          number: '03',
          roleTag: 'LURKER',
          ctPosRu: 'Погреб / Скрытый приём',
          ctPosEn: 'Cellar Off-Angle Hold',
          tPosRu: 'Люк через Двор и Дом под А',
          tPosEn: 'Courtyard & House Flank Lurk',
          ctX: 45,
          ctY: 72,
          tX: 74,
          tY: 40,
        },
        {
          player: 'hako',
          number: '04',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки B',
          ctPosEn: 'B-Site Anchor & Smokes',
          tPosRu: 'Раскидка смоков из Тоннеля',
          tPosEn: 'Tunnel Execute Smokes',
          ctX: 31,
          ctY: 70,
          tX: 15,
          tY: 56,
        },
        {
          player: 'karat',
          number: '07',
          roleTag: 'RIFLER',
          ctPosRu: 'Опорник точки A',
          ctPosEn: 'A-Site Primary Rifler',
          tPosRu: 'Контроль Мида и Перекрёстка',
          tPosEn: 'Mid-to-Junction Rifler',
          ctX: 73,
          ctY: 78,
          tX: 50,
          tY: 50,
        },
        {
          player: 'delf1n',
          number: '06',
          roleTag: '6TH SUB',
          ctPosRu: 'Перекрёсток / Хелпа А и Б',
          ctPosEn: 'Junction Fast Rotator',
          tPosRu: 'Прорыв через Дом на Длину',
          tPosEn: 'House-to-Long Tempo Sub',
          ctX: 59,
          ctY: 68,
          tX: 66,
          tY: 48,
        },
      ],
    },
    {
      id: 'rust',
      name: 'RUST',
      code: 'SO2-MAP // 03',
      minimapUrl: './assets/maps/rust-minimap.png',
      previewUrl: './assets/maps/rust-preview.png',
      tempoRu: 'КОМАНДНЫЙ ТРЕЙД // БЛИЖНИЙ БОЙ',
      tempoEn: 'CLOSE-QUARTERS // FAST TRADES',
      styleRu:
        'Плотный контактный прессинг в узких коридорах, моментальные размены парой рифлеров L1tez + karat и жёсткая фиксация Мида.',
      styleEn:
        'High-intensity close-range pressure, instant rifle trading by L1tez + karat, and mid control.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: БЫСТРЫЙ ПРОРЫВ B ЧЕРЕЗ ДЛИНУ И АНГАР',
      signatureExecEn: 'SIGNATURE ROUND: FAST LONG & HANGAR B-RUSH',
      assignments: [
        {
          player: 'L1tez',
          number: '01',
          roleTag: 'ENTRY',
          ctPosRu: 'Первая линия Зигзаг A',
          ctPosEn: 'Zigzag A Frontline Contact',
          tPosRu: 'Врыв через Длину на плент B',
          tPosEn: 'Long-to-B Hard Entry',
          ctX: 51,
          ctY: 25,
          tX: 35,
          tY: 72,
        },
        {
          player: 'sharinganov',
          number: '02',
          roleTag: 'SNIPER',
          ctPosRu: 'Развилка / Прицел на Мид',
          ctPosEn: 'Fork-to-Mid AWM Lockdown',
          tPosRu: 'Отстрел Мида со Склада',
          tPosEn: 'Warehouse-to-Mid Sniper Pick',
          ctX: 40,
          ctY: 44,
          tX: 73,
          tY: 49,
        },
        {
          player: 'morph',
          number: '03',
          roleTag: 'LURKER',
          ctPosRu: 'Блок / Перехват центра',
          ctPosEn: 'Block Interior Lurker',
          tPosRu: 'Скрытый заход через Коридор и Мастерскую',
          tPosEn: 'Corridor & Workshop Lurk',
          ctX: 62,
          ctY: 39,
          tX: 80,
          tY: 34,
        },
        {
          player: 'hako',
          number: '04',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки B',
          ctPosEn: 'B-Site Hard Anchor',
          tPosRu: 'Раскидка гранат из Ангара',
          tPosEn: 'Hangar Execute Utility',
          ctX: 16,
          ctY: 73,
          tX: 55,
          tY: 75,
        },
        {
          player: 'karat',
          number: '07',
          roleTag: 'RIFLER',
          ctPosRu: 'Опорник точки A',
          ctPosEn: 'A-Site Star Rifler',
          tPosRu: 'Прорыв через Мид (Второй темп)',
          tPosEn: 'Mid Control & Trade Rifler',
          ctX: 64,
          ctY: 24,
          tX: 60,
          tY: 50,
        },
        {
          player: 'delf1n',
          number: '06',
          roleTag: '6TH SUB',
          ctPosRu: 'Аппаратная / Усиление B',
          ctPosEn: 'Control Room B-Support',
          tPosRu: 'Атака через Пристройку',
          tPosEn: 'Annex Tempo Breaker',
          ctX: 25,
          ctY: 51,
          tX: 51,
          tY: 64,
        },
      ],
    },
    {
      id: 'breeze',
      name: 'BREEZE',
      code: 'SO2-MAP // 04',
      minimapUrl: './assets/maps/breeze-minimap.png',
      previewUrl: './assets/maps/breeze-preview.png',
      tempoRu: 'ШИРОКИЕ СПЛИТЫ // КОНТРОЛЬ КАРТЫ',
      tempoEn: 'WIDE SPLITS // MAP CONTROL',
      styleRu:
        'Растягивание обороны соперника по всей ширине карты, снайперское доминирование на Развилке и синхронный дожим точки А.',
      styleEn:
        'Stretching defensive setups across wide lanes, sniper dominance at Fork, and surgical A-site crunches.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: ЗАХВАТ ДЛИНЫ И СПА С ВЫХОДОМ НА A',
      signatureExecEn: 'SIGNATURE ROUND: LONG & SPA PINCER TO A-SITE',
      assignments: [
        {
          player: 'L1tez',
          number: '01',
          roleTag: 'ENTRY',
          ctPosRu: 'Поджим Длины A',
          ctPosEn: 'Long A Early Aggression',
          tPosRu: 'Первый выход по Длине на A',
          tPosEn: 'Long A First Contact Entry',
          ctX: 47,
          ctY: 77,
          tX: 51,
          tY: 75,
        },
        {
          player: 'sharinganov',
          number: '02',
          roleTag: 'SNIPER',
          ctPosRu: 'Развилка / Контроль Мида',
          ctPosEn: 'Fork Sniper Overwatch',
          tPosRu: 'Снайперский контроль Мида',
          tPosEn: 'Mid Control AWPer',
          ctX: 60,
          ctY: 59,
          tX: 43,
          tY: 50,
        },
        {
          player: 'morph',
          number: '03',
          roleTag: 'LURKER',
          ctPosRu: 'Двор / Перехват под B',
          ctPosEn: 'Courtyard Cutoff Hold',
          tPosRu: 'Глубокий люрк через Магазин под B',
          tPosEn: 'Shop-to-B Deep Lurker',
          ctX: 50,
          ctY: 25,
          tX: 56,
          tY: 18,
        },
        {
          player: 'hako',
          number: '04',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки B',
          ctPosEn: 'B-Site Utility Anchor',
          tPosRu: 'Раскидка смоков от Ресторана',
          tPosEn: 'Restaurant Execute Smokes',
          ctX: 65,
          ctY: 23,
          tX: 34,
          tY: 75,
        },
        {
          player: 'karat',
          number: '07',
          roleTag: 'RIFLER',
          ctPosRu: 'Опорник точки A',
          ctPosEn: 'A-Site Primary Rifler',
          tPosRu: 'Прорыв через Спа на плент A',
          tPosEn: 'Spa-to-A Trade Rifler',
          ctX: 60,
          ctY: 73,
          tX: 47,
          tY: 66,
        },
        {
          player: 'delf1n',
          number: '06',
          roleTag: '6TH SUB',
          ctPosRu: 'Тупик / Ротация между точками',
          ctPosEn: 'Dead-End Fast Rotator',
          tPosRu: 'Темповый сплит через Музей',
          tPosEn: 'Museum Tempo Split Sub',
          ctX: 54,
          ctY: 40,
          tX: 43,
          tY: 30,
        },
      ],
    },
    {
      id: 'dune',
      name: 'DUNE',
      code: 'SO2-MAP // 05',
      minimapUrl: './assets/maps/dune-minimap.png',
      previewUrl: './assets/maps/dune-preview.png',
      tempoRu: 'ТАКТИЧЕСКАЯ ГЕОМЕТРИЯ // РОТАЦИИ',
      tempoEn: 'TACTICAL GEOMETRY // ROTATIONS',
      styleRu:
        'Глубокая работа с гранатами через Склад и Базар, фейковые раскидки для выманивания ротаций и жёсткая фиксация перетяжек.',
      styleEn:
        'Heavy utility layering across Warehouse and Bazaar, fake executes to force rotations, and cutoff lurks.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: ВЫХОД НА A ЧЕРЕЗ СКЛАД И БАЗАР',
      signatureExecEn: 'SIGNATURE ROUND: WAREHOUSE & BAZAAR A-EXECUTE',
      assignments: [
        {
          player: 'L1tez',
          number: '01',
          roleTag: 'ENTRY',
          ctPosRu: 'Встреча атаки на Базаре A',
          ctPosEn: 'Bazaar A Frontline Hold',
          tPosRu: 'Врыв на плент A со Склада',
          tPosEn: 'Warehouse-to-A First Entry',
          ctX: 83,
          ctY: 50,
          tX: 68,
          tY: 57,
        },
        {
          player: 'sharinganov',
          number: '02',
          roleTag: 'SNIPER',
          ctPosRu: 'Водосток / Снайперский контроль Мида',
          ctPosEn: 'Drain-to-Mid Sniper Lock',
          tPosRu: 'Отстрел Мида с центральной линии',
          tPosEn: 'Mid Overwatch AWPer',
          ctX: 39,
          ctY: 65,
          tX: 41,
          tY: 52,
        },
        {
          player: 'morph',
          number: '03',
          roleTag: 'LURKER',
          ctPosRu: 'Арабеска / Скрытый перехват',
          ctPosEn: 'Arabesque Lurker Hold',
          tPosRu: 'Тихий заход по Длине под B',
          tPosEn: 'Long B Solo Lurker',
          ctX: 52,
          ctY: 65,
          tX: 15,
          tY: 62,
        },
        {
          player: 'hako',
          number: '04',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки B',
          ctPosEn: 'B-Site Utility Lockdown',
          tPosRu: 'Раскидка гранат со Склада',
          tPosEn: 'Warehouse Execute Utility',
          ctX: 25,
          ctY: 72,
          tX: 59,
          tY: 50,
        },
        {
          player: 'karat',
          number: '07',
          roleTag: 'RIFLER',
          ctPosRu: 'Опорник точки A',
          ctPosEn: 'A-Site Primary Rifler',
          tPosRu: 'Зачистка Базара и выход на A',
          tPosEn: 'Bazaar Clear & Trade Rifler',
          ctX: 73,
          ctY: 63,
          tX: 83,
          tY: 50,
        },
        {
          player: 'delf1n',
          number: '06',
          roleTag: '6TH SUB',
          ctPosRu: 'Дворец / Быстрая ротация',
          ctPosEn: 'Palace Fast Rotator',
          tPosRu: 'Прорыв через Проход и Колодец',
          tPosEn: 'Well & Passage Tempo Sub',
          ctX: 59,
          ctY: 71,
          tX: 31,
          tY: 47,
        },
      ],
    },
  ] as TacticalMapInfo[],

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
      handle: '@ecstazy322 // OFFICIAL CONTACT',
      url: 'https://t.me/ecstazy322',
      statusRu: 'ОФИЦИАЛЬНЫЙ КОНТАКТ / ПРАКИ',
      statusEn: 'OFFICIAL CONTACT / SCRIMS',
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

  /**
   * ВЕРИФИЦИРОВАННЫЕ РЕЗУЛЬТАТЫ МАТЧЕЙ И ПРАКОВ (СО СКРИНШОТАМИ STANDOFF 2)
   */
  matchResults: [
    {
      id: 'match-hanami-13-0',
      code: 'MATCH LOG // 01',
      map: 'HANAMI',
      region: 'Россия, Москва',
      timeLabel: '23:39 MSK',
      rl7Score: 13,
      opponentScore: 0,
      opponentTag: '27z / FLCNS',
      opponentLineup: '[FLCNS] kyousuke, доки, [27z] santaxx, [27z] енкураж, [27z] джентору',
      isWin: true,
      rl7Side: 'T',
      badgeRu: '13:0 СУХАЯ ПОБЕДА',
      badgeEn: '13:0 SHUTOUT WIN',
      headlineRu: 'БЕЗУПРЕЧНЫЙ РАЗГРОМ 13:0 НА HANAMI',
      headlineEn: 'FLAWLESS 13:0 SHUTOUT ON HANAMI',
      summaryRu:
        'Тотальная доминация RED LIGHT 7 без единого отданного раунда: стремительный темп атаки, K/D 3.00+ у лидеров и идеальная реализация каждого выхода.',
      summaryEn:
        'Total domination by RED LIGHT 7 without dropping a single round: relentless T-side tempo and 3.00+ K/D across top fraggers.',
      screenshotUrl: './assets/results/match-hanami-13-0.jpg',
      mvpPlayer: 'L1tez & малыбка',
      mvpLineRu: '22 КИЛЛА (6★ MVP) + L1TEZ 15/5 (K/D 3.00)',
      mvpLineEn: '22 FRAGS (6★ MVP) + L1TEZ 15/5 (3.00 K/D)',
      scoreboard: [
        { nickname: '[RL7] малыбка ревнует', kills: 22, assists: 1, deaths: 10, score: 50, stars: 6, isMvp: true },
        { nickname: '[RL7] L1tez', kills: 15, assists: 2, deaths: 5, score: 34, stars: 3 },
        { nickname: '[RL7] morph', kills: 13, assists: 1, deaths: 4, score: 27, stars: 2 },
        { nickname: '[RL7] hako', kills: 9, assists: 1, deaths: 4, score: 24, stars: 2 },
        { nickname: '[RL7] KARAT', kills: 6, assists: 4, deaths: 9, score: 16, stars: 0 },
      ],
    },
    {
      id: 'match-province-13-12',
      code: 'MATCH LOG // 02',
      map: 'PROVINCE',
      region: 'Россия, Москва',
      timeLabel: '00:49 MSK',
      rl7Score: 13,
      opponentScore: 12,
      opponentTag: '[КРЫМ]',
      opponentLineup: '[КРЫМ] Crazyyy, [КРЫМ] Za1nyyy, [КРЫМ] zer1ks, [КРЫМ] TortyK, [КРЫМ] L1v4ik',
      isWin: true,
      rl7Side: 'CT',
      badgeRu: 'L1TEZ 30 КИЛЛОВ // КЛАТЧ 13:12',
      badgeEn: 'L1TEZ 30-BOMB // 13:12 CLUTCH',
      headlineRu: 'ПОБЕДА 13:12 В БИТВЕ ВСЕХ 25 РАУНДОВ ПРОТИВ [КРЫМ]',
      headlineEn: '13:12 FULL-DISTANCE VICTORY VS [КРЫМ] CLAN STACK',
      summaryRu:
        'Напряжённый 25-раундовый триллер на Province против полного стака [КРЫМ]. Энтри-фраггер L1tez оформил феноменальные 30 фрагов (64 очка), вытащив концовку за оборону.',
      summaryEn:
        'High-tension 25-round thriller on Province against the full [КРЫМ] stack. Entry fragger L1tez dropped a massive 30 kills (64 pts) to close out CT side.',
      screenshotUrl: './assets/results/match-province-13-12.jpg',
      mvpPlayer: 'L1tez',
      mvpLineRu: 'L1TEZ: 30 УБИЙСТВ / 17 СМЕРТЕЙ (64 ОЧКА, 4★ MVP)',
      mvpLineEn: 'L1TEZ: 30 KILLS / 17 DEATHS (64 SCORE, 4★ MVP)',
      scoreboard: [
        { nickname: '[RL7] L1tez', kills: 30, assists: 2, deaths: 17, score: 64, stars: 4, isMvp: true },
        { nickname: '[RL7] KARAT', kills: 19, assists: 7, deaths: 17, score: 57, stars: 4 },
        { nickname: '[RL7] hako', kills: 15, assists: 5, deaths: 16, score: 44, stars: 3 },
        { nickname: '[RL7] sharinganov', kills: 17, assists: 3, deaths: 19, score: 44, stars: 1 },
        { nickname: '[RL7] morph', kills: 8, assists: 3, deaths: 19, score: 19, stars: 1 },
      ],
    },
    {
      id: 'match-province-13-8',
      code: 'MATCH LOG // 03',
      map: 'PROVINCE',
      region: 'Россия, Москва',
      timeLabel: '22:42 MSK',
      rl7Score: 13,
      opponentScore: 8,
      opponentTag: '[3FORZ]',
      opponentLineup: '[3FORZ] Evil Cha..., [3FORZ] v9ine ki..., [222] давид мо..., [3FORZ] Fozi, [3FORZ] type Lo...',
      isWin: true,
      rl7Side: 'T',
      badgeRu: 'MORPH & KARAT ПО 25 КИЛЛОВ',
      badgeEn: 'MORPH & KARAT 25 FRAGS EACH',
      headlineRu: 'УВЕРЕННАЯ ПОБЕДА 13:8 НАД СТАКОМ [3FORZ]',
      headlineEn: 'DOMINANT 13:8 WIN OVER [3FORZ] STACK',
      summaryRu:
        'Дуэт morph (25/16, 61 очко) и KARAT (25/10, K/D 2.50!) суммарно оформил 50 фрагов и 10 звёзд MVP, полностью сломав экономику защиты соперника на Province.',
      summaryEn:
        'The duo of morph (25/16, 61 pts) and KARAT (25/10, 2.50 K/D!) combined for 50 kills and 10 MVP stars, dismantling the opponent defense on Province.',
      screenshotUrl: './assets/results/match-province-13-8.jpg',
      mvpPlayer: 'morph & KARAT',
      mvpLineRu: 'MORPH (25/16, 61 PTS) + KARAT (25/10, K/D 2.50)',
      mvpLineEn: 'MORPH (25/16, 61 PTS) + KARAT (25/10, 2.50 K/D)',
      scoreboard: [
        { nickname: '[RL7] morph', kills: 25, assists: 1, deaths: 16, score: 61, stars: 5, isMvp: true },
        { nickname: '[RL7] KARAT', kills: 25, assists: 1, deaths: 10, score: 53, stars: 5, isMvp: true },
        { nickname: '[RL7] L1tez', kills: 16, assists: 6, deaths: 18, score: 38, stars: 1 },
        { nickname: '[BOOST] funeral', kills: 12, assists: 3, deaths: 13, score: 33, stars: 0 },
        { nickname: '[RL7] hako', kills: 9, assists: 3, deaths: 16, score: 29, stars: 1 },
      ],
    },
    {
      id: 'match-hanami-13-9',
      code: 'MATCH LOG // 04',
      map: 'HANAMI',
      region: 'Россия, Москва',
      timeLabel: '22:48 MSK',
      rl7Score: 13,
      opponentScore: 9,
      opponentTag: 'FFT / Ctalk',
      opponentLineup: '[Ctalk] Arst TV, W1zordy, qp, [FFT] zeko, [FFT] Relaxer, [FUXP] qoekhanda',
      isWin: true,
      rl7Side: 'T',
      badgeRu: '85 КОМАНДНЫХ ФРАГОВ // РОТАЦИЯ С DELF1N',
      badgeEn: '85 TEAM FRAGS // FULL ROTATION',
      headlineRu: 'КОМАНДНАЯ ПОБЕДА 13:9 С ПОДКЛЮЧЕНИЕМ DELF1N',
      headlineEn: '13:9 TEAM VICTORY WITH DELF1N IN ACTIVE ROTATION',
      summaryRu:
        'Образцовый командный баланс: все 5 игроков RL7 (L1tez, morph, hako, KARAT и 6-й игрок delf1n) вышли в двузначные показатели киллов, набрав 85 фрагов на команду.',
      summaryEn:
        'Textbook balanced teamplay: all 5 RL7 players (L1tez, morph, hako, KARAT, and 6th man delf1n) hit double-digit kills for 85 total team frags.',
      screenshotUrl: './assets/results/match-hanami-13-9.jpg',
      mvpPlayer: 'L1tez & morph',
      mvpLineRu: 'L1TEZ (19/15, 51 PTS, 5★) + MORPH (21 КИЛЛ)',
      mvpLineEn: 'L1TEZ (19/15, 51 PTS, 5★) + MORPH (21 KILLS)',
      scoreboard: [
        { nickname: '[RL7] L1tez', kills: 19, assists: 6, deaths: 15, score: 51, stars: 5, isMvp: true },
        { nickname: '[RL7] morph', kills: 21, assists: 2, deaths: 15, score: 49, stars: 2 },
        { nickname: '[RL7] hako', kills: 17, assists: 4, deaths: 12, score: 44, stars: 4 },
        { nickname: '[RL7] KARAT 02', kills: 15, assists: 1, deaths: 17, score: 34, stars: 0 },
        { nickname: '[RL7] Delf1n', kills: 13, assists: 2, deaths: 17, score: 32, stars: 2 },
      ],
    },
    {
      id: 'match-rust-8-7',
      code: 'MATCH LOG // 05',
      map: 'RUST',
      region: 'Россия, Москва',
      timeLabel: '00:34 MSK',
      rl7Score: 8,
      opponentScore: 7,
      opponentTag: '[ETKN]',
      opponentLineup: 'harone, [ETKN] Toks1, [ETKN] KAISER, [xAtS] TikWell, [ETKN] Straiker',
      isWin: true,
      rl7Side: 'CT',
      badgeRu: 'ПОБЕДА 8:7 НА RUST // СВЯЗКА L1TEZ + MORPH',
      badgeEn: '8:7 RUST CLUTCH // L1TEZ + MORPH DUO',
      headlineRu: 'ВОЛЕВОЙ КЛАТЧ 8:7 ПРОТИВ [ETKN] НА КАРТЕ RUST',
      headlineEn: 'CLUTCH 8:7 VICTORY AGAINST [ETKN] ON RUST',
      summaryRu:
        'Жёсткая контактная рубка на Rust за сторону защиты (CT): L1tez (21/9, K/D 2.33) и morph (16/10) закрыли решающие раунды против стака [ETKN].',
      summaryEn:
        'Gritty close-quarters CT defense on Rust: L1tez (21/9, 2.33 K/D) and morph (16/10) locked down the deciding rounds against [ETKN].',
      screenshotUrl: './assets/results/match-rust-8-7.jpg',
      mvpPlayer: 'L1tez',
      mvpLineRu: 'L1TEZ: 21 УБИЙСТВО / 9 СМЕРТЕЙ (K/D 2.33, 51 ОЧКО)',
      mvpLineEn: 'L1TEZ: 21 KILLS / 9 DEATHS (2.33 K/D, 51 PTS)',
      scoreboard: [
        { nickname: '[RL7] L1tez', kills: 21, assists: 3, deaths: 9, score: 51, stars: 3, isMvp: true },
        { nickname: '[RL7] morph', kills: 16, assists: 4, deaths: 10, score: 41, stars: 2 },
        { nickname: '[RL7] KARAT', kills: 11, assists: 2, deaths: 10, score: 28, stars: 2 },
        { nickname: '[RL7] hako', kills: 7, assists: 2, deaths: 12, score: 18, stars: 1 },
        { nickname: '[RL7] Delf1n', kills: 4, assists: 4, deaths: 12, score: 12, stars: 0 },
      ],
    },
    {
      id: 'match-hanami-10-13',
      code: 'MATCH LOG // 06',
      map: 'HANAMI',
      region: 'Россия, Москва',
      timeLabel: '16:52 MSK',
      rl7Score: 10,
      opponentScore: 13,
      opponentTag: 'efpl / Yohji',
      opponentLineup: 'Yohji Yamamoto, Gard, [efpl] cardiN, [xd] brightest, pL',
      isWin: false,
      rl7Side: 'T',
      badgeRu: 'ПЛОТНЫЙ МАТЧ 10:13 // L1TEZ 22 КИЛЛА',
      badgeEn: 'CLOSE 10:13 MATCH // L1TEZ 22 KILLS',
      headlineRu: 'БОЕВОЙ МАТЧ 10:13 ОСНОВНОЙ ПЯТЁРКИ RL7 НА HANAMI',
      headlineEn: 'COMPETITIVE 10:13 CLASH ON HANAMI',
      summaryRu:
        'Упорная встреча стартовой пятёрки (L1tez, KARAT, morph, sharinganov, hako). L1tez стал лучшим по очкам на всём сервере (56 очков, 22/17 K/D).',
      summaryEn:
        'Hard-fought match by the starting five (L1tez, KARAT, morph, sharinganov, hako), with L1tez leading the entire server in score (56 pts, 22/17 K/D).',
      screenshotUrl: './assets/results/match-hanami-10-13.jpg',
      mvpPlayer: 'L1tez',
      mvpLineRu: 'L1TEZ: 22 КИЛЛА / 56 ОЧКОВ (ТОП-1 СЕРВЕРА)',
      mvpLineEn: 'L1TEZ: 22 KILLS / 56 PTS (#1 SERVER SCORE)',
      scoreboard: [
        { nickname: '[RL7] L1tez', kills: 22, assists: 3, deaths: 17, score: 56, stars: 3, isMvp: true },
        { nickname: '[RL7] KARAT 02', kills: 16, assists: 6, deaths: 16, score: 44, stars: 2 },
        { nickname: '[RL7] morph', kills: 12, assists: 7, deaths: 19, score: 33, stars: 2 },
        { nickname: '[RL7] sharinganov', kills: 15, assists: 0, deaths: 18, score: 30, stars: 2 },
        { nickname: '[RL7] hako', kills: 12, assists: 4, deaths: 18, score: 28, stars: 1 },
      ],
    },
  ] as MatchResultItem[],
};
