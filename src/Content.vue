<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { MyOrdersModule } from '@greenatom/epcs-image-my-orders';
import { init } from '@ace5040/demo';

const target = ref(null);

const orders = ref(null);

onMounted(() => {
  orders.value = new MyOrdersModule(target.value, {});
  orders.value.init();
  new init(target.value, {gmilourl: '0.0.0.0'});
});

onUnmounted(() => {
  orders.value.destroy();
});

</script>

<template>
  <div ref="target" class="content">
  </div>
</template>

<style scoped>
.content {
    background-color: var(--content-color);
    height: calc(100vh - var(--header-height));
}
</style>