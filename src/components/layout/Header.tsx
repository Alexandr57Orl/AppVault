import { ChevronRight, Menu, Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { AuthUser } from '../modals/Auth';
import type { Section } from '../../types/app';

type Props = {
  section: Section;
  onMenu: () => void;
  onAuth: () => void;
  user: AuthUser | null;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};
export default function Header({ section, onMenu, onAuth, user, theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled((current) => (current ? window.scrollY > 24 : window.scrollY > 64));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="breadcrumb">
        <button
          className="mobile-menu icon-button"
          aria-label="Открыть меню"
          onClick={() => onMenu()}
        >
          <Menu />
        </button>
        <span className="breadcrumb-parent">Библиотека</span>
        <ChevronRight className="breadcrumb-separator" size={14} />
        <strong>{section}</strong>
      </div>
      <div className="header-right">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <span className="demo-label">
          <span /> Демо-режим
        </span>
        <button
          className={user ? 'avatar' : 'auth-login'}
          onClick={onAuth}
          aria-label={user ? `Открыть профиль: ${user.name}` : 'Войти или зарегистрироваться'}
        >
          {user ? user.name.slice(0, 2).toUpperCase() : 'Войти'}
        </button>
      </div>
    </header>
  );
}
