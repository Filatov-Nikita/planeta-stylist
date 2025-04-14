<template>
  <section id="winner" class="section-winner">
    <div class="wrapper">
      <h2 class="h2 h2--primary section-winner__title">Победитель</h2>
      <article class="winner" @click="showed = !showed">
        <div class="winner__img-wrap">
          <img class="winner__photo" width="669" height="1005" src="/members/27_ксения_кайгородова/preview.jpg" alt="Ксения Кайгородова" loading="lazy" />
        </div>
        <h3 class="winner__name">Ксения Кайгородова</h3>
      </article>
      <ModalDetailed v-model="showed" :item="winner" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ModalDetailed from '@/components/Members/ModalDetailed.vue';
  import getMembers, { winnerIndex } from '@/data/members';
  import { ref } from 'vue';

  const winner = ref(getWinner());

  const showed = ref(false);

  function getWinner() {
    const members = getMembers();
    return members[winnerIndex];
  }
</script>

<style scoped lang="scss">
  .section-winner {
    padding-top: 160px;
    padding-bottom: 100px;

    @include lg {
      padding-top: 100px;
      padding-bottom: 80px;
    }

    @include md {
      padding-top: 80px;
      padding-bottom: 60px;
    }

    @include sm {
      padding-top: 40px;
      padding-bottom: 30px;
    }

    &__title {
      margin-bottom: 60px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }

  .winner {
    cursor: pointer;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;

    &__img-wrap {
      overflow: hidden;
    }

    &__photo {
      width: 100%;
      transition: transform 100ms;
    }

    &__name {
      margin-top: 20px;
      font-weight: 700;
      font-family: var(--font-druk);
      font-size: 22px;
      line-height: 1.5;
      color: var(--color-white);
    }

    &:hover &__photo {
      transform: scale(1.05);
    }

    &:hover &__name {
      opacity: 0.8;
    }
  }
</style>
