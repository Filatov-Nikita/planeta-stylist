import App from './App.vue';
import { createApp } from 'vue';
import { createConfig, configKey } from '@/composables/useConfig';
import './css/styles.scss';
import './css/app.css';

const app = createApp(App);

app.provide(configKey, createConfig());

app.mount('#app');
