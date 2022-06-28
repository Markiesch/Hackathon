<script setup lang="ts">
import events from "@/data/events";
</script>

<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <div>overview</div>
      <div class="card--container">
        <div class="card" v-for="event in events">
          <h2 class="card--title">{{ event.name }}</h2>
          <p class="card--text">{{ event.description }}</p>
          <button @click="event.test = !event.test">{{ event.test }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 4rem;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;

  & > * {
    height: 100%;
  }
}

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
