<template>
  <div class="books-tab flex justify-center">
    <div class="full-width">
      <div class="row justify-center q-mb-md">
        <div class="col col-xs-12 col-md-9">
          <Search
            @search="onSearch"
            :filter-value="state.filter" @filterinput="onFilterChange"
          />
        </div>
      </div>
    </div>
    <q-scroll-area class="full-width q-px-lg books" style="height: calc(65vh - 40px);">
      <div class="row">
        <!-- todo: Implement something like Google Keep layout -->
        <div class="col-xs-12 col-sm-6 col-md-3 q-pa-sm" v-for="book in state.searchBooks" :key="book.created_at">
          <BookCard :book="book"/>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed, reactive, onMounted} from "vue";
import BookCard from "components/BookCard";
import Search from "components/Search";

export default {
  name: 'BooksTab',
  components: {BookCard, Search},
  setup() {
    const state = reactive({
      filter: 'everything',
      searchBooks: [],
      searchString: '',
    });

    const store = useStore();

    onMounted(() => store.dispatch('book/getBooks').then(res => state.searchBooks = res));

    const storeBooks = computed(() => store.state.book.books);

    const filterBooks = () => {
      if (state.searchString !== '') {
        const regex = new RegExp(state.searchString, "gi");
        let searchBooks = store.state.book.books;

        switch(state.filter) {
          case 'everything': searchBooks = searchBooks.filter(b => {
            const authorsNames = b.authors.map(a => a.name).join(', ');
            const topicsNames = b.topics.map(t => t.name).join(', ');
            return regex.test(b.title) || regex.test(authorsNames) || regex.test(topicsNames);
          }); break;
          case 'title': searchBooks = searchBooks.filter(b => regex.test(b.title)); break;
          case 'author': searchBooks = searchBooks.filter(b => {
            const authorsNames = b.authors.map(a => a.name).join(', ');
            return regex.test(authorsNames);
          }); break;
          case 'topic': searchBooks = searchBooks.filter(b => {
            const topicsNames = b.topics.map(t => t.name).join(', ');
            return regex.test(topicsNames);
          }); break;
          default: break;
        }
        state.searchBooks = searchBooks;
      } else state.searchBooks = store.state.book.books;
    }

    const onFilterChange = (value) => {
      state.filter = value;
      console.log(state.searchBooks);
      filterBooks();
    };

    const onSearch = (value) => {
      state.searchString = value;
      filterBooks();
    };

    return {
      state,
      storeBooks,
      filterBooks,
      onFilterChange,
      onSearch,
    }
  },
  watch: {
    storeBooks: {
      handler() {
        this.filterBooks();
      },
      deep: true,
    },
  }
}
</script>

<style lang="scss" scoped>
.books {
  height: calc(70vh - 50px);
}
</style>
