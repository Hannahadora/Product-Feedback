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

    <div class="md:hidden flex items-start justify-between px-3 py-6 shadow">
      <h1
        class="text-gray-500 text-sm cursor-pointer px-3"
        :class="{ 'text-gray-900 font-bold': showedType === 'planned' }"
        @click="showedType = 'planned'"
      >
        Planned {{ "(" + plannedRequests.length + ")" }}
      </h1>
      <h1
        class="text-gray-500 text-sm cursor-pointer px-3"
        :class="{ 'text-gray-900 font-bold': showedType === 'inProgress' }"
        @click="showedType = 'inProgress'"
      >
        In-Progress {{ "(" + inProgress.length + ")" }}
      </h1>
      <h1
        class="text-gray-500 text-sm cursor-pointer px-3"
        :class="{ 'text-gray-900 font-bold': showedType === 'live' }"
        @click="showedType = 'live'"
      >
        Live {{ "(" + liveRequests.length + ")" }}
      </h1>
    </div>

    <div class="md:flex items-start lg:gap-10 md:gap-2 mt-10 md:mx-auto mx-6">
      <div class="md:w-1/3 w-full" :class="showedType === 'planned' || showedType === '' ? 'block' : 'hidden'">
        <h1 class="sugg-title">
          Planned {{ "(" + plannedRequests.length + ")" }}
        </h1>
        <p>Ideas prioritized for research</p>

        <div v-for="x in plannedRequests" :key="x.id">
          <div class="map-card border-t-8 border-yellow-600">
            <NuxtLink :to="`/Feedback/${x.id}`">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <eclipse :planned="true" />
                  <p>{{ x.status }}</p>
                </div>
                <h1 class="sugg-title">{{ x.title }}</h1>
                <p>
                  {{ x.description }}
                </p>
                <div class="flex items-end justify-between">
                  <div class="flex flex-col gap-4">
                    <p class="sugg-tab">{{ x.category }}</p>
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
                      {{ x.upvotes }}
                    </button>
                  </div>

                  <div
                    class="flex items-center justify-between"
                    v-if="x.comments"
                  >
                    <img
                      src="~/assets/shared/icon-comments.svg"
                      alt=""
                      class="mr-2"
                    />
                    <p>
                      {{ x.comments.length }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="md:w-1/3 w-full" :class="showedType === 'inProgress' || showedType === '' ? 'block' : 'hidden'">
        <h1 class="sugg-title">
          In-Progress {{ "(" + inProgress.length + ")" }}
        </h1>
        <p>Currently being developed</p>

        <div v-for="x in inProgress" :key="x.id">
          <div class="map-card border-t-8 border-purple-600">
            <NuxtLink :to="`/Feedback/${x.id}`">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <eclipse :inProgress="true" />
                  <p>{{ x.status }}</p>
                </div>
                <h1 class="sugg-title">{{ x.title }}</h1>
                <p>
                  {{ x.description }}
                </p>
                <div class="flex items-end justify-between">
                  <div class="flex flex-col gap-4">
                    <p class="sugg-tab">{{ x.category }}</p>
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
                      {{ x.upvotes }}
                    </button>
                  </div>

                  <div
                    class="flex items-center justify-between"
                    v-if="x.comments"
                  >
                    <img
                      src="~/assets/shared/icon-comments.svg"
                      alt=""
                      class="mr-2"
                    />
                    <p>
                      {{ x.comments.length }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="md:w-1/3 w-full" :class="showedType === 'live' || showedType === '' ? 'block' : 'hidden'">
        <h1 class="sugg-title">Live {{ "(" + liveRequests.length + ")" }}</h1>
        <p>Released features</p>

        <div v-for="x in liveRequests" :key="x.id">
          <div class="map-card border-t-8 border-blue-400">
            <NuxtLink :to="`/Feedback/${x.id}`">
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-4">
                  <eclipse :live="true" />
                  <p>{{ x.status }}</p>
                </div>
                <h1 class="sugg-title">{{ x.title }}</h1>
                <p>
                  {{ x.description }}
                </p>
                <div class="flex items-end justify-between">
                  <div class="flex flex-col gap-4">
                    <p class="sugg-tab">{{ x.category }}</p>
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
                      {{ x.upvotes }}
                    </button>
                  </div>

                  <div
                    class="flex items-center justify-between"
                    v-if="x.comments"
                  >
                    <img
                      src="~/assets/shared/icon-comments.svg"
                      alt=""
                      class="mr-2"
                    />
                    <p>
                      {{ x.comments.length }}
                    </p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
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
    return {
      showedType: ""
    };
  },

  watch: {

  },

  computed: {
    // ...mapGetters("roadmap", ["planned", "inProgress", "live"]),
    ...mapGetters("feedbacks", [
      "allFeedbacks",
      "allProductRequests"
      // 'allComments'
    ]),

    liveRequests() {
      return this.allProductRequests.filter(el => el.status === "live");
    },

    plannedRequests() {
      return this.allProductRequests.filter(el => el.status === "planned");
    },

    inProgress() {
      return this.allProductRequests.filter(el => el.status === "in-progress");
    }
  }
};
</script>

<style scoped></style>
