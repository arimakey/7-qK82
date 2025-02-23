import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    animes: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchAnimes() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('https://api.jikan.moe/v4/seasons/now')

        if (!response.ok) throw new Error('Error al obtener las películas');

        const data = await response.json()

        console.log(data.data)
        this.animes = data.data
      } catch (err) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getAnimes() {
      return this.animes
    },
  },
})
