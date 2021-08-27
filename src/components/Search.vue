<template>
  <div class="row justify-center">
    <q-btn-dropdown text-color="white" label="Filter" dropdown-icon="category" class="q-mr-sm q-mb-sm" style="width: 110px;">
      <q-list class="bg-brown-1 ">
        <q-item
          v-for="filter in filters" :key="filter"
          clickable v-close-popup @click="onFilterChange(filter)"
        >
          <q-item-section>
            <q-item-label :class="filterValue === filter && 'text-bold'">
              By <span class="text-capitalize">{{ filter }}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <q-input
      dark dense standout v-model="searchString"
      placeholder="Search book..." @keypress.stop.enter="$emit('search', searchString)"
      class="search-input"
    >
      <template v-slot:append>
        <q-icon v-if="searchString === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="onClear" />
      </template>
    </q-input>
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Search',
  props: ['filterValue'],
  emits: ['filterinput', 'search'],
  setup(props, {emit}) {
    const searchString = ref('');
    const filters = ['everything', 'title', 'author', 'topic'];

    const onFilterChange = (filter) => {
      if (props.filterValue === filter) return;
      emit('filterinput', filter);
    }

    const onClear = () => {
      searchString.value = '';
      emit('search', '');
    }

    return {
      searchString,
      filters,
      onFilterChange,
      onClear,
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  width: 40%;
}
@media screen and (max-width: 553px) {
  .search-input {
    width: calc(100% - 130px) !important;
  }
}
</style>
