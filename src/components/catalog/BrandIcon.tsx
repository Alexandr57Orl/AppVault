type Brand = 'vk' | 'rutube' | 'max' | 'rustore' | 'sberbank' | 'vtb';

export const heroBrands: { id: Brand; name: string }[] = [
  { id: 'vk', name: 'VK' },
  { id: 'rutube', name: 'Rutube' },
  { id: 'max', name: 'Max' },
  { id: 'rustore', name: 'RuStore' },
  { id: 'sberbank', name: 'Сбербанк' },
  { id: 'vtb', name: 'ВТБ' },
];

export default function BrandIcon({ brand }: { brand: Brand }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {brand === 'sberbank' && (
        <>
          <path d="M49 30a18 18 0 1 1-13-17" stroke="white" strokeWidth="5" strokeLinecap="round" />
          <path
            d="m20 28 11 8 22-19"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
      {brand === 'vtb' && (
        <g fill="white">
          <path d="M17 18h36l-3 7H14zM13 29h32l-3 7H10zM9 40h28l-3 7H6z" />
        </g>
      )}
      {brand === 'vk' && (
        <path
          fill="white"
          d="M12 20h8c.6 11 5 15.7 8.5 16.7V20H36v9.5c3.5-.4 7.1-4.8 8.3-9.5h7.5c-.9 5.8-5 10.2-7.9 12 2.9 1.5 7.6 5.4 9.4 12h-8.2c-1.4-4.4-4.8-7.8-9.1-8.3V44h-1C19.5 44 12.6 33.4 12 20Z"
        />
      )}
      {brand === 'rutube' && (
        <>
          <path
            fill="white"
            d="M18 17h18c9 0 14 4 14 12 0 5-3 9-8 10l10 10H40L27 35v14h-9V17Zm9 8v8h9c3 0 5-1 5-4s-2-4-5-4h-9Z"
          />
          <circle cx="49" cy="15" r="6" fill="#ef3340" />
        </>
      )}
      {brand === 'max' && (
        <>
          <path
            fill="white"
            fillRule="evenodd"
            d="M32 12c-12 0-21 9-21 21 0 6 2 10 4 13l-1 7 9-3c3 2 6 2 9 2 12 0 21-8 21-20S44 12 32 12Zm0 10c7 0 11 4 11 10s-4 10-11 10c-2 0-4 0-6-2l-3 1v-4c-1-1-2-3-2-5 0-6 5-10 11-10Z"
            clipRule="evenodd"
          />
        </>
      )}
      {brand === 'rustore' && (
        <>
          <rect
            x="13"
            y="22"
            width="15"
            height="28"
            rx="3"
            fill="white"
            opacity=".65"
            transform="rotate(-12 13 22)"
          />
          <rect
            x="25"
            y="17"
            width="15"
            height="31"
            rx="3"
            fill="white"
            opacity=".85"
            transform="rotate(-12 25 17)"
          />
          <rect
            x="37"
            y="12"
            width="15"
            height="34"
            rx="3"
            fill="white"
            transform="rotate(-12 37 12)"
          />
        </>
      )}
    </svg>
  );
}
