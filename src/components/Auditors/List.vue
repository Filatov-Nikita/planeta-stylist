<template>
  <div class="auditors-list">
    <ListItem
      class="auditors-list__item"
      v-for="item in items"
      photoWidth="920"
      photoHeight="1160"
      v-bind="item"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ListItem from './ListItem.vue';
  import Img1 from '@/assets/images/auditors/1.jpg';
  import Img2 from '@/assets/images/auditors/2.jpg';
  import Img3 from '@/assets/images/auditors/3.jpg';
  import Img4 from '@/assets/images/auditors/4.jpg';


  const items = ref([
    {
      photoSrc: Img1,
      name: 'Екатерина Бахова',
      text: 'Стилист-имиджмейкер и&nbsp;эксперт по&nbsp;визуальному имиджу',
    },
    {
      photoSrc: Img2,
      name: 'Наталья Абалмасова',
      text: 'Персональный стилист и&nbsp;преподаватель',
    },
    {
      photoSrc: Img3,
      name: 'Ирина Чернецкая',
      text: 'Основатель и&nbsp;дизайнер сибирского бренда женской одежды ICHE',
    },
    {
      photoSrc: Img4,
      name: 'Анна Шульмина',
      text: 'Эксперт в&nbsp;моде и&nbsp;брендинге частных лиц, институций и&nbsp;бизнеса',
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
