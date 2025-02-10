<template>
  <section id="auditors" class="section-auditors">
    <div class="wrapper">
      <h2 class="h2 h2--primary section-auditors__title">Жюри</h2>
      <div class="section-auditors__list-wrap">
        <AuditorsList />
      </div>
    </div>
  </section>
</template>

<script setup>
  import AuditorsList from '@/components/Auditors/List.vue';
</script>

<style scoped lang="scss">
  .section-auditors {
    padding-top: 180px;

    @include lg {
      padding-top: 120px;
    }

    @include md {
      padding-top: 100px;
    }

    @include sm {
      padding-top: 60px;
    }

    &__list-wrap {
      padding: 0 125px;

      @include xl {
        padding: 0;
      }
    }

    &__title {
      margin-bottom: 60px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }
</style>
