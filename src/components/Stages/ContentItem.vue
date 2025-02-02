<template>
  <article class="content-item">
    <div class="content-item__header">
      <p class="content-item__caption">{{ caption }}</p>
      <div class="content-item__title-wrap">
        <h2 class="content-item__title">{{ title }}</h2>
        <p class="content-item__period">{{ period }}</p>
      </div>
    </div>
    <div class="content-item__text">
      <slot></slot>
    </div>
  </article>
</template>

<script setup>
  defineProps({
    caption: {
      required: true,
      type: String,
    },
    period: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  });
</script>

<style scoped lang="scss">
  .content-item {
    &__header {
      padding-bottom: 14px;
      border-bottom: 1px solid var(--color-white);
      margin-bottom: 20px;
    }

    &__caption {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.2;
      color: var(--color-accent);
      text-transform: uppercase;
      margin-bottom: 12px;
    }

    &__title-wrap {
      font-size: 22px;
      line-height: 1.2;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      column-gap: 30px;
    }

    &__title {
      font-weight: 700;
      color: var(--color-white);
    }

    &__period {
      font-weight: 400;
      color: var(--color-primary);
    }

    &__text {
      max-width: 628px;
      font-weight: 300;
      color: var(--color-gray-700);
    }
  }

  :slotted(.content-item__text p + p) {
    margin-top: 10px;
  }

  :slotted(.content-item__text a) {
    text-decoration: underline;

    &:hover {
      color: var(--color-white);
    }
  }
</style>
