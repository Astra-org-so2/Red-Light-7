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
  roleTag: string;
  ctPosRu: string;
  ctPosEn: string;
  tPosRu: string;
  tPosEn: string;
}

export interface TacticalMapInfo {
  id: string;
  name: string;
  code: string;
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

/**
 * ЕДИНЫЙ КОНФИГУРАЦИОННЫЙ ФАЙЛ КОМАНДЫ RED LIGHT 7 (RL7)
 * Содержит 5 игроков основы (L1tez, sharinganov, morph, hako, karat)
 * и запасного игрока (delf1n), включая роли, радар скиллов, Pro-настройки SO2 и тактический Map Pool.
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
        device: 'iPad Pro 11" (M4) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Без гироскопа',
        layoutEn: '4-Finger Claw // No Gyro',
        sensitivity: '2.45',
        scopeSens: '1.80',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'M4A1', 'G22'],
        configCode: 'RL7-L1TEZ-SENS-2.45-SCOPE-1.80-ACC-0',
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
        device: 'iPad Pro 11" (M2) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Точечный флик',
        layoutEn: '4-Finger Claw // Precision Flick',
        sensitivity: '2.10',
        scopeSens: '1.35',
        acceleration: '0.05',
        weapons: ['AWM', 'DEAGLE', 'USP'],
        configCode: 'RL7-SHARINGANOV-SENS-2.10-SCOPE-1.35-ACC-0.05',
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
        device: 'iPad Pro 11" (M4) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '5 пальцев (Claw) // Микроконтроль',
        layoutEn: '5-Finger Claw // Micro-Control',
        sensitivity: '1.95',
        scopeSens: '1.65',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'VAL', 'USP'],
        configCode: 'RL7-MORPH-SENS-1.95-SCOPE-1.65-ACC-0',
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
        device: 'iPad Pro 11" (M2) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Быстрая раскидка',
        layoutEn: '4-Finger Claw // Fast Utility',
        sensitivity: '2.20',
        scopeSens: '1.70',
        acceleration: '0.00 (OFF)',
        weapons: ['M4A1', 'AKR', 'FIVE-SEVEN'],
        configCode: 'RL7-HAKO-SENS-2.20-SCOPE-1.70-ACC-0',
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
        device: 'iPad Pro 11" (M4) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Контроль зажима',
        layoutEn: '4-Finger Claw // Spray Control',
        sensitivity: '2.30',
        scopeSens: '1.75',
        acceleration: '0.00 (OFF)',
        weapons: ['AKR', 'M4', 'DEAGLE'],
        configCode: 'RL7-KARAT-SENS-2.30-SCOPE-1.75-ACC-0',
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
        device: 'iPad Pro 11" (M2) // 120Hz',
        fps: '120 FPS LOCKED',
        layoutRu: '4 пальца (Claw) // Гибридный стиль',
        layoutEn: '4-Finger Claw // Hybrid Style',
        sensitivity: '2.35',
        scopeSens: '1.60',
        acceleration: '0.02',
        weapons: ['AKR', 'M4A1', 'AWM'],
        configCode: 'RL7-DELF1N-SENS-2.35-SCOPE-1.60-ACC-0.02',
      },
      division: 'STANDOFF 2 // PRO DIVISION',
      portraitUrl: './assets/players/player-silhouette-2.png',
      countryCode: 'RL7-06',
      specTag: 'UNIT // RESERVE-06',
    },
  ] as PlayerProfile[],

  /**
   * ИНТЕРАКТИВНЫЙ MAP POOL STANDOFF 2 И РАССТАНОВКА ИГРОКОВ ПО ПОЗИЦИЯМ
   */
  mapPool: [
    {
      id: 'sandstone',
      name: 'SANDSTONE',
      code: 'SO2-MAP // 01',
      tempoRu: 'ВЫСОКИЙ ТЕМП // КОНТРОЛЬ МИДА',
      tempoEn: 'HIGH TEMPO // MID CONTROL',
      styleRu:
        'Быстрый захват мида через снайперский пик sharinganov и синхронный сплит-выход на плент А под раскидку hako.',
      styleEn:
        'Early mid lockdown via sharinganov sniper pick followed by synchronized A-split executes.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: A-SPLIT ЧЕРЕЗ МИД И КОВРЫ',
      signatureExecEn: 'SIGNATURE ROUND: MID-TO-APARTMENTS A-SPLIT',
      assignments: [
        {
          player: 'L1tez',
          roleTag: 'ENTRY',
          ctPosRu: 'Поджим Апартаментов / Балкон А',
          ctPosEn: 'Apartments Push / A Balcony',
          tPosRu: 'Первый выход на плент А / Ковры',
          tPosEn: 'First Entry A-Site / Apartments',
        },
        {
          player: 'sharinganov',
          roleTag: 'SNIPER',
          ctPosRu: 'Контроль Мида / Арка КТ',
          ctPosEn: 'Mid Window / CT Arch AWM',
          tPosRu: 'Отстрел перетяжки на Миде',
          tPosEn: 'Mid Cross Sniper Lockdown',
        },
        {
          player: 'morph',
          roleTag: 'LURKER',
          ctPosRu: 'Ротация Тёмка / Коннектор',
          ctPosEn: 'Underpass / Connector Lurker',
          tPosRu: 'Скрытый люрк под Б / Спина КТ',
          tPosEn: 'Late B-Tunnels Lurk & Cutoffs',
        },
        {
          player: 'hako',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник плента Б (Anchor)',
          ctPosEn: 'B-Site Hard Anchor & Utility',
          tPosRu: 'Раскидка смоков и флешек под А',
          tPosEn: 'Full Execute Utility Setups',
        },
        {
          player: 'karat',
          roleTag: 'RIFLER',
          ctPosRu: 'Хелпующий опорник А / Плент',
          ctPosEn: 'A-Site Star Rifler / Rotator',
          tPosRu: 'Размен за L1tez / Выход через Мид',
          tPosEn: 'Second-In Trade Fragger',
        },
        {
          player: 'delf1n',
          roleTag: '6TH SUB',
          ctPosRu: 'Агрессивный дабл-пик Мида (Ротация)',
          ctPosEn: 'Aggressive Mid Double-Peek Sub',
          tPosRu: 'Быстрый раш Б-туннеля (Смена темпа)',
          tPosEn: 'Fast B-Rush Tempo Shifter',
        },
      ],
    },
    {
      id: 'province',
      name: 'PROVINCE',
      code: 'SO2-MAP // 02',
      tempoRu: 'ДИСТАНЦИОННЫЕ ДУЭЛИ // РЕТЕЙКИ',
      tempoEn: 'LONG-RANGE DUELS // RETAKES',
      styleRu:
        'Дисциплинированная игра на дальних дистанциях, контроль замка и винных погребов с акцентом на структурированные ретейки.',
      styleEn:
        'Disciplined long-angle holds across Castle and Winery with structured multi-man retakes.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: КОНТРОЛЬ ЗАМКА И ВЫХОД НА Б',
      signatureExecEn: 'SIGNATURE ROUND: CASTLE CONTROL TO B-SITE',
      assignments: [
        {
          player: 'L1tez',
          roleTag: 'ENTRY',
          ctPosRu: 'Агрессивный контроль Ступеней А',
          ctPosEn: 'Aggressive A-Stairs Control',
          tPosRu: 'Вскрытие плента Б через Арку',
          tPosEn: 'B-Arch Entry Spearhead',
        },
        {
          player: 'sharinganov',
          roleTag: 'SNIPER',
          ctPosRu: 'Длинная линия А / Мост с AWM',
          ctPosEn: 'Long A / Bridge Sniper Hold',
          tPosRu: 'Вскрытие снайпера защиты на А',
          tPosEn: 'Opening Pick on Long Sightlines',
        },
        {
          player: 'morph',
          roleTag: 'LURKER',
          ctPosRu: 'Замок / Перехват перетяжек',
          ctPosEn: 'Castle Interior Cutoff',
          tPosRu: 'Фейк-активность на А и заход в спину',
          tPosEn: 'A-Side Fake Pressure & Flank',
        },
        {
          player: 'hako',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник точки Б / Удержание плента',
          ctPosEn: 'B-Site Anchor & Delay Smokes',
          tPosRu: 'Отрезающие смоки под выход на Б',
          tPosEn: 'CT-Spawn Cutoff Smokes',
        },
        {
          player: 'karat',
          roleTag: 'RIFLER',
          ctPosRu: 'Контроль Замка и хелпа на Б',
          ctPosEn: 'Castle-to-B Flex Rifler',
          tPosRu: 'Основной стрелок второго темпа',
          tPosEn: 'Mid-Range Trade & Post-Plant',
        },
        {
          player: 'delf1n',
          roleTag: '6TH SUB',
          ctPosRu: 'Усиление обороны Замка (Ротация)',
          ctPosEn: 'Castle Lockdown Specialist',
          tPosRu: 'Сплит-выход через Замок',
          tPosEn: 'Castle Split Entry Sub',
        },
      ],
    },
    {
      id: 'rust',
      name: 'RUST',
      code: 'SO2-MAP // 03',
      tempoRu: 'КОМАНДНЫЙ ТРЕЙД // БЛИЖНИЙ БОЙ',
      tempoEn: 'CLOSE-QUARTERS // FAST TRADES',
      styleRu:
        'Плотный контактный прессинг в узких коридорах, моментальные размены парой рифлеров L1tez + karat и жёсткая фиксация центра.',
      styleEn:
        'High-intensity close-range pressure, instant rifle trading by L1tez + karat, and mid-vent control.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: БЫСТРЫЙ ПРОРЫВ ЧЕРЕЗ МИД НА B',
      signatureExecEn: 'SIGNATURE ROUND: FAST MID-TO-B CRUSH',
      assignments: [
        {
          player: 'L1tez',
          roleTag: 'ENTRY',
          ctPosRu: 'Первая линия контакта на А',
          ctPosEn: 'Frontline A-Main Contact',
          tPosRu: 'Жёсткий врыв в плент под флешку',
          tPosEn: 'Flash-Assisted Hard Entry',
        },
        {
          player: 'sharinganov',
          roleTag: 'SNIPER',
          ctPosRu: 'Удержание длинного коридора А',
          ctPosEn: 'A-Long Angle Lockdown',
          tPosRu: 'Контроль отхода КТ после плента',
          tPosEn: 'Post-Plant Line Control',
        },
        {
          player: 'morph',
          roleTag: 'LURKER',
          ctPosRu: 'Скрытый приём в Коннекторе',
          ctPosEn: 'Connector Off-Angle Hold',
          tPosRu: 'Контроль спины и перехват ретейка',
          tPosEn: 'Lurk & Retake Denial',
        },
        {
          player: 'hako',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник закрытого плента Б',
          ctPosEn: 'B-Site Anchor & Молотов-тайминг',
          tPosRu: 'Моментальные поп-флешки под врыв',
          tPosEn: 'Pop-Flash & Smoke Support',
        },
        {
          player: 'karat',
          roleTag: 'RIFLER',
          ctPosRu: 'Центральный хелпующий рифлер',
          ctPosEn: 'Mid-Control Star Rifler',
          tPosRu: 'Парный выход и зачистка углов',
          tPosEn: 'Duo Entry & Angle Clearing',
        },
        {
          player: 'delf1n',
          roleTag: '6TH SUB',
          ctPosRu: 'Агрессивный анти-эко пуш (Ротация)',
          ctPosEn: 'Aggressive Anti-Eco Push Unit',
          tPosRu: 'Ускоренный контактный раунд',
          tPosEn: 'Zero-Utility Contact Speed Round',
        },
      ],
    },
    {
      id: 'breeze',
      name: 'BREEZE',
      code: 'SO2-MAP // 04',
      tempoRu: 'ШИРОКИЕ СПЛИТЫ // КОНТРОЛЬ КАРТЫ',
      tempoEn: 'WIDE SPLITS // MAP CONTROL',
      styleRu:
        'Растягивание обороны соперника по всей ширине карты, снайперское доминирование и хладнокровный розыгрыш большинства 5v4.',
      styleEn:
        'Stretching defensive setups across wide lanes, sniper dominance, and surgical 5v4 conversions.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: МЕДЛЕННЫЙ ДЕФОЛТ С ДОЖИМОМ А',
      signatureExecEn: 'SIGNATURE ROUND: DEFAULT MAP CONTROL TO A-CRUNCH',
      assignments: [
        {
          player: 'L1tez',
          roleTag: 'ENTRY',
          ctPosRu: 'Поджим фланга А',
          ctPosEn: 'A-Flank Early Info Gather',
          tPosRu: 'Вскрытие опорника на широком шаге',
          tPosEn: 'Wide-Swing Entry Duelist',
        },
        {
          player: 'sharinganov',
          roleTag: 'SNIPER',
          ctPosRu: 'Свободный снайпер по всей карте',
          ctPosEn: 'Mobile Roaming AWPer',
          tPosRu: 'Поиск первого фрага на Миде',
          tPosEn: 'Mid Opening Pick Hunter',
        },
        {
          player: 'morph',
          roleTag: 'LURKER',
          ctPosRu: 'Удержание дальнего края Б',
          ctPosEn: 'B-Extremity Solo Hold',
          tPosRu: 'Глубокий люрк на противоположном пленте',
          tPosEn: 'Opposite-Site Deep Lurk',
        },
        {
          player: 'hako',
          roleTag: 'SUPPORT',
          ctPosRu: 'Опорник со смоками на Б',
          ctPosEn: 'B-Site Utility Anchor',
          tPosRu: 'Стена смоков для безопасного плента',
          tPosEn: 'Smoke Wall Plant Setup',
        },
        {
          player: 'karat',
          roleTag: 'RIFLER',
          ctPosRu: 'Основной стрелок на точке А',
          ctPosEn: 'A-Site Primary Rifle Hold',
          tPosRu: 'Контроль ключевых углов при выходе',
          tPosEn: 'Multi-Kill Site Clearer',
        },
        {
          player: 'delf1n',
          roleTag: '6TH SUB',
          ctPosRu: 'Смена позиции снайпера / Второй AWM',
          ctPosEn: 'Secondary Double-AWM Setup',
          tPosRu: 'Резкий темповый выход без раскидки',
          tPosEn: 'Surprise Tempo Execute',
        },
      ],
    },
    {
      id: 'dune',
      name: 'DUNE',
      code: 'SO2-MAP // 05',
      tempoRu: 'ТАКТИЧЕСКАЯ ГЕОМЕТРИЯ // РОТАЦИИ',
      tempoEn: 'TACTICAL GEOMETRY // ROTATIONS',
      styleRu:
        'Глубокая работа с гранатами, фейковые раскидки для выманивания ротаций и жёсткая фиксация перетяжек через morph.',
      styleEn:
        'Heavy utility layering, fake executes to force rotations, and ruthless cutoff lurks by morph.',
      signatureExecRu: 'ФИРМЕННЫЙ РАУНД: ФЕЙК-РАСКИДКА B С ПЕРЕВОДОМ НА A',
      signatureExecEn: 'SIGNATURE ROUND: B-FAKE UTILITY INTO FAST A-HIT',
      assignments: [
        {
          player: 'L1tez',
          roleTag: 'ENTRY',
          ctPosRu: 'Встреча атаки в ближней зоне А',
          ctPosEn: 'Close A-Chokepoint Hold',
          tPosRu: 'Прорыв через дым на первой секунде',
          tPosEn: 'Smoke-Break First Contact',
        },
        {
          player: 'sharinganov',
          roleTag: 'SNIPER',
          ctPosRu: 'Отстрел центральной линии с AWM',
          ctPosEn: 'Central Corridor Sniper Lock',
          tPosRu: 'Прикрытие выхода с дальней дистанции',
          tPosEn: 'Overwatch Sniper Cover',
        },
        {
          player: 'morph',
          roleTag: 'LURKER',
          ctPosRu: 'Чтение темпа в центральной зоне',
          ctPosEn: 'Mid-Map Info & Flank Read',
          tPosRu: 'Соло-выход в освобождённый плент',
          tPosEn: 'Solo Anchor Exploit Lurker',
        },
        {
          player: 'hako',
          roleTag: 'SUPPORT',
          ctPosRu: 'Цементирование точки Б гранатами',
          ctPosEn: 'B-Site Utility Lockdown',
          tPosRu: 'Координация фейк-гранат',
          tPosEn: 'Fake-Execute Utility Layering',
        },
        {
          player: 'karat',
          roleTag: 'RIFLER',
          ctPosRu: 'Универсальный опорник ротации',
          ctPosEn: 'Fast-Rotate Rifle Support',
          tPosRu: 'Дочистка плента и клатч-позиции',
          tPosEn: 'Site Cleanup & Post-Plant Anchor',
        },
        {
          player: 'delf1n',
          roleTag: '6TH SUB',
          ctPosRu: 'Нестандартный поджим мида (Ротация)',
          ctPosEn: 'Unorthodox Mid-Push Specialist',
          tPosRu: 'Острие атаки при смене тактики',
          tPosEn: 'Mid-Series Tactical Switch',
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
};
