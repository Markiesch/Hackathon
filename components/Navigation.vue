<script setup lang="ts">
const showMenu = ref(false);
const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <nav>
    <NuxtLink to="/" class="logo">Eventz</NuxtLink>
    <div class="link--container" :class="{ show: showMenu }">
      <div>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">Over ons</NuxtLink>
        <NuxtLink to="/events">Evenementen</NuxtLink>
      </div>
      <div>
        <NuxtLink to="/login">Login</NuxtLink>
      </div>
    </div>
    <button aria-label="open menu" type="button" @click="toggleMenu" class="menu--icon__container">
      <span class="menu--icon"></span>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
@use "@/styles/layout/navigation";
</style>
