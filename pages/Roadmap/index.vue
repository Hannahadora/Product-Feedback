<template>
  <div class="view">
    <div class="suggestion-header">
      <div class="flex flex-col gap-4 items-center py-2">
        <GoBack :whiteText="true" />
        <h1 class="font-bold text-white">Roadmap</h1>
      </div>
      <NuxtLink to="/Feedback/New">
        <button class="sec-btn mt-3 px-7 flex items-center justify-around py-2">
          <img src="~/assets/shared/icon-plus.svg" alt="" />
          Add Feedback
        </button>
      </NuxtLink>
    </div>

    <div class="flex items-start gap-10 mt-10">
      <div class="w-1/3">
        <h1 class="sugg-title">Planned (2)</h1>
        <p>Ideas prioritized for research</p>

        <div
          class="map-card border-t-8 border-yellow-600"
          v-for="(plan, index) in planned"
          :key="index"
        >
          <NuxtLink :to="`Roadmap/planned/${plan.id}`">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <eclipse :planned="true" />
                <p>Planned</p>
              </div>
              <h1 class="sugg-title">{{ plan.topic }}</h1>
              <p>
                {{ plan.description }}
              </p>
              <div class="flex items-end justify-between">
                <div class="flex flex-col gap-4">
                  <p class="sugg-tab">{{ plan.status }}</p>
                  <button
                    class="
                      upvotes
                      btn
                      flex
                      items-center
                      gap-2
                      hover:bg-gray-500
                    "
                  >
                    <img
                      class="mx-auto"
                      src="~/assets/shared/icon-arrow-up.svg"
                      alt=""
                    />
                    {{ plan.upvotes }}
                  </button>
                </div>

                <div
                  class="flex items-center justify-between"
                  v-if="plan.comments"
                >
                  <img
                    src="~/assets/shared/icon-comments.svg"
                    alt=""
                    class="mr-2"
                  />
                  <p>
                    {{ plan.comments.length }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="w-1/3">
        <h1 class="sugg-title">In-Progress (3)</h1>
        <p>Currently being developed</p>

        <div
          class="map-card border-t-8 border-purple-800"
          v-for="(progress, index) in inProgress"
          :key="index"
        >
          <NuxtLink :to="`Roadmap/inProgress/${progress.id}`">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <eclipse :inProgress="true" />
                <p>In-Progress</p>
              </div>
              <h1 class="sugg-title">{{ progress.topic }}</h1>
              <p>
                {{ progress.description }}
              </p>
              <div class="flex items-end justify-between">
                <div class="flex flex-col gap-4">
                  <p class="sugg-tab">{{ progress.status }}</p>
                  <button
                    class="
                      upvotes
                      btn
                      flex
                      items-center
                      gap-2
                      hover:bg-gray-500
                    "
                  >
                    <img
                      class="mx-auto"
                      src="~/assets/shared/icon-arrow-up.svg"
                      alt=""
                    />
                    {{ progress.upvotes }}
                  </button>
                </div>

                <div
                  class="flex items-center justify-between"
                  v-if="progress.comments"
                >
                  <img
                    src="~/assets/shared/icon-comments.svg"
                    alt=""
                    class="mr-2"
                  />
                  <p>
                    {{ progress.comments.length }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="w-1/3">
        <h1 class="sugg-title">Live (1)</h1>
        <p>Released features</p>

        <div
          class="map-card border-t-8 border-blue-300"
          v-for="(alive, index) in live"
          :key="index"
        >
          <NuxtLink :to="`Roadmap/live/${alive.id}`">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <eclipse :live="true" />
                <p>Live</p>
              </div>
              <h1 class="sugg-title">{{ alive.topic }}</h1>
              <p>
                {{ alive.description }}
              </p>
              <div class="flex items-end justify-between">
                <div class="flex flex-col gap-4">
                  <p class="sugg-tab">{{ alive.status }}</p>
                  <button
                    class="
                      upvotes
                      btn
                      flex
                      items-center
                      gap-2
                      hover:bg-gray-500
                    "
                  >
                    <img
                      class="mx-auto"
                      src="~/assets/shared/icon-arrow-up.svg"
                      alt=""
                    />
                    {{ alive.upvotes }}
                  </button>
                </div>

                <div
                  class="flex items-center justify-between"
                  v-if="alive.comments"
                >
                  <img
                    src="~/assets/shared/icon-comments.svg"
                    alt=""
                    class="mr-2"
                  />
                  <p>
                    {{ alive.comments.length }}
                  </p>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Eclipse from "~/components/eclipse.vue";
import GoBack from "~/components/GoBack.vue";
export default {
  components: { GoBack, Eclipse },
  data() {
    return {};
  },

  computed: {
    ...mapGetters("roadmap", ["planned", "inProgress", "live"]),
  },
};
</script>

<style scoped>
</style>