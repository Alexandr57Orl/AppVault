import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <span>
        <strong>AppVault.</strong> Сохраняем то, что любим.
      </span>
      <span>Независимый проект · Не связан с Apple</span>
      <span>
        Сделано с <Heart size={12} />
      </span>
    </footer>
  );
}
