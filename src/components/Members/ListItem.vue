<template>
  <article class="member-item" @click="showed = true">
    <div class="member-item__img-wrap">
      <img class="member-item__photo" width="669" height="1005" :src="item.photo" loading="lazy" />
    </div>
    <h3 class="member-item__name">{{ item.name }}</h3>
  </article>
  <ModalDetailed v-model="showed" :item="item" />
</template>

<script setup>
  import ModalDetailed from '@/components/Members/ModalDetailed.vue';
  import { ref } from 'vue';

  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .member-item {
    cursor: pointer;

    &__img-wrap {
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 12px;
      }
    }

    &__photo {
      width: 100%;
    }

    &__name {
      font-weight: 700;
      font-size: 22px;
      line-height: 1.5;
      font-family: var(--font-druk);
      color: var(--color-white);

      @include sm {
        font-size: 18px;
      }
    }
  }
</style>
