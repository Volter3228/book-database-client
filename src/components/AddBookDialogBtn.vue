<template>
  <q-btn flat round dense icon="book" @click="showDialog = true">
    <q-tooltip anchor="bottom middle" self="top middle" :offset="[5, 3]" class="bg-brown-9">
      <strong>Add new book</strong>
    </q-tooltip>
  </q-btn>
  <q-dialog v-model="showDialog">
    <q-card style="min-width: 350px" class="bg-brown-1">
      <q-card-section>
        <div class="text-h6 text-brown-10">Add new book</div>
      </q-card-section>
      <q-form
        @submit="onSubmit" @reset="resetForm"
        class="q-gutter-md"
      >
        <q-card-section class="q-pt-none q-gutter-sm">
          <div>
            Title:
            <q-input outlined v-model="form.title" dense color="brown-9"/>
          </div>
          <TagsInput label="Authors" :tags="form.authors" @add="addAuthor" @remove="removeAuthor"/>
          <TagsInput label="Topics" :tags="form.topics" @add="addTopic" @remove="removeTopic"/>
          <PlacesInput :places="places" :selected="place" @input="handlePlaceInput" />
          <div v-if="isBookcase">
            Shelf number:
            <q-input
              v-model.number="form.shelfNumber"
              outlined dense min="1" :max="maxShelves" color="brown-9"
              type="number" style="width: 50%"
            />
          </div>
          <div>
            Description:
            <q-input
              v-model="form.description" maxlength="999"
              outlined type="textarea" autogrow dense color="brown-9"
            />
          </div>
        </q-card-section>
        <q-card-actions align="right" class="text-primary">
          <q-btn color="brown-10" flat label="Cancel" v-close-popup/>
          <q-btn color="brown-10" flat label="Add" @click="onSubmit"/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import {computed, reactive, ref, watchEffect, watch} from "vue";
import {useStore} from "vuex";
import {useQuasar} from 'quasar';
import TagsInput from "components/TagsInput";
import PlacesInput from "components/PlacesInput";

export default {
  name: 'AddBookDialogBtn',
  components: {TagsInput, PlacesInput},
  setup() {
    const initialForm = {
      title: '',
      authors: [],
      topics: [],
      shelfNumber: 1,
      description: ''
    }

    const form = reactive({...initialForm});
    const showDialog = ref(false);
    const authorInput = ref('');
    const topicInput = ref('');
    const place = ref(null);

    const store = useStore();
    const $q = useQuasar();

    if (!store.state["place/places"]) store.dispatch('place/getPlaces');

    const places = computed(() => store.state.place.places.map((p, index) => (
      {
        label: `${p.type} #${p.id}`,
        value: index,
        info: p.info,
      }
    )));

    const isBookcase = computed(() => {
      const placeValue = place.value;
      if (placeValue) {
        const index = placeValue.value;
        return index !== null && store.state.place.places[index].type === 'bookcase';
      }
      return false;
    });

    const maxShelves = computed(() => {
      if (place.value) return store.state.place.places[place.value.value].shelves_count;

      return 0;
    });

    const handlePlaceInput = (value) => place.value = value;
    const resetForm = () => Object.assign(form, initialForm);
    const onSubmit = () => {
      if (!form.title || !form.authors.length || !form.topics.length || !place.value)
        return $q.notify({message: 'Fill all fields!', color: 'negative'});

      const storePlace = store.state.place.places[place.value.value];
      store.dispatch(
        'book/addBook',
        {...form, placeId: storePlace.id, placeType: storePlace.type}
      ).then(() => { showDialog.value = false; });
    }

    watchEffect(() => !showDialog.value && resetForm());
    watch(place, () => { form.shelfNumber = 1 });

    return {
      form,
      showDialog,
      authorInput,
      topicInput,
      place,

      places,
      isBookcase,
      maxShelves,

      addAuthor: (val) => form.authors.push(val),
      removeAuthor: (index) => form.authors.splice(index, 1),
      addTopic: (val) => form.topics.push(val),
      removeTopic: (index) => form.topics.splice(index, 1),
      handlePlaceInput,
      resetForm,
      onSubmit,
    }
  }
}
</script>
