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

    <div class="flex items-start gap-10">
      <div class="w-1/3 mt-6">
        <h1 class="sugg-title">Planned (2)</h1>
        <p>Ideas prioritized for research</p>

        <div class="map-card border-t-8 border-yellow-600 ">
          <div class="flex flex-col gap-4">
            <p>Planned</p>
            <h1 class="sugg-title">More comprehensive reports</h1>
            <p>
              It would be great to see a more detailed breakdown of solutions.
            </p>
            <div class="flex items-end justify-between">
              <div class="flex flex-col gap-4">
                <p class="sugg-tab">Feature</p>
                <button class="upvotes btn flex items-center gap-2 hover:bg-gray-500">
                  <img
                    class="mx-auto"
                    src="~/assets/shared/icon-arrow-up.svg"
                    alt=""
                  />
                  123
                </button>
              </div>

              <div class="flex items-center justify-between">
                <img
                  src="~/assets/shared/icon-comments.svg"
                  alt=""
                  class="mr-2"
                />
                <p>
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/3">
        <h1>In-Progress (3)</h1>
        <p>Currently being developed</p>

        <div class="map-card"></div>
      </div>

      <div class="w-1/3">
        <h1>Live (1)</h1>
        <p>Released features</p>

        <div class="map-card"></div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "~/components/GoBack.vue";
export default {
  components: { GoBack },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>