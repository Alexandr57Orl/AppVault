import { Archive, ArrowRight, Info } from 'lucide-react';

type Props = { onClose: () => void };
export default function AboutProject({ onClose }: Props) {
  return (
    <>
      <div className="about-icon">
        <Archive size={32} />
      </div>
      <h2 id="modal-title">Приложения остаются.</h2>
      <p>AppVault — концепт цифрового архива приложений, которые стали частью нашей истории.</p>
      <p>
        Каталог работает на локальных моковых данных. Поиск и фильтры помогают исследовать
        коллекцию, а избранное, тема и выбранный демо-тариф сохраняются в этом браузере. В разделе
        подписок можно попробовать переключение тарифов без оплаты.
      </p>
      <div className="modal-notice">
        <Info size={19} />
        <span>
          Доступность приложений в App Store не проверяется. Реальные установочные файлы и ссылки на
          скачивание отсутствуют. Проект не связан с Apple и разработчиками приложений.
        </span>
      </div>
      <button className="dark-button full-width" onClick={() => onClose()}>
        Исследовать коллекцию <ArrowRight size={16} />
      </button>
    </>
  );
}
