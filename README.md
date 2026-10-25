# RED LIGHT 7 (RL7 ESPORTS) — Official Website

Официальный сайт киберспортивной организации **RED LIGHT 7 (RL7)** по дисциплине **Standoff 2**.
Спроектирован в эстетике швейцарского технического минимализма (Swiss Editorial Grid) со строгой трёхцветной палитрой (`#080808` Black, `#F5F5F5` White, `#E10616` Red Light Signal) и полной совместимостью с **GitHub Pages**.

---

## Состав команды (Standoff 2 Active Roster)
- **L1tez** (`#01`) — Основной состав
- **sharinganov** (`#02`) — Основной состав
- **morph** (`#03`) — Основной состав
- **hako** (`#04`) — Основной состав
- **karat** (`#07`) — Основной состав

---

## Архитектура и страницы сайта
Сайт построен на **React 18 + TypeScript + Vite** с маршрутизацией `HashRouter` для гарантированной работы всех отдельных страниц на GitHub Pages:
1. **`/` (`HomePage`)** — Главный экран с промо-постером команды в белой форме RL7, кратким обзором состава, превью формы и статусом матчей.
2. **`/roster` (`RosterPage`)** — Интерактивное досье каждого из 5 игроков и полная сетка карточек состава.
3. **`/matches` (`MatchesPage`)** — Турнирный центр в состоянии `UPCOMING MATCHES // TBA` и журнал достижений.
4. **`/jersey` (`JerseyPage`)** — Детальная презентация белой игровой джерси **RL7 White Pro Kit (Variant B)**, векторного логотипа и цветовой системы.
5. **`/about` (`AboutPage`)** — Манифест клуба и секция социальных сетей с векторными SVG-иконками.

---

## Как редактировать данные команды (без правки кода компонентов)
Все данные команды вынесены в единый конфигурационный файл:
`src/data/teamData.ts`

В этом файле вы можете в любой момент изменить:
- Никнеймы, игровые номера и фотографии игроков в массиве `TEAM_CONFIG.roster`
- Ссылки на официальные соцсети (Telegram, VK, YouTube, Discord, TikTok) в массиве `TEAM_CONFIG.socials` — достаточно вставить URL в поле `url: 'https://...'`, и карточка автоматически станет активной кнопкой
- Слоган и описание команды в блоке `TEAM_CONFIG.brand`

Локальные изображения хранятся в папке `public/assets/`:
- `public/assets/brand/rl7-logo.svg` — векторный логотип RL7
- `public/assets/hero/rl7-hero-team.png` — командный постер главного экрана
- `public/assets/jersey/rl7-white-jersey.png` — рендер белой игровой джерси (Вариант Б)
- `public/assets/players/` — силуэтные портреты игроков в форме RL7

---

## Локальный запуск и проверка

```bash
# 1. Установка зависимостей
npm install

# 2. Запуск режима разработки
npm run dev

# 3. Сборка production-версии (проверка TypeScript + Vite bundle)
npm run build

# 4. Локальный предпросмотр собранной версии
npm run preview
```

---

## Публикация на GitHub Pages

В проекте уже настроен `base: './'` в [`vite.config.ts`](./vite.config.ts) и автоматический GitHub Actions workflow в [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml). Благодаря относительным путям сайт будет корректно работать по любому адресу вида `https://USERNAME.github.io/REPOSITORY/` без необходимости вручную прописывать название репозитория.

### Пошаговая инструкция:
1. Репозиторий проекта: `https://github.com/Astra-org-so2/Red-Light-7.git`
2. В репозитории на GitHub откройте **Settings → Pages**.
3. В разделе **Build and deployment → Source** выберите **GitHub Actions**.
4. После завершения workflow во вкладке **Actions** ваш сайт будет автоматически опубликован и доступен по ссылке:
   `https://astra-org-so2.github.io/Red-Light-7/`
