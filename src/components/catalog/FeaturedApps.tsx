import { ArrowRight, Sparkles } from 'lucide-react';

import type { AppEntry } from '../../types/app';

type Props = { apps: AppEntry[]; onSelect: (app: AppEntry) => void };
export default function FeaturedApps({ apps, onSelect }: Props) {
  return (
    <section className="featured">
      <div className="section-title">
        <h2>
          <Sparkles size={18} /> Помните эти?
        </h2>
        <span>Знакомство с классикой</span>
      </div>
      <div className="featured-grid">
        {apps
          .filter((a) => a.featured)
          .map((app, i) => (
            <button
              className={`featured-card feature-${i}`}
              key={app.id}
              onClick={() => onSelect(app)}
            >
              <div className="app-icon" style={{ background: app.color }}>
                {app.icon}
              </div>
              <div>
                <span className="feature-caption">
                  {['ЕЩЁ ОДНА ПОПЫТКА', 'ПОГОДА С ХАРАКТЕРОМ', 'ЛЕГЕНДА В КАРМАНЕ'][i]}
                </span>
                <h3>{app.name}</h3>
                <p>
                  {app.category} <span>·</span> {app.year}
                </p>
              </div>
              <ArrowRight size={18} />
            </button>
          ))}
      </div>
    </section>
  );
}
