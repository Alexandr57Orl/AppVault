import { Gamepad2, Grid2X2, LayoutGrid, Search, SlidersHorizontal, X } from 'lucide-react';

import { categories } from '../../constants/catalog';
import type { SortOrder } from '../../types/app';

type Props = {
  category: string;
  setCategory: (category: string) => void;
  query: string;
  setQuery: (query: string) => void;
  sort: SortOrder;
  setSort: (sort: SortOrder) => void;
};
export default function CatalogFilters({
  category,
  setCategory,
  query,
  setQuery,
  sort,
  setSort,
}: Props) {
  return (
    <>
      <div className="toolbar">
        <div className="search">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Найти то самое приложение…"
            aria-label="Поиск приложений"
          />
          {query && (
            <button
              className="icon-button"
              onClick={() => setQuery('')}
              aria-label="Очистить поиск"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <label className="sort">
          <SlidersHorizontal size={16} />
          <select
            aria-label="Сортировка"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOrder)}
          >
            <option value="popular">Популярные</option>
            <option value="recent">По году</option>
            <option value="name">По названию</option>
          </select>
        </label>
        <span className="grid-view" title="Сетка">
          <Grid2X2 size={18} />
        </span>
      </div>
      <div className="categories">
        {categories.map((item, i) => (
          <button
            key={item}
            className={category === item ? 'selected' : ''}
            onClick={() => setCategory(item)}
          >
            {i === 0 ? <LayoutGrid size={14} /> : i === 1 ? <Gamepad2 size={15} /> : null}
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
