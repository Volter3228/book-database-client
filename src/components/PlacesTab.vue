<template>
  <div class="places-tab flex justify-center">
    <q-scroll-area class="full-width q-px-lg" style="height: 70vh">
      <div class="row">
        <div class="col-xs-6 col-sm-4 col-md-3 q-pa-sm" v-for="place in places" :key="place.id">
          <q-card
            class="place-card full-width"
          >
            <q-img
              :src="place.type === 'Bookcase' ? 'images/bookcase.jpg' : 'images/box.jpg'"
              :ratio="16/9"
            />
            <q-card-section>
              <div class="text-h6">{{ place.type }}</div>
              <div class="text-subtitle2">{{ place.booksCount }} {{ place.booksCount > 1 ? 'books' : 'book' }} </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              {{ place.info }}
            </q-card-section>
          </q-card>
        </div>

      </div>

    </q-scroll-area>

  </div>
</template>

<script>
export default {
  name: 'PlacesTab',
  setup() {
    const places = [
      { id: 1, type: 'Bookcase', shelvesCount: 4, booksCount: 12, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 2, type: 'Box', booksCount: 5, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 3, type: 'Box', booksCount: 8, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 4, type: 'Bookcase', shelvesCount: 4, booksCount: 20, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 5, type: 'Bookcase', shelvesCount: 4, booksCount: 12, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 6, type: 'Box', booksCount: 5, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 7, type: 'Box', booksCount: 8, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
      { id: 8, type: 'Bookcase', shelvesCount: 4, booksCount: 20, info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur' },
    ];

    return {
      places
    }
  }
}
</script>
