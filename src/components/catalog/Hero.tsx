import { ArrowRight, Sparkles } from 'lucide-react';
import BrandIcon, { heroBrands } from './BrandIcon';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-tag">
          <Sparkles size={13} /> ПРИЛОЖЕНИЯ БЕЗ ГРАНИЦ
        </span>
        <h2>
          Привычные приложения.
          <br />
          Даже если их нет
          <br />в вашем магазине.
        </h2>
        <p>
          Каталог с фокусом на приложения, недоступные в России.
          <br />
          Общение, видео и сервисы — всё в одном месте.
        </p>
        <button
          className="dark-button"
          onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Смотреть приложения <ArrowRight size={16} />
        </button>
        <div className="hero-foot">
          <span>Знакомые сервисы. Новые возможности.</span>
        </div>
        <ul className="hero-brands" aria-label="Знакомые сервисы">
          {heroBrands.map(({ id, name }) => (
            <li key={id}>
              <span className={`brand-icon brand-${id}`}>
                <BrandIcon brand={id} />
              </span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="float-icon float-weather brand-icon brand-rutube">
          <BrandIcon brand="rutube" />
        </div>
        <div className="float-icon float-bird brand-icon brand-vk">
          <BrandIcon brand="vk" />
        </div>
        <div className="float-icon float-camera brand-icon brand-rustore">
          <BrandIcon brand="rustore" />
        </div>
        <div className="float-icon float-game brand-icon brand-max">
          <BrandIcon brand="max" />
        </div>
        <div className="float-icon float-bank-sber brand-icon brand-sberbank">
          <BrandIcon brand="sberbank" />
        </div>
        <div className="float-icon float-bank-vtb brand-icon brand-vtb">
          <BrandIcon brand="vtb" />
        </div>
        <div className="art-label">
          <span /> Ближе к привычным приложениям.
        </div>
        <span className="spark spark-one">✳</span>
        <span className="spark spark-two">✧</span>
      </div>
    </section>
  );
}
