<template>
  <header class="header">
    <div class="header__wrap">
      <a class="logo" href="/">
        <img class="w-full" width="131" height="50" src="@/assets/images/logo.svg" alt="Логотип Планета">
      </a>
      <div class="nav">
        <a class="nav-link" href="#stages">Этапы</a>
        <a class="nav-link" href="#gifts">Призы</a>
        <a class="nav-link" href="#">Участники</a>
        <a class="nav-link" href="#">Жюри</a>
        <a class="nav-link" href="#faq">Вопросы и ответы</a>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .header {
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 110px;
    }
  }

  .logo {
    width: 131px;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
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
</style>
