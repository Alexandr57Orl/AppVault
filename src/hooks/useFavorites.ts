import { useEffect, useState } from 'react';

const STORAGE_KEY = 'appvault-saved';
function readFavorites(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}
export function useFavorites() {
  const [saved, setSaved] = useState<string[]>(readFavorites);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    } catch {
      /* Избранное работает в памяти, если хранилище браузера недоступно. */
    }
  }, [saved]);
  function toggle(id: string) {
    setSaved((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }
  return { saved, toggle };
}
