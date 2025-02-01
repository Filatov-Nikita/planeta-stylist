<template>
  <component class="base-button" :is="tag">
    <slot></slot>
  </component>
</template>

<script setup>
  defineProps({
    tag: {
      default: 'button',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .base-button {
    display: inline-block;
    color: var(--color-primary);
    font-family: var(--font-druk);
    background-color: var(--color-dark);
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    padding: 17px 50px;
  }
</style>
