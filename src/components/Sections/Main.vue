<template>
  <div class="section-main">
    <div class="wrapper">
      <div class="section-main__wrap">
        <Header class="section-main__header" />
        <div class="section-main__content">
          <Transition appear name="period-anim">
            <div class="section-main__period period">
              <span>3.02</span>
              <span class="period__dot"></span>
              <span>12.04</span>
            </div>
          </Transition>
          <Transition appear name="title-anim">
            <h1 class="title section-main__title">
              <span class="title__row1">Битва</span>
              <span class="title__row2">стилистов</span>
            </h1>
          </Transition>
          <p class="section-main__text">
            Главный приз – обучение в style community school
          </p>
          <Transition appear name="btn-anim">
            <Button tag="a" :href="config.formHref" target="_blank">Принять участие</Button>
          </Transition>
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
  .period-anim {
    &-enter-to {
      opacity: 0;
    }

    &-enter-active {
      animation-delay: 500ms;
      animation-name: fadeIn;
      animation-duration: 1s;
    }
  }

  .title-anim {
    &-enter-active {
      animation-name: fadeInDown;
      animation-duration: 1s;
    }
  }

  .btn-anim {
    &-enter-active {
      animation-delay: 1s;
      animation-name: pulse;
      animation-duration: 1s;
    }
  }

  .section-main {
    background-image: url('@/assets/images/main-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    &__wrap {
      position: relative;
      z-index: 0;
      padding-top: 35px;
      padding-bottom: 90px;

      @include lg {
        padding-top: 20px;
        padding-bottom: 40px;
      }

      @include sm {
        padding-bottom: 0px;
      }
    }

    &__header {
      margin-bottom: 90px;

      @include screen(990px) {
        margin-bottom: 40px;
      }

      @include sm {
        margin-bottom: 32px;
      }
    }

    &__period {
      margin-bottom: 30px;

      @include xl {
        margin-bottom: 20px;
      }

      @include sm {
        margin-bottom: 15px;
      }
    }

    &__title {
      margin-bottom: 50px;

      @include xl {
        margin-bottom: 35px;
      }

      @include sm {
        margin-bottom: 20px;
      }
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

      @include xl {
        font-size: 18px;
        max-width: 320px;
        margin-bottom: 35px;
      }

      @include md {
        font-size: 16px;
      }

      @include sm {
        max-width: 295px;
        margin-bottom: 24px;
      }
    }
  }

  .period {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.2;
    color: var(--color-white);
    display: inline-flex;
    align-items: center;
    column-gap: 16px;

    @include xl {
      font-size: 24px;
    }

    @include md {
      font-size: 20px;
      column-gap: 12px;
    }

    @include sm {
      font-size: 16px;
    }

    &__dot {
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: var(--color-primary);

      @include md {
        width: 10px;
        height: 10px;
      }
    }
  }

  .title {
    margin-left: -0.08em;
    font-size: 140px;
    font-weight: 700;
    font-family: var(--font-druk);
    color: var(--color-primary);
    line-height: 1;

    @include xl {
      font-size: 100px;
    }

    @include md {
      font-size: 70px;
    }

    @include xs {
      font-size: 50px;
    }

    &__row1 {
      display: block;
      text-transform: uppercase;
    }

    &__row2 {
      display: block;
      padding-left: 0.08em;
      font-size: 95px;
      margin-top: -30px;

      @include xl {
        margin-top: -10px;
        font-size: 60px;
      }

      @include md {
        font-size: 47px;
      }

      @include xs {
        margin-top: 0px;
        font-size: 34px;
      }
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

    @include md {
      max-width: 380px;
    }

    @include sm {
      margin-top: 30px;
      max-width: 350px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-height: none;
      position: static;
    }
  }
</style>
