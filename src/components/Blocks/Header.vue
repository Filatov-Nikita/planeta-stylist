<template>
  <header class="header">
    <div class="header__wrap">
      <a class="logo" href="https://krs.planeta-mall.ru/">
        <img class="w-full" width="131" height="50" src="@/assets/images/logo.svg" alt="Логотип Планета">
      </a>
      <button class="btn-burger" @click="showedMenu = true">
        <IconBurger />
      </button>

      <NavScreen :showed="showedMenu" @close="showedMenu = false" />

      <div class="nav">
        <a class="nav-link" href="#stages" @click.prevent="scroll">Этапы</a>
        <a class="nav-link" href="#finalists" @click.prevent="scroll">Финалисты</a>
        <a class="nav-link" href="#gifts" @click.prevent="scroll">Призы</a>
        <a class="nav-link" href="#members" @click.prevent="scroll">Участники</a>
        <a class="nav-link" href="#partners" @click.prevent="scroll">Партнеры</a>
        <a class="nav-link" href="#auditors" @click.prevent="scroll">Жюри</a>
        <a class="nav-link" href="#faq" @click.prevent="scroll">Вопросы и ответы</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  import IconBurger from '@/components/Icons/IconBurger.vue';
  import NavScreen from '@/components/Blocks/NavScreen.vue';
  import { ref } from 'vue';

  const showedMenu = ref(false);

  function scroll(e) {
    const id = e.target.getAttribute('href');
    if(!id) return;
    const el = document.querySelector(id);
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<style scoped lang="scss">
  .header {
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 110px;
      row-gap: 16px;

      @include xl {
        justify-content: space-between;
      }
    }
  }

  .btn-burger {
    display: none;
    cursor: pointer;

    @include xl {
      display: block;
    }
  }

  .modal-nav {
    display: none;

    @include lg {
      display: block;
      position: fixed;
      z-index: 9000;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: var(--color-primary);
    }
  }

  .logo {
    width: 131px;

    @include xs {
      width: 100px;
    }
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 16px;

    @include xl {
      display: none;
    }
  }

  .nav-link {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: var(--color-white);

    &:hover {
      opacity: 0.8;
    }
  }

  .btn-burger {
    width: 40px;
    height: 40px;
  }
</style>
