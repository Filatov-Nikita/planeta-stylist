<template>
  <section id="faq" class="section-faq">
    <div class="wrapper">
      <h2 class="section-faq__title">Вопросы-ответы</h2>
      <div class="section-faq__list">
        <ListItem
          title="Какие призы можно выиграть в Конкурсе?"
          text="Участвовать в Конкурсе может любой желающий от 18 до 45 лет, который относит себя к фэшн-индустрии."
        />
        <ListItem
          title="В какие сроки проводится Конкурс?"
          text="Участвовать в Конкурсе может любой желающий от 18 до 45 лет, который относит себя к фэшн-индустрии."
        />
        <ListItem
          title="Какие критерии определения Победителей Конкурса?"
          text="Участвовать в Конкурсе может любой желающий от 18 до 45 лет, который относит себя к фэшн-индустрии."
        />
        <ListItem
          title="Кто может участвовать?"
          text="Участвовать в Конкурсе может любой желающий от 18 до 45 лет, который относит себя к фэшн-индустрии."
        />
        <ListItem
          title="В чем будет заключаться конкурсное задание?"
          text="Участвовать в Конкурсе может любой желающий от 18 до 45 лет, который относит себя к фэшн-индустрии."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import ListItem from '@/components/Faq/ListItem.vue';
</script>

<style scoped lang="scss">
  .section-faq {
    padding-top: 170px;
    padding-bottom: 180px;

    @include lg {
      padding-top: 100px;
      padding-bottom: 120px;
    }

    @include md {
      padding-top: 80px;
      padding-bottom: 100px;
    }

    @include sm {
      padding-top: 60px;
      padding-bottom: 80px;
    }

    &__title {
      text-transform: uppercase;
      color: var(--color-primary);
      font-family: var(--font-druk);
      text-align: center;
      font-weight: 700;
      font-size: 70px;
      line-height: 1.4;
      letter-spacing: 0.02em;
      margin-bottom: 20px;

      @include xl {
        font-size: 60px;
      }

      @include lg {
        font-size: 50px;
      }

      @include md {
        font-size: 40px;
      }

      @include sm {
        font-size: 32px;
      }
    }

    &__list {
      max-width: 928px;
      margin: 0 auto;

      @include xl {
        max-width: 800px;
      }

      @include lg {
        // max-width: 650px;
      }
    }
  }
</style>
