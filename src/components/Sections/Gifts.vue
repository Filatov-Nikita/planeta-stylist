<template>
  <section id="gifts" class="section-gifts">
    <div class="wrapper relative">
      <div class="section-gifts__wrap">
        <h2 class="section-gifts__title">Призы</h2>
        <div class="section-gifts__content">
          <div class="section-gifts__row1">
            <p class="section-gifts__label">1 Место</p>
            <p class="section-gifts__text-large">Сертификат на&nbsp;обучение в&nbsp;школе стилистов на&nbsp;150&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row2">
            <p class="section-gifts__label">2 Место</p>
            <p class="section-gifts__text">Подарочные карты «Планета» на&nbsp;сумму 70&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row3">
            <p class="section-gifts__label">3 Место</p>
            <p class="section-gifts__text">Подарочные карты «Планета» на&nbsp;сумму 30&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row4">
            <p class="section-gifts__text">Приз зрительских симпатий</p>
            <p class="section-gifts__text">Призы от брендов-партнеров</p>
          </div>
        </div>
        <Button class="section-gifts__action" tag="a" :href="config.formHref" target="_blank">Хочу участвовать</Button>
      </div>
      <img class="woman" width="884" height="1218" src="@/assets/images/woman2.png" alt="woman">
    </div>
  </section>
</template>

<script setup>
  import Button from '@/components/Base/Button.vue';
  import useConfig from '@/composables/useConfig';

  const config = useConfig();
</script>

<style scoped lang="scss">
  .section-gifts {
    background-color: var(--color-primary);
    position: relative;
    z-index: 1;

    &__wrap {
      padding-top: 60px;
      padding-bottom: 80px;
    }

    &__title {
      text-transform: uppercase;
      color: var(--color-dark);
      font-family: var(--font-druk);
      text-align: center;
      font-weight: 700;
      font-size: 70px;
      line-height: 1.4;
      letter-spacing: 0.02em;
      margin-bottom: 40px;
    }

    &__action {
      margin-top: 50px;
    }

    &__content {
      color: var(--color-dark);
    }

    &__row1 {
      margin-bottom: 30px;
    }

    &__row2 {
      margin-bottom: 20px;
    }

    &__row3 {
      margin-bottom: 45px;
    }

    &__row2 &__text,  &__row3 &__text {
      margin-top: 4px;
    }

    &__row4 &__text + &__text {
      margin-top: 12px;
    }

    &__label {
      font-weight: 700;
      font-family: var(--font-druk);
      font-size: 22px;
      line-height: 1.6;
      text-transform: uppercase;
    }

    &__text-large {
      font-weight: 700;
      font-family: var(--font-druk);
      font-size: 40px;
      line-height: 1.3;
      text-transform: uppercase;
      max-width: 760px;
      margin-top: 10px;
    }

    &__text {
      font-size: 22px;
      line-height: 1.5;
    }
  }

  .woman {
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
    height: 90%;
    z-index: -1;
  }
</style>
