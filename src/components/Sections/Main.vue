<template>
  <div class="section-main">
    <div class="wrapper">
      <div class="section-main__wrap">
        <Header class="section-main__header" />
        <div class="section-main__content">
          <div class="section-main__period period">
            <span>3.02</span>
            <span class="period__dot"></span>
            <span>12.04</span>
          </div>
          <h1 class="title section-main__title">
            <span class="title__row1">Битва</span>
            <span class="title__row2">стилистов</span>
          </h1>
          <p class="section-main__text">
            Главный приз – обучение в style community school
          </p>
          <Button tag="a" :href="config.formHref" target="_blank">Принять участие</Button>
        </div>
        <img class="woman" width="1026" height="1074" src="@/assets/images/woman.png" alt="woman">
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from '../Blocks/Header.vue';
  import Button from '../Base/Button.vue';
  import useConfig from '@/composables/useConfig';

  const config = useConfig();
</script>

<style scoped lang="scss">
  .section-main {
    background-image: url('@/assets/images/main-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    &__wrap {
      position: relative;
      z-index: 0;
      padding-top: 35px;
      padding-bottom: 90px;
    }

    &__content {

    }

    &__header {
      margin-bottom: 90px;
    }

    &__period {
      margin-bottom: 30px;
    }

    &__title {
      margin-bottom: 50px;
    }

    &__text {
      max-width: 440px;
      font-weight: 700;
      line-height: 1.2;
      font-size: 26px;
      text-transform: uppercase;
      font-family: var(--font-druk);
      color: var(--color-white);
      margin-bottom: 55px;
    }
  }

  .period {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2;
    color: var(--color-white);
    display: flex;
    align-items: center;
    column-gap: 16px;

    &__dot {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--color-primary);
    }
  }

  .title {
    transform: translateX(-0.08em);
    font-size: 140px;
    font-weight: 700;
    font-family: var(--font-druk);
    color: var(--color-primary);
    line-height: 1;

    &__row1 {
      display: block;
      text-transform: uppercase;
    }

    &__row2 {
      display: block;
      padding-left: 0.08em;
      font-size: 95px;
      margin-top: -30px;
    }
  }

  .woman {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 47.5vw;
    height: auto;
    max-height: 716px;
    max-width: 684px;
    z-index: -1;
  }
</style>
