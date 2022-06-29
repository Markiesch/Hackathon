<script setup lang="ts">
const username = ref("");
const password = ref("");

const router = useRouter();

function login() {
  if (username.value === "admin" && password.value === "password") {
    router.push("/events");
  }
}

definePageMeta({
  layout: false,
});
</script>

<template>
  <div class="container">
    <div>
      <img src="/login.jpg" alt="People celebrating together" />
    </div>
    <form @submit.prevent>
      <h1>Welkom terug</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsam nesciunt architecto quibusdam harum animi.</p>
      <label for="username">Gebruikersnaam</label>
      <input v-model="username" type="text" id="username" />
      <label for="password">Wachtwoord</label>
      <input v-model="password" type="password" id="password" />

      <div class="login-message">
        <svg viewBox="0 0 576 512">
          <path
            opacity="0.3"
            d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 297.52 352h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 265.68 192h44.64a16 16 0 0 1 15.92 17.59z"
          ></path>
          <path
            d="M310.32 192h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 278.48 352h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 310.32 192zM288 384a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
          ></path>
        </svg>
        <p>Deze website is enkel een prototype. Klik op de login knop om het overzicht te openen.</p>
      </div>

      <button class="button--login" @click="login">Login</button>
      <NuxtLink to="/" class="button--back">Terug</NuxtLink>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/login";
</style>
