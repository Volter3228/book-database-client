<template>
  <q-toolbar>

    <q-toolbar-title>
      <q-avatar square class="q-mr-sm">
        <img src="icons/favicon-128x128.png" alt="logo"/>
      </q-avatar>
      <strong>Book Database</strong>
    </q-toolbar-title>

    <q-space/>

    <AddBookDialogBtn />
    <AddPlaceDialogBtn />

  </q-toolbar>
</template>

<script>
import AddBookDialogBtn from "components/AddBookDialogBtn";
import AddPlaceDialogBtn from "components/AddPlaceDialogBtn";

export default {
  name: 'HeaderToolbar',
  components: {AddPlaceDialogBtn, AddBookDialogBtn}
}
</script>
