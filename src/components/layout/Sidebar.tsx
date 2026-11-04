import { Archive, ArrowRight, Bookmark, Compass, Crown, Heart, Info, X } from 'lucide-react';

import type { Section } from '../../types/app';
import type { Plan } from '../../hooks/usePreferences';

type Props = {
  section: Section;
  mobile: boolean;
  savedCount: number;
  catalogCount: number;
  plan: Plan;
  navigate: (section: Section) => void;
  onClose: () => void;
  onAbout: () => void;
};
export default function Sidebar({
  section,
  mobile,
  savedCount,
  catalogCount,
  plan,
  navigate,
  onClose,
  onAbout,
}: Props) {
  return (
    <aside className={`sidebar ${mobile ? 'open' : ''}`}>
      <a
        className="brand"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('Каталог');
        }}
      >
        <span className="brand-icon">
          <Archive size={23} />
        </span>
        AppVault<span className="brand-dot">.</span>
      </a>
      <button
        className="mobile-close icon-button"
        aria-label="Закрыть меню"
        onClick={() => onClose()}
      >
        <X />
      </button>
      <div className="nav-caption">ВАША КОЛЛЕКЦИЯ</div>
      <nav>
        {(
          [
            ['Каталог', Compass],
            ['Избранное', Bookmark],
            ['Подписки', Crown],
          ] as const
        ).map(([name, Icon]) => {
          return (
            <button
              key={name}
              className={`nav-item ${section === name ? 'active' : ''}`}
              onClick={() => navigate(name)}
            >
              <Icon size={19} />
              {name}
              {name === 'Избранное' && <span className="count">{savedCount}</span>}
            </button>
          );
        })}
        <button className="nav-item" onClick={() => onAbout()}>
          <Info size={19} />О проекте
          <ArrowRight size={15} className="nav-arrow" />
        </button>
      </nav>
      <div className="sidebar-content">
        <section className="sidebar-collection" aria-labelledby="collection-title">
          <div className="sidebar-block-heading">
            <span id="collection-title">ВАШ АРХИВ</span>
            <Archive size={14} />
          </div>
          <div className="sidebar-stats">
            <button onClick={() => navigate('Каталог')}>
              <strong>{catalogCount}</strong>
              <span>в каталоге</span>
            </button>
            <button onClick={() => navigate('Избранное')}>
              <strong>{savedCount}</strong>
              <span>сохранено</span>
            </button>
          </div>
          <p>
            {savedCount
              ? 'Любимые приложения всегда под рукой.'
              : 'Нажмите на закладку у приложения, чтобы начать коллекцию.'}
          </p>
        </section>
        <section className="sidebar-plan" aria-labelledby="sidebar-plan-title">
          <span className="sidebar-plan-icon">
            <Crown size={20} />
          </span>
          <span className="sidebar-plan-label">ДЕМО-ТАРИФ</span>
          <h3 id="sidebar-plan-title">
            {plan === 'free' ? 'Explorer' : plan === 'yearly' ? 'Vault Plus · год' : 'Vault Plus'}
          </h3>
          <p>
            {plan === 'free'
              ? 'Откройте больше возможностей вашей коллекции.'
              : 'Демо-доступ Plus включён. Исследуйте коллекцию.'}
          </p>
          <button onClick={() => navigate('Подписки')}>
            {plan === 'free' ? 'Открыть Vault Plus' : 'Управлять тарифом'}
            <ArrowRight size={15} />
          </button>
        </section>
      </div>
      <div className="sidebar-note">
        <div className="note-symbol">
          <Archive size={21} />
        </div>
        <strong>Хорошее не исчезает</strong>
        <p>Сохраняем историю приложений, которые мы любим.</p>
        <span>
          Сделано из любви к приложениям <Heart size={12} />
        </span>
      </div>
      <div className="sidebar-bottom">
        <span className="status-dot" /> Локальная демоверсия <span>v1.0</span>
      </div>
    </aside>
  );
}
