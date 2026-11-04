import { ArrowRight, Check, Crown, Download, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { Plan } from '../hooks/usePreferences';

type Props = { plan: Plan; onChange: (plan: Plan) => void; onCatalog: () => void };
const plans = [
  {
    id: 'free',
    name: 'Explorer',
    price: '0 ₽',
    period: 'навсегда',
    description: 'Начните свою коллекцию',
    features: ['Весь каталог приложений', 'Поиск и подборки', 'Избранное в вашем браузере'],
  },
  {
    id: 'plus',
    name: 'Vault Plus',
    price: '299 ₽',
    period: 'в месяц',
    description: 'Больше возможностей для открытий',
    features: ['Всё из Explorer', 'Доступ к скачиванию файлов', 'Вся коллекция в одной подписке'],
  },
  {
    id: 'yearly',
    name: 'Vault Plus · год',
    price: '2 390 ₽',
    period: 'в год · ≈ 199 ₽/мес.',
    description: 'Для тех, кто остаётся надолго',
    features: ['Все возможности Vault Plus', '12 месяцев доступа', 'Экономия 1 198 ₽ за год'],
  },
] as const;

export default function SubscriptionsPage({ plan, onChange, onCatalog }: Props) {
  const [message, setMessage] = useState('');
  return (
    <section className="subscriptions">
      <div className="subscription-heading">
        <span className="pill">
          <Sparkles size={14} /> APPVAULT MEMBERSHIP
        </span>
        <h1>
          Любимые приложения.
          <br />
          <span>Ещё ближе с Plus.</span>
        </h1>
        <p>Выберите свой способ исследовать цифровой архив.</p>
      </div>
      <div className="subscription-demo">
        <Sparkles size={19} />
        <span>
          <strong>Предпросмотр подписок</strong> — цены демонстрационные. Выбор тарифа сохраняется
          только в этом браузере, оплата не производится. Установочные файлы пока не подключены.
        </span>
      </div>
      <div className="plans-grid">
        {plans.map((item) => (
          <article
            key={item.id}
            className={`plan-card ${item.id === 'plus' ? 'recommended' : ''} ${plan === item.id ? 'selected' : ''}`}
          >
            {item.id === 'plus' && <span className="plan-ribbon">САМЫЙ ПОПУЛЯРНЫЙ</span>}
            <div className="plan-symbol">{item.id === 'free' ? <Sparkles /> : <Crown />}</div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <div className="plan-price">{item.price}</div>
            <span className="plan-period">{item.period}</span>
            <ul>
              {item.features.map((feature) => (
                <li key={feature}>
                  <Check size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="dark-button full-width"
              disabled={plan === item.id}
              onClick={() => {
                onChange(item.id);
                setMessage(`Демо-тариф ${item.name} выбран. Оплата не производилась.`);
              }}
            >
              {plan === item.id ? (
                <>
                  <Check size={16} />
                  Текущий демо-тариф
                </>
              ) : (
                <>
                  Попробовать в демо
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </article>
        ))}
      </div>
      <p role="status" className="subscription-status">
        {message}
      </p>
      <div className="subscription-next">
        <Download size={24} />
        <div>
          <h2>Ваша следующая находка уже в каталоге</h2>
          <p>Откройте карточку приложения, чтобы узнать о доступности файла.</p>
        </div>
        <button className="dark-button" onClick={onCatalog}>
          В каталог
          <ArrowRight size={16} />
        </button>
      </div>
      <details className="subscription-faq">
        <summary>Как будут работать подписка и скачивания?</summary>
        <p>
          В этой версии показан сценарий выбора тарифа. Для запуска нужны платёжный сервис, учётные
          записи и проверка подписки на сервере. После подключения файлов скачивание будет доступно
          участникам Plus. Смена демо-тарифа на Explorer сбрасывает локальный доступ.
        </p>
      </details>
    </section>
  );
}
