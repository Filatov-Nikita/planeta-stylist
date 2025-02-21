<template>
  <section id="gifts" class="section-gifts">
    <div class="wrapper relative">
      <div class="section-gifts__wrap">
        <h2 class="h2 h2--dark section-gifts__title">Призы</h2>
        <div class="section-gifts__content">
          <div class="section-gifts__row1" ref="row1Ref" :class="{ 'row-animated-start': !animted1, 'row-animated-active': animted1 }">
            <p class="section-gifts__label">1 Место</p>
            <p class="section-gifts__text-large">Сертификат на&nbsp;обучение в&nbsp;школе стилистов на&nbsp;150&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row2" ref="row2Ref" :class="{ 'row-animated-start': !animted2, 'row-animated-active': animted2 }">
            <p class="section-gifts__label">2 Место</p>
            <p class="section-gifts__text">Подарочная карта «Планета» на&nbsp;сумму 70&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row3" ref="row3Ref" :class="{ 'row-animated-start': !animted3, 'row-animated-active': animted3 }">
            <p class="section-gifts__label">3 Место</p>
            <p class="section-gifts__text">Подарочная карта «Планета» на&nbsp;сумму 30&nbsp;000&nbsp;₽</p>
          </div>
          <div class="section-gifts__row4" ref="row4Ref" :class="{ 'row-animated-start': !animted4, 'row-animated-active': animted4 }">
            <p class="section-gifts__text section-gifts__text--accent">Приз зрительских симпатий</p>
            <p class="section-gifts__text section-gifts__text--accent">Призы от брендов-партнеров</p>
            <p class="section-gifts__caption">Подарочные сертификаты на&nbsp;сумму от&nbsp;10&nbsp;000 ₽</p>
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
  import useIntersect from '@/composables/useIntersect';
  import { ref } from 'vue';

  const config = useConfig();

  const row1Ref = ref(null);
  const row2Ref = ref(null);
  const row3Ref = ref(null);
  const row4Ref = ref(null);
  const animted1 = ref(false);
  const animted2 = ref(false);
  const animted3 = ref(false);
  const animted4 = ref(false);

  useIntersect(
    row1Ref,
    () => animted1.value = true,
    () => {},
    { threshold: 1, once: true }
  );

  useIntersect(
    row2Ref,
    () => animted2.value = true,
    () => {},
    { threshold: 1, once: true }
  );

  useIntersect(
    row3Ref,
    () => animted3.value = true,
    () => {},
    { threshold: 1, once: true }
  );

  useIntersect(
    row4Ref,
    () => animted4.value = true,
    () => {},
    { threshold: 1, once: true }
  );
</script>

<style scoped lang="scss">
  .row-animated {
    &-start {
      opacity: 0;
    }

    &-active {
      animation-name: lightSpeedInLeft;
      animation-duration: 1s;
    }
  }

  .section-gifts {
    background-color: var(--color-primary);
    position: relative;
    z-index: 1;

    &__wrap {
      padding-top: 60px;
      padding-bottom: 80px;

      @include md {
        padding-top: 30px;
        padding-bottom: 40px;
      }

      @include xs {
        padding-bottom: 30px;
      }
    }

    &__title {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 30px;
      }
    }

    &__action {
      margin-top: 50px;

      @include sm {
        margin-top: 40px;
      }

      @include xs {
        margin-top: 30px;
      }
    }

    &__content {
      color: var(--color-dark);
    }

    &__row1 {
      margin-bottom: 30px;
    }

    &__row2 {
      margin-bottom: 40px;

      @include md {
        max-width: 380px;
      }

      @include sm {
        max-width: 280px;
        margin-bottom: 20px;
      }
    }

    &__row3 {
      margin-bottom: 45px;

      @include md {
        max-width: 380px;
      }

      @include sm {
        max-width: 280px;
        margin-bottom: 24px;
      }
    }

    &__row2 &__text,  &__row3 &__text {
      margin-top: 4px;
    }

    &__row4 &__text + &__text {
      margin-top: 16px;
    }

    &__label {
      font-weight: 700;
      font-family: var(--font-druk);
      font-size: 22px;
      line-height: 1.6;
      text-transform: uppercase;

      @include lg {
        font-size: 18px;
      }

      @include sm {
        font-size: 16px;
      }
    }

    &__text-large {
      font-weight: 700;
      font-family: var(--font-druk);
      font-size: 40px;
      line-height: 1.3;
      text-transform: uppercase;
      max-width: 760px;
      margin-top: 10px;

      @include xl {
        max-width: 620px;
        font-size: 32px;
      }

      @include md {
        font-size: 24px;
        max-width: 480px;
      }

      @include sm {
        font-size: 20px;
        max-width: 380px;
      }

      @include xs {
        font-size: 16px;
        max-width: 320px;
      }
    }

    &__text {
      font-size: 22px;
      line-height: 1.5;

      &--accent {
        font-weight: 700;
      }

      @include lg {
        font-size: 18px;
      }

      @include sm {
        font-size: 14px;
      }
    }

    &__caption {
      margin-top: 6px;
      font-size: 16px;
      line-height: 1.5;
      padding-left: 24px;

      @include lg {
        font-size: 16px;
        padding-left: 20px;
      }

      @include sm {
        max-width: 280px;
        font-size: 12px;
        padding-left: 16px;
      }
    }
  }

  .woman {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40vw;
    height: auto;
    max-width: 589px;
    max-height: 812px;
    z-index: -1;

    @include md {
      width: 50vw;
    }

    @include xs {
      display: none;
    }
  }
</style>
