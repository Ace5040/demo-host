<script setup>
const props = defineProps(['text']);
</script>

<template>
  <div class="header">
    <div>{{props.text}}</div>
  </div>
</template>

<style scoped>
.header {
    background-color: var(--header-color);
    height: var(--header-height);
    vertical-align: middle;
}
.header > * {
  display: inline-block;
}

</style>