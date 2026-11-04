import { ShieldCheck } from 'lucide-react';

import type { Section } from '../../types/app';

type Props = { section: Section };
export default function PageHeading({ section }: Props) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">ПРИВЫЧНЫЕ СЕРВИСЫ. БОЛЬШЕ ВОЗМОЖНОСТЕЙ.</div>
        <h1>{section === 'Избранное' ? 'Ваша маленькая коллекция' : 'Ваши приложения. Ближе.'}</h1>
        <p>
          {section === 'Избранное'
            ? 'Приложения, к которым хочется вернуться.'
            : 'Приложения с ограниченной доступностью в России и знакомые сервисы в одном каталоге.'}
        </p>
      </div>
      <span className="archive-badge">
        <ShieldCheck size={16} />
        Цифровой архив
      </span>
    </div>
  );
}
