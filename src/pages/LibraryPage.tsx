import { ArrowRight, Bookmark, Heart, LayoutGrid, Search } from 'lucide-react';
import type { AppEntry, Section } from '../types/app';
import CatalogFilters from '../components/catalog/CatalogFilters';
import { useCatalog } from '../hooks/useCatalog';
import AppCard from '../components/catalog/AppCard';
import PageHeading from '../components/catalog/PageHeading';
import Hero from '../components/catalog/Hero';
import FeaturedApps from '../components/catalog/FeaturedApps';
type Props = {
  section: Section;
  apps: AppEntry[];
  saved: string[];
  toggle: (id: string) => void;
  onSelect: (app: AppEntry) => void;
  onCatalog: () => void;
};
export default function LibraryPage({ section, apps, saved, toggle, onSelect, onCatalog }: Props) {
  const { category, setCategory, query, setQuery, sort, setSort, filtered, resetFilters } =
    useCatalog(apps);
  return (
    <>
      <PageHeading section={section} />
      {section === 'Каталог' && (
        <>
          <Hero />
          <FeaturedApps apps={apps} onSelect={onSelect} />
        </>
      )}
      <section id="catalog" className="catalog">
        <div className="section-title catalog-title">
          <h2>
            {section === 'Избранное' ? <Bookmark size={21} /> : <LayoutGrid size={21} />}{' '}
            {section === 'Избранное' ? 'Избранные приложения' : 'Каталог приложений'}{' '}
            <span className="total">{filtered.length}</span>
          </h2>
          <span className="local-data">
            <span /> Локальные данные
          </span>
        </div>
        <CatalogFilters
          category={category}
          setCategory={setCategory}
          query={query}
          setQuery={setQuery}
          sort={sort}
          setSort={setSort}
        />
        <div className="app-grid">
          {filtered.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              isSaved={saved.includes(app.id)}
              onSelect={onSelect}
              onToggle={toggle}
            />
          ))}
        </div>
        {!filtered.length && (
          <div className="empty">
            <Search size={32} />
            <h3>
              {section === 'Избранное' && !saved.length
                ? 'Здесь будут ваши любимые'
                : 'Ничего не нашлось'}
            </h3>
            <p>
              {section === 'Избранное' && !saved.length
                ? 'Нажмите на закладку в карточке приложения.'
                : 'Попробуйте другое название или категорию.'}
            </p>
            <button
              className="dark-button"
              onClick={() => {
                resetFilters();
                if (!saved.length) onCatalog();
              }}
            >
              Вернуться к приложениям <ArrowRight size={15} />
            </button>
          </div>
        )}
        <div className="catalog-bottom">
          <span>
            Показано {filtered.length} из {apps.length} приложений
          </span>
          <span>
            Коллекция воспоминаний <Heart size={13} />
          </span>
        </div>
      </section>
    </>
  );
}
