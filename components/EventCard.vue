<script setup lang="ts">
import { IEvent } from "~~/data/events";

defineProps<{ event: IEvent }>();

const joinedEvents = ref([]);

onMounted(() => {
  joinedEvents.value = JSON.parse(localStorage.getItem("joinedEvents") ?? "[]");
});
</script>

<template>
  <div class="card">
    <img class="card__cover" :src="`/tours/${event.imageCover}`" alt="" />
    <div class="card__content">
      <h2 class="card--title">{{ event.name }}</h2>
      <p class="card__date">{{ event.startDates[0] }}</p>
      <p class="card__text">{{ event.summary }}</p>

      <div class="card__actions">
        <NuxtLink :to="`/event/${event.id}`">Lees verder</NuxtLink>
        <p v-if="joinedEvents.includes(event.id)">joined</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/abstract/variables" as *;

.card {
  border-radius: 0.5rem;
  overflow: hidden;

  &__cover {
    height: 12.5rem;
    width: 100%;
    object-fit: cover;
  }

  &__content {
    border: 1px solid rgba(black, 0.2);
    border-top: none;
    border-radius: 0 0 0.5rem 0.5rem;
    padding: 1.5rem;
  }

  &__date {
    background-color: #efefef;
    width: max-content;
    font-size: 0.9rem;
    padding: 0.75em 1em;
    margin: 0.5rem 0 1rem 0;
    border-radius: 0.5rem;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 1.25rem;
  }

  &__text {
    color: $clr-neutral-400;
    padding: 0rem 0 1.25rem 0;
  }

  a {
    text-decoration: underline;
  }
}
</style>
