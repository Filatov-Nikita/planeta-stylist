<template>
  <div>
    <div class="arrows">
      <button class="btn-nav btn-nav--left">
        <IconArrowLeft class="fill-current" />
      </button>
      <button class="btn-nav btn-nav--right">
        <IconArrowRight class="fill-current" />
      </button>
    </div>
    <Swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :modules="[ Navigation ]"
      :navigation="{
        disabledClass: 'btn-nav--disabled',
        prevEl: '.btn-nav--left',
        nextEl: '.btn-nav--right',
      }"
      :breakpoints="{
        701: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 40,
        },
      }"
    >
      <SwiperSlide
        v-for="item in items"
      >
        <ListItem :item="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue';
  import IconArrowLeft from '@/components/Icons/IconArrowLeft.vue';
  import IconArrowRight from '@/components/Icons/IconArrowRight.vue';
  import { Navigation } from 'swiper/modules';

  defineProps({
    items: {
      required: true,
      type: Array,
    },
  });
</script>

<style scoped lang="scss">
  .arrows {
    display: flex;
    justify-content: flex-end;
    column-gap: 50px;
    margin-bottom: 40px;

    @include sm {
      column-gap: 30px;
      margin-bottom: 25px;
    }
  }

  .btn-nav {
    cursor: pointer;
    user-select: none;
    width: 46px;
    height: 46px;
    color: var(--color-white);

    @include sm {
      width: 32px;
      height: 32px;
    }

    &:hover {
      opacity: 0.8;
    }

    &--disabled {
      color: #494949;
      opacity: 1 !important;
    }
  }
</style>
