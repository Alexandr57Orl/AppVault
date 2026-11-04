export type AppEntry = {
  id: string;
  name: string;
  developer: string;
  category: string;
  icon: string;
  color: string;
  description: string;
  version: string;
  size: string;
  year: string;
  rating: string;
  featured?: boolean;
  downloadUrl?: string;
};
export type Section = 'Каталог' | 'Избранное' | 'Подписки';
export type SortOrder = 'popular' | 'recent' | 'name';
