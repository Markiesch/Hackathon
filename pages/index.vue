<script setup lang="ts">
import { events } from "~~/data/events";
</script>

<template>
  <div>
    <section class="hero">
      <div>
        <h1>Samen tegen eenzaamheid</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ex tempora qui. Velit architecto, deserunt, autem porro, dolor provident jatoch</p>
        <NuxtLink to="/events" class="cta--overview">Overzicht</NuxtLink>
      </div>
      <div class="image--container">
        <div>
          <img src="/hero1.png" alt="" />
        </div>
        <div>
          <img src="/hero2.png" alt="" />
        </div>
        <div>
          <img src="/hero3.png" alt="" />
        </div>
        <div>
          <img src="/hero4.png" alt="" />
        </div>
        <div>
          <img src="/hero5.png" alt="" />
        </div>
      </div>
    </section>

    <section class="event__section">
      <h2>Evenementen</h2>
      <div class="event__container">
        <EventCard v-for="event in events.slice(0, 3)" :event="event" />
      </div>
      <NuxtLink to="/events">Bekijk alle evenementen</NuxtLink>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/index";
</style>
