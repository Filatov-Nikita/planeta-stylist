<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrap">
        <div class="footer__address-wrap">
          <div class="footer__address">
            <p>ТРЦ «Планета»</p>
            <p>г. Красноярск, ул. 9 Мая, 77</p>
          </div>
          <a class="logo" href="/">
            <img class="w-full" width="131" height="50" src="@/assets/images/logo.svg" alt="Логотип Планета">
          </a>
        </div>
        <div class="footer__links links">
          <a class="link" href="#" target="_blank">
            <IconVK class="w-full h-full" />
          </a>
          <a class="link" href="#" target="_blank">
            <IconTG class="w-full h-full" />
          </a>
          <a class="link" href="#" target="_blank">
            <IconRutube class="w-full h-full" />
          </a>
        </div>
        <div class="footer__rules-wrap">
          <a class="footer__rules" href="#" target="_blank">Правила проведения Конкурса</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import IconVK from '@/components/Icons/IconVK.vue';
  import IconTG from '@/components/Icons/IconTG.vue';
  import IconRutube from '@/components/Icons/IconRutube.vue';
</script>


<style scoped lang="scss">
  .footer {
    padding-bottom: 40px;

    &__address-wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      column-gap: 30px;
    }

    &__address {
      font-weight: 300;
      font-size: 20px;
      line-height: 1.35;
      color: var(--color-white);

      p + p {
        margin-top: 5px;
      }
    }

    &__rules-wrap {
      margin-top: 35px;
    }

    &__rules {
      display: inline-block;
      font-weight: 300;
      font-size: 14px;
      line-height: 1.2;
      color: var(--color-gray-300);
      padding-bottom: 10px;
      border-bottom: 1px solid #595959;

      &:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
      }
    }

    &__links {
      margin-top: 25px;
    }
  }

  .logo {
    width: 141px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .link {
    width: 40px;
    height: 40px;
    flex-shrink: 0;

    &:hover {
      opacity: 0.8;
    }
  }
</style>
