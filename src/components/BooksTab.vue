<template>
  <div class="books-tab flex justify-center">
    <q-scroll-area class="full-width q-px-lg" style="height: 70vh">
      <div class="row">
        <!-- todo: Implement something like Google Keep layout -->
        <div class="col-xs-12 col-sm-6 col-md-3 q-pa-sm" v-for="book in books" :key="book.created_at">
          <BookCard :book="book"/>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";
import BookCard from "components/BookCard";

export default {
  name: 'BooksTab',
  components: {BookCard},
  setup() {
    const store = useStore();
    store.dispatch('book/getBooks');
    return {
      books: computed(() => store.state.book.books),
    }
  }
}
</script>

<style lang="scss" scoped>
.place-card {
  &:hover {
    box-shadow: 1px 4px 10px #333333;
    -webkit-transition: box-shadow .1s ease-in;
  }
}
</style>
