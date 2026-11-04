import { useState } from 'react';

import type { AppEntry, SortOrder } from '../types/app';

export function useCatalog(apps: AppEntry[]) {
  const [category, setCategory] = useState('Все приложения');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortOrder>('popular');
  const filtered = apps
    .filter(
      (app) =>
        (category === 'Все приложения' || app.category === category) &&
        `${app.name} ${app.developer}`.toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      if (sort === 'recent') return Number(b.year) - Number(a.year);
      return Number(b.rating) - Number(a.rating);
    });
  function resetFilters() {
    setCategory('Все приложения');
    setQuery('');
  }
  return { category, setCategory, query, setQuery, sort, setSort, filtered, resetFilters };
}
