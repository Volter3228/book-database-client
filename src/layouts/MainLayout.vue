<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-brown-6">
      <HeaderToolbar />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderToolbar from "components/HeaderToolbar";

export default {
  name: 'MainLayout',
  components: { HeaderToolbar }
}
</script>
