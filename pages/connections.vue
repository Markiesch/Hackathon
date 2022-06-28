<script setup lang="ts">
interface Item {}

const events: Item[] = [];
</script>

<template>
  <div>
    <Sidebar />

    <div>
      <div v-for="event in events"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
