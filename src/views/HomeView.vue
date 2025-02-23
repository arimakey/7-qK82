<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import AnimeCard from '@/components/AnimeCard.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useAnimeStore } from '@/stores/anime'
import { onMounted } from 'vue'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
}

const animeList = useAnimeStore() as { animes: any[] }

onMounted(() => {
  animeList.fetchAnimes()
});
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="(anime, index) in animeList.animes" :key="index">
      <AnimeCard
        :title="anime.title"
        :cover-image="anime.images.webp.image_url"
        :tags="['Acción', 'Sobrenatural']"
      />
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <div>
  </div>
</template>
