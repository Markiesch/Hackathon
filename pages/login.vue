<template>
  <section>
    <div>
      <img src="/hero.jpg" alt="People celebrating together" />
    </div>
    <form>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam corporis voluptatem reprehenderit perspiciatis aspernatur ipsum quod esse earum veritatis, rem nam doloremque nostrum omnis
        voluptates architecto. Voluptate officiis ipsam iste!
      </p>
      <label for="username">Gebruikersnaam</label>
      <input type="text" id="username" />
      <label for="password">Wachtwoord</label>
      <input type="password" id="password" />
      <button class="button--login" @click="login">Login</button>
      <NuxtLink to="/" class="button--back">Terug</NuxtLink>
    </form>
  </section>
</template>

<script lang="ts" setup>
function login() {
  // TODO inloggen
}
</script>

<style lang="scss" scoped>
@use "@/styles/pages/login";
</style>
