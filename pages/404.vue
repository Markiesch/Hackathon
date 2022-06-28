<template>
  <section>
    <p class="text-body">Er is iets misgegaan...</p>
    <h1 class="title">Oops! Pagina niet gevonden.</h1>
    <h2 class="subtitle">Misschien vind u hier wat u nodig heeft?</h2>
    <div class="link--container">
      <div class="link">
        <NuxtLink to="/">home</NuxtLink>
      </div>
      <NuxtLink class="link" to="/">home</NuxtLink>
      <NuxtLink class="link" to="/">home</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/404" as notFound;
</style>
