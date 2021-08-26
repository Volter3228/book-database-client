<template>
  <q-btn flat round dense icon="inventory_2" @click="showDialog = true">
    <q-tooltip anchor="bottom middle" self="top middle" :offset="[5, 3]" class="bg-brown-9">
      <strong>Add new place</strong>
    </q-tooltip>
  </q-btn>
  <q-dialog v-model="showDialog">
    <q-card style="min-width: 350px" class="bg-brown-1">
      <q-card-section>
        <div class="text-h6 text-brown-10">Add new place</div>
      </q-card-section>

      <q-form
        @submit="onSubmit" @reset="resetForm"
        class="q-gutter-md"
      >
        <q-card-section class="q-pt-none q-gutter-sm">
          <div>
            Type:
            <q-option-group
              :options="[{label: 'Bookcase', value: 'bookcase'}, {label: 'Box', value: 'box'}]"
              type="radio" color="brown-9"
              v-model="form.type" inline
            />
          </div>
          <div v-if="form.type === 'bookcase'">
            Shelves Count:
            <q-input
              v-model.number="form.shelvesCount"
              outlined dense min="1"
              type="number" style="width: 50%"
            />
          </div>
          <div>
            Info:
            <q-input
              v-model="form.info" maxlength="999"
              outlined type="textarea" autogrow dense
            />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn color="brown-10" flat label="Cancel" v-close-popup />
          <q-btn color="brown-10" flat label="Add" type="submit"/>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref, reactive, watchEffect} from 'vue';
import {useStore} from 'vuex';

export default {
  name: 'AddPlaceDialogBtn',
  setup() {
    const initialForm = {
      type: 'bookcase',
      shelvesCount: 1,
      info: ''
    }

    const form = reactive({ ...initialForm });
    const showDialog = ref(false);

    const store = useStore();

    const resetForm = () => Object.assign(form, initialForm);

    watchEffect(() => !showDialog.value && resetForm());

    return {
      showDialog,
      form,
      onSubmit: () => store.dispatch('place/addPlace', {...form}),
      resetForm,
    }
  }
}
</script>
