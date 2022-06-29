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

    <section class="about__section">
      <div>
        <h2>Over ons</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur numquam maiores assumenda iusto obcaecati! Officia, beatae sapiente debitis rem quo doloremque atque mollitia, soluta
          possimus officiis voluptates sed eveniet nemo cumque odio fuga consequuntur nesciunt! Commodi maiores aliquam nostrum rem labore. Modi ad ab, quis eos officia eveniet ipsam debitis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt corporis laborum tempore delectus ad aut in vitae pariatur vero expedita praesentium voluptates voluptate iste
          rem alias error, corrupti adipisci odit velit nobis ratione. Voluptates magnam beatae repellendus vitae vel eius temporibus repellat blanditiis aut, ab fugit inventore possimus. Aspernatur
          dolores vitae fugiat.
        </p>
        <NuxtLink to="/about">Lees verder</NuxtLink>
      </div>
      <div>
        <img src="/about.jpg" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/index";
</style>
