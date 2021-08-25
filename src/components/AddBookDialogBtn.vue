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

      <q-card-section class="q-pt-none">
        <!--        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />-->
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn color="brown-10" flat label="Cancel" v-close-popup />
        <q-btn color="brown-10" flat label="Add" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import {ref} from "vue";

export default {
  name: 'AddBookDialogBtn',
  setup () {
    const showDialog = ref(false);

    return {
      showDialog
    }
  }
}
</script>
