<template>
  <div class="books-tab flex justify-center">
    <q-scroll-area class="full-width q-px-lg" style="height: 70vh">
      <div class="row">
        <!-- todo: Implement something like Google Keep layout -->
        <div class="col-xs-6 col-sm-4 col-md-3 q-pa-sm" v-for="book in books" :key="book.id">
          <BookCard :book="book"/>
        </div>
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
//import {ref} from 'vue';
import BookCard from "components/BookCard";

export default {
  name: 'BooksTab',
  components: {BookCard},
  setup() {
    const books = [
      {
        id: 1,
        title: 'Harry Potter',
        authors: ['J. K. Rowling'],
        topics: ['Friendship', 'Love'],
        placeType: 'Shelf',
        place: { number: 1, bookcase: {info: 'Lorem ipsum lallaa'} },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu lacus. Sed finibus cursus urna, eget auctor nisl porttitor.',
      },
      {
        id: 2,
        title: 'Yes its me',
        authors: ['Samuel L. Jackson'],
        topics: ['Friendship', 'Fantasy'],
        placeType: 'Shelf',
        place: { number: 1, bookcase: {info: 'Lorem ipsum lallaa'} },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu lacus. Sed finibus cursus urna, eget auctor nisl porttitor.',
      },
      {
        id: 3,
        title: 'Asasoas assas as',
        authors: ['Stephen King'],
        topics: ['Science Fiction', 'Love', 'Friendship', 'Surviving'],
        placeType: 'Shelf',
        place: { number: 1, bookcase: {info: 'Lorem ipsum lallaa'} },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu lacus. Sed finibus cursus urna, eget auctor nisl porttitor.',
      },
      {
        id: 4,
        title: 'I like to move it move it',
        authors: ['Julian Ohonovskii', 'Vouchik Morozov'],
        topics: ['Friendship', 'Dance', 'Death'],
        placeType: 'Shelf',
        place: { number: 2, bookcase: {info: 'Lorem ipsum lallaa'} },
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in arcu lacus. Sed finibus cursus urna, eget auctor nisl porttitor.',
      },
    ];

    return {
      books
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
