<template>
  <div class="places-tab flex justify-center">
    <q-scroll-area class="full-width q-px-lg" style="height: 70vh">
      <div class="row">
        <!-- todo: Implement something like Google Keep layout -->
        <div class="col-xs-12 col-sm-6 col-md-3 q-pa-sm" v-for="place in places" :key="place.created_at">
          <PlaceCard :place="place" />
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import {computed, onMounted} from 'vue';
import { useStore } from 'vuex';

import PlaceCard from "components/PlaceCard";

export default {
  name: 'PlacesTab',
  components: {PlaceCard},
  setup() {
    const store = useStore();

    onMounted(() => store.dispatch('place/getPlaces'));

    return {
      places: computed(() => store.state.place.places),
    }
  }
}
</script>
