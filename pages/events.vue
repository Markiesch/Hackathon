<script setup lang="ts">
import { events } from "~~/data/events";
</script>

<template>
  <section>
    <h1>Evenementen</h1>
    <div class="card--container">
      <EventCard :event="event" class="card" v-for="event in events" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstract/variables" as *;

h1 {
  font-size: $fontsize-600;
  color: $clr-neutral-800;
  padding-bottom: 1.5rem;
}

.card--container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 1.5rem;
}
</style>
