<template>
  <q-btn-dropdown color="" label="Filter" dropdown-icon="category" class="q-mr-sm">
    <q-list class="bg-brown-1">
      <q-item
        v-for="filter in ['All', 'By Title', 'By Author', 'By Topic']" :key="filter"
        clickable v-close-popup @click="onFilterChange(filter)"
      >
        <q-item-section>
          <q-item-label :class="currentFilter === filter && 'text-bold'">
            {{ filter }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
  <q-input
    dark dense standout v-model="searchString"
    @keypress.enter="onSearch"
    placeholder="Search book..."
    class="q-mr-md"
  >
    <template v-slot:append>
      <q-icon v-if="searchString === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="searchString = ''" />
    </template>
  </q-input>

</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Search',
  setup() {
    const searchString = ref('');
    const currentFilter = ref('All');

    const onFilterChange = (filter) => {
      if (currentFilter.value === filter) return;

      currentFilter.value = filter;
      switch(filter) {
        case 'All': break;
        case 'By Title': break;
        case 'By Author': break;
        case 'By Topic': break;
        default: break;
      }
    }

    const onSearch = () => {
      if (searchString.value) {
        console.log('Search');
      }
    }

    return {
      searchString,
      currentFilter,
      onSearch,
      onFilterChange
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
