import { Bookmark, Check, Info, Crown, Download } from 'lucide-react';

import type { AppEntry } from '../../types/app';

type Props = {
  app: AppEntry;
  isSaved: boolean;
  onToggle: (id: string) => void;
  hasSubscription: boolean;
  onSubscribe: () => void;
};
export default function AppDetails({
  app,
  isSaved,
  onToggle,
  hasSubscription,
  onSubscribe,
}: Props) {
  return (
    <>
      <div className="app-icon modal-icon" style={{ background: app.color }}>
        {app.icon}
      </div>
      <span className="eyebrow">ИЗ АРХИВА APPVAULT</span>
      <h2 id="modal-title">{app.name}</h2>
      <p className="modal-developer">
        {app.developer} · {app.category}
      </p>
      <p>{app.description}</p>
      <div className="detail-grid">
        <div>
          <span>Версия</span>
          <strong>{app.version}</strong>
        </div>
        <div>
          <span>Размер</span>
          <strong>{app.size}</strong>
        </div>
        <div>
          <span>Год архива</span>
          <strong>{app.year}</strong>
        </div>
        <div>
          <span>Оценка (мок)</span>
          <strong>★ {app.rating}</strong>
        </div>
      </div>
      <div className="modal-notice">
        <Info size={18} />
        <span>
          Демонстрационная карточка. Для скачивания нужны подписка Plus и подключённый установочный
          файл.
        </span>
      </div>
      <div className="download-panel">
        {!hasSubscription ? (
          <button className="dark-button full-width" onClick={onSubscribe}>
            <Crown size={17} />
            Скачивать с Vault Plus
          </button>
        ) : app.downloadUrl ? (
          <a className="dark-button full-width" href={app.downloadUrl} download>
            <Download size={17} />
            Скачать приложение
          </a>
        ) : (
          <>
            <button className="dark-button full-width" disabled>
              <Download size={17} />
              Файл пока недоступен
            </button>
            <p>Демо-тариф Plus выбран. Установочный файл ещё не добавлен.</p>
          </>
        )}
      </div>
      <button className="dark-button full-width" onClick={() => onToggle(app.id)}>
        {isSaved ? <Check size={17} /> : <Bookmark size={17} />}{' '}
        {isSaved ? 'В избранном · убрать' : 'Сохранить в избранное'}
      </button>
    </>
  );
}
