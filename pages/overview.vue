<template>
  <div>
    <Sidebar />
    <div>overview</div>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 100vh;

  & > * {
    height: 100%;
  }
}
</style>
