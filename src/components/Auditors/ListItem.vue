<template>
  <div
    class="auditor-item"
    @mouseenter="screen.touch ? null : showed = true"
    @mouseleave="screen.touch ? null : showed = false"
    @click="screen.touch ? showed = !showed : null"
  >
    <div class="auditor-item__img-wrap">
      <img :width="photoWidth" :height="photoHeight" :src="photoSrc" :alt="name" loading="lazy" />
      <Transition name="overlay">
        <div v-if="showed" class="auditor-item__overlay"></div>
      </Transition>
      <Transition name="items">
        <ul v-if="showed" class="auditor-item__items">
          <li
            class="auditor-item__item"
            v-for="achievement in achievements"
            v-html="achievement"
          ></li>
        </ul>
      </Transition>
    </div>
    <p class="auditor-item__name">{{ name }}</p>
    <p class="auditor-item__text" v-html="text"></p>
  </div>
</template>

<script setup>
  import { useScreen } from 'vue-screen';
  import { ref } from 'vue';

  defineProps({
    photoWidth: {
      required: true,
      type: String,
    },
    photoHeight: {
      required: true,
      type: String,
    },
    photoSrc: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
    achievements: {
      required: true,
      type: Array,
    }
  });

  const showed = ref(false);
  const screen = useScreen();
</script>

<style scoped lang="scss">
  .auditor-item {
    &__img-wrap {
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 12px;
      }
    }

    &__name {
      font-family: var(--font-druk);
      font-weight: 700;
      font-size: 22px;
      line-height: 1.5;
      color: var(--color-primary);
      margin-bottom: 10px;

      @include sm {
        font-size: 18px;
        margin-bottom: 6px;
      }
    }

    &__text {
      font-weight: 300;
      font-size: 18px;
      line-height: 1.5;
      color: var(--color-gray-700);

      @include sm {
        font-size: 16px;
      }
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 5;
      background-color: rgba(32, 32, 32, 0.7);
    }

    &__items {
      position: absolute;
      padding: 10px 24px 70px 32px;
      width: 100%;
      height: auto;
      left: 0;
      bottom: 0;
      z-index: 10;
      font-size: 16px;
      line-height: 1.5;
      font-weight: 300;
      color: var(--color-white);
      list-style: disc;

      @include sm {
        font-size: 14px;
        padding-bottom: 30px;
      }
    }

    &__item {
      & + & {
        margin-top: 12px;
      }
    }
  }

  .overlay {
    &-enter-active, &-leave-active {
      transition: opacity 500ms;
    }

    &-leave-active, &-enter-from {
      opacity: 0;
    }
  }

  .items {
    &-enter-from, &-leave-active {
      transform: translateY(100%);
    }

    &-enter-active, &-leave-active {
      transition: transform 300ms;
    }
  }
</style>
