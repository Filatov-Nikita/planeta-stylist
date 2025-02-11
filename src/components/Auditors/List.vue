<template>
  <div class="auditors-list" v-if="grid.md">
    <ListItem
      class="auditors-list__item"
      v-for="item in items"
      photoWidth="920"
      photoHeight="1160"
      v-bind="item"
    />
  </div>
  <Swiper
    v-else
    :spaceBetween="20"
  >
    <SwiperSlide
      v-for="item in items"
    >
      <ListItem
        photoWidth="920"
        photoHeight="1160"
        v-bind="item"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
  import { ref } from 'vue';
  import ListItem from './ListItem.vue';
  import Img1 from '@/assets/images/auditors/1.jpg';
  import Img2 from '@/assets/images/auditors/2.jpg';
  import Img3 from '@/assets/images/auditors/3.jpg';
  import Img4 from '@/assets/images/auditors/4.jpg';
  import useGrid from '@/composables/useGrid';

  const grid = useGrid();

  const items = ref([
    {
      photoSrc: Img1,
      name: 'Екатерина Бахова',
      text: 'Стилист-имиджмейкер и&nbsp;эксперт по&nbsp;визуальному имиджу',
      achievements: [
        'Преподаватель и&nbsp;ментор для&nbsp;стилистов, эксперт на&nbsp;телевидении и&nbsp;в&nbsp;печатных СМИ fashion-индустрии',
        'Топовые дипломы - Школа Александра Рогова, Академия стиля Юлии Уколовой, Бизнес-школа В.&nbsp;Карпенко, PSFA Academy Светланы Ивановой',
      ],
    },
    {
      photoSrc: Img2,
      name: 'Наталья Абалмасова',
      text: 'Персональный стилист и&nbsp;преподаватель',
      achievements: [
        'Преподаватель в&nbsp;сфере стилистики с&nbsp;опытом работы более 7&nbsp;лет',
      ],
    },
    {
      photoSrc: Img3,
      name: 'Ирина Чернецкая',
      text: 'Основатель и&nbsp;дизайнер сибирского бренда женской одежды ICHE',
      achievements: [
        'Победитель премии Человек Года&nbsp;2024 в&nbsp;номинации «Fashion Индустрия» от&nbsp;Делового Квартала',
        'Эксперт-наставник Реалити-шоу «Битва Креаторов» 2023 от&nbsp;Института креативных индустрий Красноярска',
      ],
    },
    {
      photoSrc: Img4,
      name: 'Анна Шульмина',
      text: 'Эксперт в&nbsp;моде и&nbsp;брендинге частных лиц, институций и&nbsp;бизнеса',
      achievements: [
        'Fashion-стилист с&nbsp;сотнями публикаций в&nbsp;международном глянце',
        'Продюсер Фиджитал AI-кутюр направления. Основатель PR-агентства «Image buro»',
      ],
    },
  ]);
</script>

<style scoped lang="scss">
  .auditors-list {
    display: flex;
    flex-wrap: wrap;
    margin: -25px -45px;

    @include lg {
      margin: -20px;
    }

    @include sm {
      margin: -20px -16px;
    }

    &__item {
      margin: 25px 45px;
      width: calc(50% - 90px);

      @include lg {
        margin: 20px;
        width: calc(50% - 40px);
      }

      @include sm {
        margin: 20px 16px;
        width: calc(100% - 32px);
      }
    }
  }
</style>
