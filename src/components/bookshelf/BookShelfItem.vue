<script setup>
import BookItem from "./BookItem.vue"
</script>

<template>
    <div class="bookshelf container-fluid">
        <div class="row">
            <div class="col">
                <BookItem image-path="src/assets/images/books/clean_code.jpg" />
            </div>
            <div class="col">
                <BookItem image-path="https://m.media-amazon.com/images/I/81OvszBEdhL._SL1500_.jpg" />
            </div>
            <div class="col">
                <BookItem image-path="https://m.media-amazon.com/images/I/71f743sOPoL._SL1500_.jpg" />
            </div>

        </div>
    </div>
</template>
