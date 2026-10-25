import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './data/teamData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { RosterPage } from './pages/RosterPage';
import { MatchesPage } from './pages/MatchesPage';
import { JerseyPage } from './pages/JerseyPage';
import { AboutPage } from './pages/AboutPage';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  // По умолчанию русский язык с международными киберспортивными заголовками
  const [lang, setLang] = useState<Language>('ru');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header lang={lang} onToggleLang={toggleLanguage} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/roster" element={<RosterPage lang={lang} />} />
            <Route path="/matches" element={<MatchesPage lang={lang} />} />
            <Route path="/jersey" element={<JerseyPage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="*" element={<HomePage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </HashRouter>
  );
};

export default App;
