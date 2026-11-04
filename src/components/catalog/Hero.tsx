import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-tag">
          <Sparkles size={13} /> ВСПОМНИТЬ ВСЁ
        </span>
        <h2>
          Некоторые приложения
          <br />
          слишком хороши,
          <br />
          чтобы их забывать.
        </h2>
        <p>
          Маленькие иконы большой эпохи.
          <br />
          Откройте для себя знакомое заново.
        </p>
        <button
          className="dark-button"
          onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Исследовать архив <ArrowRight size={16} />
        </button>
        <div className="hero-foot">
          <span className="mini-stack">
            <i>◉</i>
            <i>♫</i>
            <i>🐤</i>
          </span>
          <span>Ваши любимые. Всё ещё здесь.</span>
        </div>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="float-icon float-music">♫</div>
        <div className="float-icon float-weather">☂</div>
        <div className="float-icon float-bird">
          🐤
          <div className="bird-floor" />
        </div>
        <div className="float-icon float-camera">◎</div>
        <div className="float-icon float-game">✦</div>
        <div className="art-label">
          <span /> A little nostalgia, a lot of love.
        </div>
        <span className="spark spark-one">✳</span>
        <span className="spark spark-two">✧</span>
      </div>
    </section>
  );
}
