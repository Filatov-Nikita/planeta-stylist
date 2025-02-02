<template>
  <component
    class="base-button"
    :class="{
      'base-button--dark': color === 'dark',
      'base-button--primary': color === 'primary',
    }"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>

<script setup>
  defineProps({
    tag: {
      default: 'button',
      type: String,
    },
    color: {
      default: 'dark',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .base-button {
    display: inline-block;
    cursor: pointer;
    font-family: var(--font-druk);
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    padding: 17px 50px;
    text-transform: uppercase;

    @include md {
      padding: 14px 30px;
      font-size: 16px;
    }

    &--dark {
      color: var(--color-primary);
      background-color: var(--color-dark);

      &:hover {
        color: var(--color-dark);
        background-color: var(--color-accent);
      }
    }

    &--primary {
      color: var(--color-dark);
      background-color: var(--color-primary);

      &:hover {
        background-color: var(--color-accent);
      }
    }
  }
</style>
