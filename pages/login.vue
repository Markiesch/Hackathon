<template>
  <div class="container">
    <div>
      <img src="/hero.jpg" alt="People celebrating together" />
    </div>
    <form @submit.prevent>
      <h1>Welkom terug</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsam nesciunt architecto quibusdam harum animi.</p>
      <label for="username">Gebruikersnaam</label>
      <input v-model="username" type="text" id="username" />
      <label for="password">Wachtwoord</label>
      <input v-model="password" type="password" id="password" />
      <button class="button--login" @click="login">Login</button>
      <NuxtLink to="/" class="button--back">Terug</NuxtLink>
    </form>
  </div>
</template>

<script lang="ts" setup>
const username = ref("");
const password = ref("");

const router = useRouter();

function login() {
  if (username.value === "admin" && password.value === "password") {
    router.push("/overview");
  }
  // TODO inloggen
}
</script>

<style lang="scss" scoped>
@use "@/styles/pages/login";
</style>
