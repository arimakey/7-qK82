<script setup lang="ts">
  defineProps<{
    coverImage: string
    title: string
    tags: string[]
  }>()
</script>

<template>
  <div class="anime-card">
    <img :src="coverImage" :alt="title" />
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-meta">
        <span v-for="(tag, index) in tags" :key="index" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.anime-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.anime-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.anime-card img {
  width: 100%;
  /* Mantiene un formato vertical (aspect-ratio 2:3) */
  aspect-ratio: 2 / 3;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.anime-card:hover img {
  filter: brightness(0.7);
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: linear-gradient(0deg, rgba(15, 16, 22, 0.95) 0%, rgba(15, 16, 22, 0) 100%);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.anime-card:hover .card-content {
  transform: translateY(0);
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-xs);
}

.card-meta {
  font-size: 0.85rem;
  color: var(--text-secondary);
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xs);
}

.tag {
  background-color: var(--primary);
  color: var(--text-primary);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Estilos para el botón de like */
.like-button {
  background: transparent;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 4px 8px;
  transition: color 0.3s ease;
}

.like-button:hover {
  color: var(--primary);
}
</style>
