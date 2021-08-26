<template>
  <div>
    Place:
    <q-select
      outlined :options="places" dense @update:model-value="(value) => $emit('input', value)"
      class="text-capitalize" popup-content-class="text-capitalize bg-brown-1" :model-value="selected"
      transition-show="jump-up" transition-hide="jump-up" color="brown-9"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="info" color="brown-9">
              <q-tooltip
                anchor="top middle" self="top middle" :offset="[5, 30]" class="bg-brown-9"
                style="max-width: 150px"
              >
                {{ scope.opt.info }}
              </q-tooltip>
            </q-icon>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: 'PlacesInput',
  props: ['places', 'selected'],
  emits: ['input'],
  setup () {
    const store = useStore();

    if (!store.state["place/places"]) store.dispatch('place/getPlaces');

    return {

    }
  }
}
</script>
