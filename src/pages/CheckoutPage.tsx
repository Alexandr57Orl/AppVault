import { ArrowLeft, ArrowRight, Check, CreditCard, Crown } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import type { Plan } from '../hooks/usePreferences';
import './checkout.css';

type Props = {
  plan: Exclude<Plan, 'free'>;
  onBack: () => void;
  onConfirm: (plan: Plan) => void;
};

export default function CheckoutPage({ plan, onBack, onConfirm }: Props) {
  const [complete, setComplete] = useState(false);
  const yearly = plan === 'yearly';
  const price = yearly ? '2 390 ₽' : '299 ₽';

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onConfirm(plan);
    setComplete(true);
  }

  if (complete) {
    return (
      <section className="checkout-success" aria-live="polite">
        <span className="checkout-icon">
          <Check size={30} />
        </span>
        <span className="pill">ВСЁ ГОТОВО</span>
        <h1>Ваша демо-подписка оформлена</h1>
        <p>
          Vault Plus {yearly ? 'на год' : 'на месяц'} выбран в этом браузере. Деньги не списывались,
          реквизиты не сохранялись и не отправлялись.
        </p>
        <button className="dark-button" onClick={onBack}>
          К подпискам <ArrowRight size={16} />
        </button>
      </section>
    );
  }

  return (
    <section className="checkout">
      <button className="checkout-back" onClick={onBack}>
        <ArrowLeft size={16} /> Все тарифы
      </button>
      <div className="checkout-heading">
        <span className="pill">APPVAULT MEMBERSHIP</span>
        <h1>Оформление подписки</h1>
        <p>Заполните реквизиты и подтвердите выбранный тариф.</p>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={submit}>
          <div className="checkout-demo">
            <CreditCard size={20} />
            <p>
              <strong>Демонстрационный режим</strong>
              <br />
              Используйте вымышленные реквизиты. Оплата не производится, данные формы не сохраняются
              и не отправляются.
            </p>
          </div>
          <fieldset>
            <legend>
              <span>01</span> Контактные данные
            </legend>
            <div className="checkout-fields">
              <label className="checkout-wide">
                Имя и фамилия
                <input
                  name="fullName"
                  autoComplete="off"
                  placeholder="Иван Петров"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <label className="checkout-wide">
                Электронная почта
                <input
                  name="email"
                  type="email"
                  autoComplete="off"
                  placeholder="ivan@example.com"
                  required
                  maxLength={254}
                />
                <small>Адрес для информации о подписке</small>
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <span>02</span> Платёжные реквизиты
            </legend>
            <div className="checkout-fields">
              <label className="checkout-wide">
                Номер тестовой карты
                <input
                  name="cardNumber"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="4242 4242 4242 4242"
                  pattern="[0-9 ]{13,23}"
                  title="Введите от 13 до 19 цифр, можно с пробелами"
                  required
                  maxLength={23}
                  onChange={(event) => {
                    const digits = event.target.value.replace(/\D/g, '').slice(0, 19);
                    event.target.value = digits.replace(/(.{4})/g, '$1 ').trim();
                    event.target.setCustomValidity(
                      digits.length >= 13 && digits.length <= 19 ? '' : 'Введите от 13 до 19 цифр',
                    );
                  }}
                />
              </label>
              <label>
                Срок действия
                <input
                  name="expiry"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="ММ/ГГ"
                  pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                  title="Укажите месяц и год в формате ММ/ГГ"
                  required
                  maxLength={5}
                  onChange={(event) => {
                    const digits = event.target.value.replace(/\D/g, '').slice(0, 4);
                    event.target.value =
                      digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
                    const month = Number(digits.slice(0, 2));
                    const year = 2000 + Number(digits.slice(2));
                    const now = new Date();
                    event.target.setCustomValidity(
                      digits.length === 4 && new Date(year, month) <= now
                        ? 'Срок действия карты истёк'
                        : '',
                    );
                  }}
                />
              </label>
              <label>
                CVC / CVV
                <input
                  name="cvc"
                  type="password"
                  inputMode="numeric"
                  autoComplete="off"
                  placeholder="•••"
                  pattern="[0-9]{3,4}"
                  title="3 или 4 цифры"
                  required
                  minLength={3}
                  maxLength={4}
                />
              </label>
              <label className="checkout-wide">
                Имя владельца
                <input
                  name="cardholder"
                  autoComplete="off"
                  placeholder="IVAN PETROV"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
            </div>
          </fieldset>
          <label className="checkout-consent">
            <input type="checkbox" required />{' '}
            <span>
              Подтверждаю выбор демо-подписки и понимаю, что реальная оплата не производится.
            </span>
          </label>
          <button type="submit" className="dark-button full-width">
            Оформить демо-подписку <ArrowRight size={17} />
          </button>
        </form>
        <aside className="checkout-summary" aria-label="Ваш заказ">
          <span className="checkout-icon">
            <Crown size={26} />
          </span>
          <span className="pill">ВАШ ВЫБОР</span>
          <h2>Vault Plus</h2>
          <p>{yearly ? 'Год открытий вместе с AppVault' : 'Больше возможностей для открытий'}</p>
          <ul>
            <li>
              <Check size={16} /> Весь каталог приложений
            </li>
            <li>
              <Check size={16} /> Демо-доступ к скачиваниям
            </li>
            <li>
              <Check size={16} /> {yearly ? '12 месяцев подписки' : '1 месяц подписки'}
            </li>
          </ul>
          <div className="checkout-total">
            <span>Стоимость тарифа</span>
            <strong>{price}</strong>
          </div>
          <div className="checkout-total">
            <span>Период</span>
            <strong>{yearly ? 'Год' : 'Месяц'}</strong>
          </div>
          {yearly && <div className="checkout-saving">Экономия 1 198 ₽ за год</div>}
          <div className="checkout-total checkout-due">
            <span>К оплате сейчас</span>
            <strong>0 ₽</strong>
          </div>
          <small>
            Демо-оформление без списаний и автоматического продления. Для реальной оплаты
            потребуется подключение платёжного сервиса.
          </small>
        </aside>
      </div>
    </section>
  );
}
