<template>
  <Modal v-model="value">
    <div class="card">
      <div class="head">
        <button class="close" @click="value = false">
          <IconClose class="close__icon" />
        </button>
      </div>
      <div class="content">
        <div class="swiper-wrap">
          <button class="btn-nav btn-nav--left" ref="prevEl">
            <IconArrowLeft class="fill-white" />
          </button>
          <button class="btn-nav btn-nav--right" ref="nextEl">
            <IconArrowRight class="fill-white" />
          </button>
          <Swiper
            :spaceBetween="20"
            autoHeight
            :modules="[ Navigation ]"
            :navigation="{
              disabledClass: 'btn-nav--disabled',
              prevEl: '.btn-nav--left',
              nextEl: '.btn-nav--right',
            }"
          >
            <SwiperSlide
              v-for="(image, index) in item.images"
              :key="`images${index}`"
            >
              <img width="669" height="1005" :src="image" />
            </SwiperSlide>
            <SwiperSlide key="video">
              <video :src="item.video" controls></video>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="text-wrap">
          <p class="name">{{ item.name }}</p>
          <p class="age">{{ item.age }}</p>
          <div class="text" v-html="item.text"></div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup>
  import Modal from '@/components/Base/Modal.vue';
  import IconClose from '@/components/Icons/IconClose.vue';
  import IconArrowLeft from '@/components/Icons/IconArrowLeft.vue';
  import IconArrowRight from '@/components/Icons/IconArrowRight.vue';
  import { Navigation } from 'swiper/modules';

  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });

  const value = defineModel({ default: false });
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    max-width: 980px;
    background-color: #1D2024;
    padding: 24px;
    padding-bottom: 60px;

    @include sm {
      padding: 8px;
      padding-bottom: 40px;
    }
  }

  .head {
    text-align: right;
    margin-bottom: 10px;
  }

  .close {
    width: 32px;
    height: 32px;
    padding: 8px;

    &__icon {
      fill: var(--color-white);
    }
  }

  .content {
    max-width: 520px;
    margin: 0 auto;
  }

  .name {
    margin-top: 20px;
    font-family: var(--font-druk);
    font-weight: 700;
    font-size: 22px;
    line-height: 1.5;
    color: var(--color-white);

    @include sm {
      font-size: 18px;
    }
  }

  .age {
    margin-top: 8px;
    color: var(--color-primary);
    font-weight: 300;
    font-size: 18px;
    line-height: 1.5;

    @include sm {
      font-size: 16px;
    }
  }

  .text {
    margin-top: 16px;
    color: var(--color-white);
    font-weight: 200;
    font-size: 18px;
    line-height: 1.5;

    @include sm {
      font-size: 14px;
    }
  }

  .swiper-wrap {
    position: relative;
  }

  .text-wrap, .swiper-wrap {
    padding: 0 70px;

    @include md {
      padding: 0 50px;
    }

    @include sm {
      padding: 0 40px;
    }
  }

  .btn-nav {
    cursor: pointer;
    user-select: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;

    @include sm {
      width: 32px;
      height: 32px;
    }

    &:hover {
      opacity: 0.8;
    }

    &--disabled {
      display: none;
    }

    &--left {
      left: 0;
    }

    &--right {
      right: 0;
    }
  }
</style>
