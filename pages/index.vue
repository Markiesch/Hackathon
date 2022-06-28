<template>
  <div>
    <Navigation></Navigation>
    <section>
      <div>
        <h1>Samen tegen eenzaamheid</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ex tempora qui. <br />
          Velit architecto, deserunt, autem porro, dolor provident jatoch
        </p>
        <div>
          <NuxtLink to="/overview" class="cta--overview">Overzicht</NuxtLink>
          <NuxtLink to="/about" class="cta--learn-more">Learn More</NuxtLink>
        </div>
      </div>

      <div>
        <img src="/hero.jpg" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/pages/index";
</style>
