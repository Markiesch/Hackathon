<template>
  <div class="container">
    <Sidebar />
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 4rem;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;

  & > * {
    height: 100%;
  }
}
</style>
