<script setup lang="ts">
import { events } from "~~/data/events";
const route = useRoute();

const event = events.find((event) => event.id === parseInt(<string>route.params.id));
const joinedEvents = ref([]);
const isLoaded = ref(false);

onMounted(() => {
  joinedEvents.value = JSON.parse(localStorage.getItem("joinedEvents") ?? "[]");
  isLoaded.value = true;
});

function joinEvent(event) {
  joinedEvents.value.push(event.id);
  saveData();
}

function leaveEvent(event) {
  const index = joinedEvents.value.indexOf(event.id);
  joinedEvents.value.splice(index, 1);
  saveData();
}

function saveData() {
  localStorage.setItem("joinedEvents", JSON.stringify([...new Set([...joinedEvents.value])]));
}
</script>

<template>
  <section>
    <Breadcrumbs>{{ event.name }}</Breadcrumbs>
    <img class="image__cover" :src="`/tours/${event.imageCover}`" alt="" />
    <div class="container">
      <h2>{{ event.summary }}</h2>
      <p>{{ event.description }}</p>

      <template v-if="isLoaded">
        <button v-if="joinedEvents.includes(event.id)" @click="leaveEvent(event)">Uitschrijven voor {{ event.name }}!</button>
        <button v-else @click="joinEvent(event)">Doe mee met {{ event.name }}</button>
      </template>

      <div class="image--container">
        <img v-for="image in event.images" :src="`/tours/${image}`" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/abstract/variables" as *;

.image__cover {
  border-radius: 0.5rem;
  height: 60vh;
  max-height: 40rem;
  width: 100%;
  object-fit: cover;
}

h2 {
  font-size: $fontsize-500;
  color: $clr-neutral-800;
  padding: 2rem 0 1rem 0;
}

p {
  color: $clr-neutral-400;
  padding-bottom: 1rem;
}

.image--container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 2rem 0;

  img {
    display: block;
    border-radius: 0.25rem;
  }
}

button {
  border: none;
  background-color: $clr-primary-400;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.25rem;
  margin: 1rem 0 2rem 0;
}
</style>
