import { inject } from 'vue';

export const configKey = Symbol();

export function createConfig() {
  return {
    formHref: 'https://forms.gle/EstfqX88Zp2L1VEA9',
  };
}

export default function() {
  const config = inject(configKey);
  if(!config) throw new Error('config не найден');
  return config;
}
