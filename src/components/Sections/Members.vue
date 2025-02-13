<template>
  <section id="members" class="section-members">
    <div class="wrapper">
      <h2 class="h2 h2--primary section-members__title">Участники</h2>
      <MembersList :items="items" />
    </div>
  </section>
</template>

<script setup>
  import MembersList from '@/components/Members/List.vue';
  import { reactive } from 'vue';
  import getMembers from '@/data/members';

  const items = reactive(getMembers());
</script>

<style scoped lang="scss">
  .section-members {
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

    &__title {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }
</style>
