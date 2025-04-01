<template>
  <section id="finalists" class="section-finalists">
    <div class="wrapper">
      <h2 class="h2 h2--primary section-finalists__title">Финалисты</h2>
      <MembersList :items="items" />
    </div>
  </section>
</template>

<script setup>
  import MembersList from '@/components/Members/List.vue';
  import { reactive } from 'vue';
  import getMembers, { finalistIndexes } from '@/data/members';

  function getFinalists() {
    const members = getMembers();
    return finalistIndexes.map(index => members[index]);
  }

  const items = reactive(getFinalists());
</script>

<style scoped lang="scss">
  .section-finalists {
    padding-top: 180px;
    padding-bottom: 180px;

    @include lg {
      padding-top: 120px;
      padding-bottom: 120px;
    }

    @include md {
      padding-top: 100px;
      padding-bottom: 100px;
    }

    @include sm {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    &__title {
      margin-bottom: 40px;

      @include sm {
        margin-bottom: 30px;
      }
    }
  }
</style>
