import { ArrowRight, Bookmark, Star } from 'lucide-react';

import type { AppEntry } from '../../types/app';

type Props = {
  app: AppEntry;
  isSaved: boolean;
  onSelect: (app: AppEntry) => void;
  onToggle: (id: string) => void;
};
export default function AppCard({ app, isSaved, onSelect, onToggle }: Props) {
  return (
    <article className="app-card">
      <div className="card-top">
        <button
          className="app-icon icon-link"
          style={{ background: app.color }}
          onClick={() => onSelect(app)}
          aria-label={`Открыть ${app.name}`}
        >
          {app.icon}
        </button>
        <button
          className={`save-button ${isSaved ? 'saved' : ''}`}
          onClick={() => onToggle(app.id)}
          aria-label={`${isSaved ? 'Убрать из избранного' : 'Добавить в избранное'}: ${app.name}`}
          aria-pressed={isSaved}
        >
          <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <button className="app-name" onClick={() => onSelect(app)}>
        {app.name}
      </button>
      <span className="developer">{app.developer}</span>
      <p className="description">{app.description}</p>
      <div className="card-meta">
        <span className="category-label">{app.category}</span>
        <span
          className="card-rating"
          aria-label={app.rating === '—' ? 'Нет оценки' : `Оценка ${app.rating} из 5`}
        >
          <Star size={15} fill="currentColor" /> {app.rating}
        </span>
      </div>
      <div className="card-bottom">
        <span>
          {app.version === '—' ? 'Версия не указана' : `v${app.version}`}
          <i>·</i>
          {app.size}
        </span>
        <button onClick={() => onSelect(app)}>
          Подробнее <ArrowRight size={13} />
        </button>
      </div>
    </article>
  );
}
