<template>
  <div class="places-tab flex justify-center">
    <q-scroll-area class="full-width q-px-lg" style="height: 70vh">
      <div class="row">
        <!-- todo: Implement something like Google Keep layout -->
        <div class="col-xs-6 col-sm-4 col-md-3 q-pa-sm" v-for="place in places" :key="place.id">
          <PlaceCard :place="place" />
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
//import {ref} from 'vue';
import PlaceCard from "components/PlaceCard";

export default {
  name: 'PlacesTab',
  components: {PlaceCard},
  setup() {
    const places = [
      {
        id: 1,
        type: 'Bookcase',
        shelvesCount: 4,
        booksCount: 12,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 2,
        type: 'Box',
        booksCount: 5,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 3,
        type: 'Box',
        booksCount: 8,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 4,
        type: 'Bookcase',
        shelvesCount: 4,
        booksCount: 20,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 5,
        type: 'Bookcase',
        shelvesCount: 4,
        booksCount: 12,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 6,
        type: 'Box',
        booksCount: 5,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 7,
        type: 'Box',
        booksCount: 8,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
      {
        id: 8,
        type: 'Bookcase',
        shelvesCount: 4,
        booksCount: 20,
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur'
      },
    ];

    return {
      places
    }
  }
}
</script>
