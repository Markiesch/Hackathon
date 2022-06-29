<script setup lang="ts">
import { events } from "~~/data/events";

const route = useRoute();

const id = parseInt(<string>route.params.id);

const event = events.find((event) => event.id === id);

const joinedEvents = ref([]);

onMounted(() => {
  refreshLocalstorage();
});

function refreshLocalstorage() {
  joinedEvents.value = JSON.parse(localStorage.getItem("joinedEvents") ?? "[]");
}

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
    <img class="image__cover" :src="`/tours/${event.imageCover}`" alt="" />
    <h1>{{ event.name }}</h1>
    <h2>{{ event.summary }}</h2>
    <p>{{ event.description }}</p>

    <button v-if="joinedEvents.includes(event.id)" @click="leaveEvent(event)">Joined</button>
    <button v-else @click="joinEvent(event)">Join {{ event.name }}</button>
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

h1 {
  padding: 2rem 0 1rem 0;
  font-size: 2rem;
}

h2 {
  font-size: 1.25rem;
  color: $clr-neutral-800;
  padding-bottom: 1rem;
}

p {
  color: $clr-neutral-400;
  padding-bottom: 1rem;
}
button {
  border: none;
  background-color: $clr-primary-400;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.25rem;
}
</style>
