<template>
  <nav class="nav">
    <ul>
      <li class="nav__title">Servicez</li>
      <div>
        <li class="nav__item">Over Ons</li>
        <li class="nav__item">Cocktails</li>
        <li class="nav__item"><a href="">Nieuws</a></li>
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
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 80%;
    margin: 0 auto;
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
