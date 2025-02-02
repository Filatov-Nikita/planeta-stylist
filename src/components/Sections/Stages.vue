<template>
  <section id="stages" class="section-stages">
    <div class="wrapper">
      <div class="section-stages__wrap">
        <div class="section-stages__title title">
          <span class="title__row1">3</span>
          <span class="title__row2">этапа</span>
        </div>
        <div class="section-stages__content">
          <ContentItem
            class="section-stages__item"
            caption="Этап 1"
            title="Регистрация участников"
            period="3 февраля – 3 марта"
          >
            <p>Для участия в конкурсе необходимо снять видео (не&nbsp;более 1&nbsp;минуты) с&nbsp;кратким рассказом о&nbsp;себе, своем опыте стилиста и&nbsp;позиционировании.</p>
            <p>Заполните заявку на&nbsp;сайте и&nbsp;загрузите видео-визитку в&nbsp;ваши социальные сети с&nbsp;хэштегом <span class="text-primary">#Битва_стилистов</span>.</p>
            <p>Участники, отобранные независимым экспертным жюри, пройдут во&nbsp;второй этап.</p>
          </ContentItem>
          <ContentItem
            class="section-stages__item"
            caption="Этап 2"
            title="Отборочный этап"
            period="10 февраля – 25 марта"
          >
            <p>Претенденты, участвующие в&nbsp;отборочном этапе, выполняют 2 творческих задания в магазинах-партнерах ТРЦ&nbsp;«Планета». Видео о&nbsp;выполнении заданий оценивается экспертным жюри и&nbsp;выставляется итоговая сумма баллов.</p>
            <p>5 участников с&nbsp;наивысшим количеством баллов проходят в&nbsp;финальный этап конкурса.</p>
            <p>Подробные условия и&nbsp;описание этапов указаны в <a href="#" target="_blank">Правилах Конкурса</a>.</p>
          </ContentItem>
          <ContentItem
            class="section-stages__item"
            caption="Этап 3"
            title="Финальный этап"
            period="1 – 12 апреля"
          >
            <p>Подготовка к&nbsp;финальному этапу будет проходить с&nbsp;1 по 11&nbsp;апреля. Финалисты готовят образы для модного показа в&nbsp;рамках одной концепции по&nbsp;заданию жюри.</p>
            <p>Финал состоится 12&nbsp;апреля в&nbsp;ТРЦ&nbsp;«Планета».</p>
          </ContentItem>
          <Button class="section-stages__action" tag="a" color="primary" href="#" target="_blank">Принять участие</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import Button from '@/components/Base/Button.vue';
  import ContentItem from '@/components/Stages/ContentItem.vue';
</script>

<style scoped lang="scss">
  .section-stages {
    padding-top: 100px;
    padding-bottom: 180px;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      margin: -15px;
    }

    &__title {
      width: calc(100% / 12 * 5 - 30px);
      margin: 15px;
    }

    &__content {
      width: calc(100% / 12 * 7 - 30px);
      margin: 15px;
    }

    &__action {
      margin-top: 50px;
    }

    &__item {
      & + & {
        margin-top: 60px;
      }
    }
  }

  .title {
    color: var(--color-primary);
    line-height: 1.4;
    font-weight: 700;

    &__row1 {
      display: block;
      font-size: 180px;
    }

    &__row2 {
      transform: translateY(-0.08em);
      display: block;
      font-family: var(--font-druk);
      font-size: 70px;
      text-transform: uppercase;
      letter-spacing: 0.02em;
    }

    &__content {
      padding-top: 57px;
    }
  }
</style>
