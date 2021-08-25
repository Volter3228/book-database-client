<template>
  <q-card
    class="place-card cursor-pointer relative-position"
    @mouseenter="hover = true" @mouseleave="hover = false"
  >
    <q-img
      :ratio="16/9" alt="place"
      :src="place.type === 'Bookcase' ? 'images/bookcase.jpg' : 'images/box.jpg'"
    />
    <transition
      appear enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut" v-show="hover"
    >
      <div class="actions absolute-top-right bg-transparent q-pa-xs q-gutter-xs">
        <q-btn round dense color="brown-7" size="12px">
          <q-icon name="edit" size="16px"/>
        </q-btn>
        <q-btn round dense color="brown-7" size="12px">
          <q-icon name="delete" size="16px"/>
        </q-btn>
      </div>
    </transition>
    <q-card-section>
      <div class="text-h6">{{ place.type }}</div>
      <div class="text-subtitle2">
        {{ place.type === 'Bookcase' ? `${place.shelvesCount} shelves, ` : '' }}
        {{ place.booksCount }} book{{ place.booksCount > 1 ? 's' : '' }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ place.info }}
    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'PlaceCard',
  props: ['place'],
  setup() {
    const hover = ref(false);

    return {
      hover
    }
  }
}
</script>
