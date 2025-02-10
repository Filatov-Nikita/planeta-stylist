<template>
  <div class="auditor-item">
    <div class="auditor-item__img-wrap">
      <img :width="photoWidth" :height="photoHeight" :src="photoSrc" alt="" loading="lazy" />
    </div>
    <p class="auditor-item__name">{{ name }}</p>
    <p class="auditor-item__text" v-html="text"></p>
  </div>
</template>

<script setup>
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
  });
</script>

<style scoped lang="scss">
  .auditor-item {
    &__img-wrap {
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
  }
</style>
