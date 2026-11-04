import { ShieldCheck } from 'lucide-react';

import type { Section } from '../../types/app';

type Props = { section: Section };
export default function PageHeading({ section }: Props) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">ПРИЛОЖЕНИЯ ОСТАЮТСЯ. ИСТОРИИ ПРОДОЛЖАЮТСЯ.</div>
        <h1>
          {section === 'Избранное' ? 'Ваша маленькая коллекция' : 'Вне магазина. Внутри истории.'}
        </h1>
        <p>
          {section === 'Избранное'
            ? 'Приложения, к которым хочется вернуться.'
            : 'Знакомые приложения, которых больше нет в App Store. Собрали в одном месте.'}
        </p>
      </div>
      <span className="archive-badge">
        <ShieldCheck size={16} />
        Цифровой архив
      </span>
    </div>
  );
}
