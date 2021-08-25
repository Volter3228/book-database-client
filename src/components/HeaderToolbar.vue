<template>
  <q-toolbar>
    <q-toolbar-title>
      <q-avatar square class="q-mr-sm">
        <img src="icons/favicon-128x128.png" alt="logo"/>
      </q-avatar>
      <strong>Book Database</strong>
    </q-toolbar-title>
    <q-space/>
    <Search/>
    <q-btn flat round dense icon="book">
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[5, 3]">
        <strong>Add new book</strong>
      </q-tooltip>
    </q-btn>
    <q-btn flat round dense icon="inventory_2">
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[5, 3]">
        <strong>Add new place</strong>
      </q-tooltip>
    </q-btn>
  </q-toolbar>
</template>

<script>
import Search from "components/Search";

export default {
  name: 'HeaderToolbar',
  components: {Search}
}
</script>
