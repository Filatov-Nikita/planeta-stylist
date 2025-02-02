<template>
  <div class="faq-item">
    <div class="faq-item__title" @click="active = !active">
      <span class="grow">{{ title }}</span>
      <span class="faq-item__icon-wrap" :class="{ 'faq-item__icon-wrap--active': active }">
        <svg class="faq-item__icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.65 14.3167L20 21.95L12.35 14.3167L10 16.6667L20 26.6666L30 16.6667L27.65 14.3167Z" />
        </svg>
      </span>
    </div>
    <SlideUpDown :active="active" :duration="300">
      <p class="faq-item__text">{{ text }}</p>
    </SlideUpDown>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import SlideUpDown from 'vue-slide-up-down';

  defineProps({
    title: {
      required: true,
      type: String,
    },
    text: {
      required: true,
      type: String,
    },
  });

  const active = ref(false);
</script>

<style scoped lang="scss">
  .faq-item {
    border-bottom: 1px solid #818181;
    padding-bottom: 10px;

    &__title {
      display: flex;
      align-items: center;
      column-gap: 30px;
      padding-top: 30px;
      padding-bottom: 20px;
      cursor: pointer;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.2;
      color: var(--color-gray-500);

      @include sm {
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 10px;
      }

      @include xs {
        font-size: 16px;
      }

      &:hover {
        color: var(--color-accent);
      }
    }

    &__title:hover &__icon {
      fill: var(--color-accent);
    }

    &__text {
      padding-bottom: 20px;
      font-weight: 300;
      color: var(--color-gray-500);

      @include sm {
        font-size: 16px;
      }

      @include xs {
        font-size: 14px;
      }
    }

    &__icon-wrap {
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      transition: transform 300ms;

      &--active {
        transform: rotate(180deg);
      }
    }

    &__icon {
      width: 100%;
      height: 100%;
      fill: #BABABA;
    }
  }
</style>
