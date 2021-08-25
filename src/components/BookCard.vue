<template>
  <q-card
    class="book-card cursor-pointer relative-position bg-brown-1 card-shadow"
    @mouseenter="hover = true" @mouseleave="hover = false"
  >
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
    <q-card-section class="full-width">
      <div class="text-h6">{{ book.title }}</div>
      <div class="text-subtitle2 full-width text-right text-italic">
        by {{ book.authors.map(a => a.name).join(', ') }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div>
        <strong>Topics:</strong> {{ book.topics.map(a => a.name).join(', ') }}
      </div>
      <div>
        <strong>Description:</strong> {{ book.description }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'BookCard',
  props: ['book'],
  setup() {
    const hover = ref(false);

    return {
      hover
    }
  }
}
</script>
