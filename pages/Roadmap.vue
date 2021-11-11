<template>
  <div class="view">
    <div class="suggestion-header">
      <div class="flex flex-col gap-4 items-center py-2">
        <GoBack textColor="white" />
        <h1 class="font-bold">Roadmap</h1>
      </div>
      <NuxtLink to="/Feedback/New">
        <button class="sec-btn mt-3 px-7 flex items-center justify-around py-2">
          <img src="~/assets/shared/icon-plus.svg" alt="" />
          Add Feedback
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import GoBack from "~/components/GoBack.vue";
export default {
  components: { GoBack },
  data() {
    return {}
  },
};
</script>

<style scoped>
</style>