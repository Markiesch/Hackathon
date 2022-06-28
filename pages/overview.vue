<script setup lang="ts">
const { data: events } = await useFetch("/api/events");

definePageMeta({
  layout: "admin",
});
</script>

<template>
  <div>
    <div>Evenementen</div>
    <div class="card--container">
      <div class="card" v-for="event in events">
        <h2 class="card--title">{{ event.name }}</h2>
        <p class="card--text">{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card--container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid rgba(black, 0.2);
  padding: 1rem;
}

h2 {
  font-size: 1.25rem;
}
</style>
