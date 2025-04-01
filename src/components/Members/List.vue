<template>
  <div ref="slider">
    <div class="arrows">
      <button ref="prevBtnRef" class="list-btn-nav list-btn-nav--left">
        <IconArrowLeft class="fill-current" />
      </button>
      <button ref="nextBtnRef" class="list-btn-nav list-btn-nav--right">
        <IconArrowRight class="fill-current" />
      </button>
    </div>
    <Swiper
      :slidesPerView="1"
      :spaceBetween="20"
      :modules="[ Navigation, Autoplay ]"
      :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
      }"
      :navigation="{
        disabledClass: 'list-btn-nav--disabled',
        prevEl: prevBtnRef,
        nextEl: nextBtnRef,
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
      @swiper="swiper = $event"
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
  import useIntersect from '@/composables/useIntersect';
  import { Navigation, Autoplay } from 'swiper/modules';
  import { onMounted, ref } from 'vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    },
  });

  const slider = ref(null);
  const swiper = ref(null);

  const prevBtnRef = ref(null);
  const nextBtnRef = ref(null);

  onMounted(() => {
    if(swiper.value && swiper.value.autoplay) {
      swiper.value.autoplay.stop();
    }
  });

  useIntersect(
    slider,
    () => {
      if(swiper.value && swiper.value.autoplay) {
        swiper.value.autoplay.start();
      }
    },
    () => {},
    { once: true },
  );
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

  .list-btn-nav {
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
