<template>
  <q-carousel
    v-model="slide"
    class="bg-grey-1 shadow-2 col-md-12 q-mb-md"
    transition-prev="slide-right"
    transition-next="slide-left"
    control-color="primary"
    height="auto"
    width="auto"
    arrows
    animated
  >
    <q-carousel-slide :name="1">
      <q-card class="row" flat>
        <q-card-section class="col-md-5 col-xs-12" horizontal>
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
        <q-card-section class="col-md-7 col-xs-12 q-gutter-sm">
          <div class="text-h3">
            Espaço Cultural Woodstock
          </div>
          <div class="text-h6">
            Av. Conselheiro Furtado, 1662 - Cremação, Belém
          </div>
          <div class="text-h6">
            <p><u>Evento</u>: Festival 2 anos Woodstock</p>
          </div>
          <div class="text-h6">
            <p><u>Data</u>: 25/10/2021</p>
          </div>
          <div class="text-h6">
            <p><u>Horário</u>: 22:00h ás 4:00h</p>
          </div>
          <div class="q-pl-sm q-py-md row">
            <q-btn class="col-md-5 col-xs-12" color="white" text-color="black" label="Ver Evento" />
          </div>
          <div>
            <q-chip icon="event" label="Add to calendar" />
            <q-chip icon="bookmark" label="Bookmark" />
            <q-chip icon="alarm" label="Set alarm"/>
            <q-chip icon="directions" label="Get directions" />
          </div>
        </q-card-section>
      </q-card>
    </q-carousel-slide>
    <q-carousel-slide :name="2">
      <q-card class="row" flat>
        <q-card-section class="col-md-5 col-xs-12" horizontal>
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
        </q-card-section>
        <q-card-section class="col-md-7 col-xs-12 q-gutter-sm">
          <div class="text-h3">
            Espaço Cultural Woodstock
          </div>
          <div class="text-h6">
            Av. Conselheiro Furtado, 1662 - Cremação, Belém
          </div>
          <div class="text-h6">
            <p><u>Evento</u>: Festival 2 anos Woodstock</p>
          </div>
          <div class="text-h6">
            <p><u>Data</u>: 25/10/2021</p>
          </div>
          <div class="text-h6">
            <p><u>Horário</u>: 22:00h ás 4:00h</p>
          </div>
          <div class="q-pl-sm q-py-md row">
            <q-btn class="col-md-5 col-xs-12" color="white" text-color="black" label="Ver Evento" />
          </div>
          <div>
            <q-chip icon="event" label="Add to calendar" />
            <q-chip icon="bookmark" label="Bookmark" />
            <q-chip icon="alarm" label="Set alarm"/>
            <q-chip icon="directions" label="Get directions" />
          </div>
        </q-card-section>
      </q-card>
    </q-carousel-slide>
  </q-carousel>
</template>

<script>
export default {
  name: 'PrincipaisOfertas',
  data () {
    return {
      slide: 1,
      navigation: 'none'
    }
  }
}
</script>

<style>

</style>
