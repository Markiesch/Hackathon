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
      <p class="card__date">{{ event.startDates[0] }}</p>
      <h2 class="card--title">{{ event.name }}</h2>
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
    height: 15rem;
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
    background-color: #f5f5f5;
    width: max-content;
    font-size: 0.9rem;
    padding: 0.75rem;
    border-radius: 0.25rem;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    padding-top: 1rem;
    font-size: 1.5rem;
  }

  &__text {
    color: $clr-neutral-400;
    padding: 0.75rem 0 1.5rem 0;
  }

  a {
    text-decoration: underline;
    color: $clr-primary-400;
  }
}
</style>
