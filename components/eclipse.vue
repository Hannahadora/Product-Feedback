<template>
  <div
    class="eclipse"
    :class="{
      'bg-yellow-600': planned, 'bg-purple-800'
        : inProgress, 'bg-blue-300'
        : live,
    }"
  ></div>
</template>

<script>
export default {
    name: 'Eclipse',
  props: {
    planned: {
      type: Boolean,
    },
    inProgress: {
      type: Boolean,
    },
    live: {
      tyoe: Boolean,
    },
  },
};
</script>

<style scoped>
.eclipse {
  width: 15px;
  height: 15px;
  border-radius: 100%;
}
</style>