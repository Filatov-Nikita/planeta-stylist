<template>
  <section id="faq" class="section-faq">
    <div class="wrapper">
      <h2 class="section-faq__title">Вопросы-ответы</h2>
      <div class="section-faq__list">
        <ListItem title="Какие призы можно выиграть в Конкурсе?">
          <template #text>
            <ul class="space-y-2 list-disc pl-6">
              <li>1&nbsp;место – Сертификат на&nbsp;обучение в&nbsp;Школе стилистов стоимостью 150&nbsp;000&nbsp;₽</li>
              <li>2&nbsp;место – Подарочная карта «Планета» номиналом 70 000 ₽</li>
              <li>3&nbsp;место – Подарочная карта «Планета» номиналом 30&nbsp;000&nbsp;₽</li>
              <li>Приз зрительских симпатий</li>
              <li>Призы от&nbsp;брендов-партнеров – подарочные сертификаты на&nbsp;сумму от&nbsp;10&nbsp;000&nbsp;₽</li>
            </ul>
          </template>
        </ListItem>
        <ListItem title="В какие сроки проводится Конкурс?">
          <template #text>
            <p>Конкурс проводится с&nbsp;3&nbsp;февраля по&nbsp;12&nbsp;апреля 2025 года включительно</p>
          </template>
        </ListItem>
        <ListItem title="Какие критерии оценки выполнения заданий участников конкурса?">
          <template #text>
            <ul class="space-y-2 list-disc pl-6">
              <li>Актуальность образов</li>
              <li>Композиция костюмного ансамбля</li>
              <li>Оригинальность идеи</li>
              <li>Уникальный почерк стилиста</li>
              <li>Соответствие образа заданной тематике, реализация идеи (оценка только в финале Конкурса)</li>
            </ul>
          </template>
        </ListItem>
        <ListItem title="Кто может участвовать?">
          <template #text>
            <p>Участвовать в&nbsp;конкурсе может любое физическое лицо любого пола в&nbsp;возрасте от&nbsp;18 до&nbsp;45&nbsp;лет, относящее себя к&nbsp;фэшн-индустрии, которое на&nbsp;дату начала проведения Конкурса является гражданином Российской Федерации, постоянно проживающим на&nbsp;территории&nbsp;РФ.</p>
          </template>
        </ListItem>
        <ListItem title="В чем будет заключаться конкурсное задание второго этапа?">
          <template #text>
            <ul class="space-y-2 pl-6 list-decimal">
              <li>Первый видеоролик, хронометражем не&nbsp;более 1&nbsp;минуты, в&nbsp;стиле «Образы&nbsp;стилиста» должен состоять из&nbsp;2-3 своих образов, собранных в&nbsp;магазинах брендов-партнеров, расположенных в&nbsp;ТРЦ, нужно выложить в&nbsp;социальные сети с&nbsp;хештегом <span class="text-primary">#Битва_стилистов</span></li>
              <li>Во втором видеоролике «До/после», нужно продемонстрировать 2-3 образа, собранные для&nbsp;модели на&nbsp;основе одежды от&nbsp;брендов-партнеров, расположенных в&nbsp;ТРЦ. В ролике необходимо показать модель до&nbsp;работы со&nbsp;стилистом и&nbsp;рассказать о&nbsp;проблемах с&nbsp;ее&nbsp;гардеробом. Видеоролик нужно выложить в&nbsp;социальные сети с&nbsp;хештегом <span class="text-primary">#Битва_стилистов</span></li>
            </ul>
          </template>
        </ListItem>
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
      padding-bottom: 60px;
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
