import { ArrowRight, ShieldCheck } from 'lucide-react';

type Props = { onAbout: () => void };
export default function ArchiveNotice({ onAbout }: Props) {
  return (
    <div className="info-strip">
      <ShieldCheck size={23} />
      <div>
        <strong>Архив, в котором всё на своих местах</strong>
        <p>Это демоверсия: описания, оценки и версии — примеры. Файлы приложений не размещаются.</p>
      </div>
      <button onClick={() => onAbout()}>
        О проекте <ArrowRight size={16} />
      </button>
    </div>
  );
}
