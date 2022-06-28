<template>
  <nav class="nav">
    <ul>
      <li class="nav__title">
        <NuxtLink to="/">Servicez</NuxtLink>
      </li>
      <div>
        <li class="nav__item">
          <NuxtLink to="/about">Over Ons</NuxtLink>
        </li>
        <li class="nav__item">Evenementen</li>
        <li class="nav__item">
          <NuxtLink to="/">Nieuws</NuxtLink>
        </li>
      </div>
      <li class="nav_login"><a href="">Login</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  background: rgb(255, 255, 255);
  height: 4rem;
  top: 0;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  &__title {
    top: 25px;
    list-style-type: none;
    font-weight: bolder;
  }

  &__item {
    display: inline-block;
    margin: 1rem;
  }
}

.nav_login {
  display: inline-block;
}
</style>
