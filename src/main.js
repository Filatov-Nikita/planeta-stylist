import App from './App.vue';
import { createApp } from 'vue';
import { createConfig, configKey } from '@/composables/useConfig';
import './css/styles.scss';
import './css/app.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'animate.css';

const app = createApp(App);

app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

app.provide(configKey, createConfig());

app.mount('#app');
