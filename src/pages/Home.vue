<template>
  <q-page class="flex justify-center q-pa-xl q-pb-md bg-brown-1">
    <div class="flex column full-width bg-brown-7 rounded-borders shadow-5">
      <q-tabs
        v-model="tab"
        inline-label
        class="bg-brown-5 text-white shadow-2 rounded-borders"
      >
        <q-tab name="books" icon="library_books" label="Books"/>
        <q-tab name="places" icon="other_houses" label="Places"/>
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated style="background: inherit">
        <q-tab-panel name="books">

        </q-tab-panel>
        <q-tab-panel name="places">
          <PlacesTab />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import {ref} from 'vue';
import PlacesTab from "components/PlacesTab";

export default {
  name: 'MainPage',
  components: {PlacesTab},
  setup() {
    const tab = ref('books');

    return {
      tab
    }
  }
}
</script>
