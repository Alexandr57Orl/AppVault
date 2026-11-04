import { useState, type FormEvent } from 'react';
import { Archive, Eye, EyeOff, LogOut } from 'lucide-react';

export type AuthUser = { name: string; email: string };

type Props = {
  user: AuthUser | null;
  onSignIn: (user: AuthUser) => void;
  onSignOut: () => void;
};

export default function Auth({ user, onSignIn, onSignOut }: Props) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get('email') ?? '').trim();
    const name = String(data.get('name') ?? '').trim();
    const password = String(data.get('password') ?? '');
    if (mode === 'register' && name.length < 2) {
      setError('Введите имя: минимум 2 символа.');
      return;
    }
    if (password.length < 8) {
      setError('Пароль должен содержать минимум 8 символов.');
      return;
    }
    if (mode === 'register' && password !== data.get('confirmPassword')) {
      setError('Пароли не совпадают.');
      return;
    }
    onSignIn({ email, name: name || email.split('@')[0] });
  }

  return (
    <div className="auth-panel">
      <div className="auth-brand">
        <Archive size={26} />
      </div>
      {user ? (
        <>
          <span className="auth-eyebrow">ЛИЧНЫЙ КАБИНЕТ</span>
          <h2 id="modal-title">Привет, {user.name}!</h2>
          <p>Вы вошли в демонстрационный профиль AppVault.</p>
          <div className="auth-profile">
            <span>Электронная почта</span>
            <strong>{user.email}</strong>
          </div>
          <p className="auth-notice">
            Профиль доступен до обновления страницы. Избранное и выбранный тариф хранятся в этом
            браузере и не привязаны к аккаунту.
          </p>
          <button className="auth-submit" onClick={onSignOut}>
            <LogOut size={18} /> Выйти из профиля
          </button>
        </>
      ) : (
        <>
          <span className="auth-eyebrow">ВАША КОЛЛЕКЦИЯ ПРИЛОЖЕНИЙ</span>
          <h2 id="modal-title">{mode === 'login' ? 'С возвращением' : 'Добро пожаловать'}</h2>
          <p>
            {mode === 'login'
              ? 'Войдите в свой профиль AppVault.'
              : 'Создайте свой профиль AppVault.'}
          </p>
          <div className="auth-tabs" aria-label="Способ входа">
            <button
              type="button"
              aria-pressed={mode === 'login'}
              onClick={() => {
                setMode('login');
                setError('');
              }}
            >
              Вход
            </button>
            <button
              type="button"
              aria-pressed={mode === 'register'}
              onClick={() => {
                setMode('register');
                setError('');
              }}
            >
              Регистрация
            </button>
          </div>
          <form key={mode} onSubmit={submit} onChange={() => setError('')}>
            {mode === 'register' && (
              <label className="auth-field">
                Ваше имя
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Александр"
                  minLength={2}
                  maxLength={80}
                  required
                />
              </label>
            )}
            <label className="auth-field">
              Электронная почта
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
              />
            </label>
            <label className="auth-field">
              Пароль
              <span className="auth-password">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  placeholder="Минимум 8 символов"
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  aria-pressed={showPassword}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
            </label>
            {mode === 'register' && (
              <label className="auth-field">
                Повторите пароль
                <input
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="Ещё раз введите пароль"
                  minLength={8}
                  required
                />
              </label>
            )}
            {error && (
              <p className="auth-error" role="alert">
                {error}
              </p>
            )}
            <button className="auth-submit" type="submit">
              {mode === 'login' ? 'Войти в демо-профиль' : 'Создать демо-профиль'}
            </button>
          </form>
          <p className="auth-notice">
            Демо-режим: сервер авторизации не подключён. Данные не отправляются, пароль не
            сохраняется и не проверяется по базе аккаунтов. Используйте вымышленные данные.
          </p>
        </>
      )}
    </div>
  );
}
