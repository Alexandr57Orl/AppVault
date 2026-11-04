import { ChevronRight, Menu, Moon, Sun } from 'lucide-react';

import type { Section } from '../../types/app';

type Props = {
  section: Section;
  onMenu: () => void;
  onAbout: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
};
export default function Header({ section, onMenu, onAbout, theme, onToggleTheme }: Props) {
  return (
    <header>
      <div className="breadcrumb">
        <button
          className="mobile-menu icon-button"
          aria-label="Открыть меню"
          onClick={() => onMenu()}
        >
          <Menu />
        </button>
        <span>Библиотека</span>
        <ChevronRight size={14} />
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
        <button className="avatar" onClick={() => onAbout()} aria-label="О демоверсии">
          AV
        </button>
      </div>
    </header>
  );
}
