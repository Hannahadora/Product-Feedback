<template>
  <transition name="slide-fade">
    <div class="view lg:flex md:block items-start justify-between">
      <div
        class="
          lg:w-1/5
          w-full
          lg:mb-0
          md:mb-10
          mb-0
          lg:block
          md:flex
          items-start
          lg:justify-between lg:gap-0
          md:gap-3
        "
        :class="{ relative: showMenu }"
      >
      
        <div class="bg-transparent" :class="{ 'w-full fixed h-screen trans-dark-bg': showMenu }">
          <HeaderCard class="lg:w-full md:w-1/3 w-full" @menu="toggleMenu" />
          <div
            class="lg:block md:flex gap-3 lg:w-full md:w-2/3 w-3/5 lg:mt-5 md:mt-0 mt-5 bg-blue-50 md:h-auto md:h-full h-screen md:relative absolute right-0 md:top-0 top-14"
            :class="{ hidden: !showMenu }"
          >
            <ul class="card filter-card lg:w-auto md:w-1/2 w-full">
              <li
                :class="{ active: type === '' }"
                @click="feedbackType('')"
                class="filter-btns"
              >
                All
              </li>
              <li
                :class="{ active: type === 'ui' }"
                @click="feedbackType('ui')"
                class="filter-btns"
              >
                UI
              </li>
              <li
                :class="{ active: type === 'ux' }"
                @click="feedbackType('ux')"
                class="filter-btns"
              >
                UX
              </li>
              <li
                :class="{ active: type === 'enhancement' }"
                @click="feedbackType('enhancement')"
                class="filter-btns"
              >
                Enhancement
              </li>
              <li
                :class="{ active: type === 'bug' }"
                @click="feedbackType('bug')"
                class="filter-btns"
              >
                Bug
              </li>
              <li
                :class="{ active: type === 'feature' }"
                @click="feedbackType('feature')"
                class="filter-btns"
              >
                Feature
              </li>
            </ul>

            <RoadmapCard
              class="md:block lg:w-auto md:w-1/2 w-full lg:mt-5 md:mt-0 mt-5"
            />
          </div>
        </div>
      </div>

      <div class="lg:w-4/5 md:w-full">
        <div class="suggestion-header">
          <div class="flex items-center">
            <img
              class="mr-4 lg:block md:block hidden"
              src="~/assets/suggestions/icon-suggestions.svg"
              alt=""
            />
            <h2 class="font-bold lg:block md:block hidden">
              {{ displayedFeedback.length }} Suggestions
            </h2>
            <p class="md:text-sm text-xs md:ml-6 font-bold">
              Sort By: Most Upvotes
            </p>
          </div>
          <NuxtLink to="/Feedback/New">
            <button
              class="sec-btn md:px-7 mx-5 flex items-center justify-around"
            >
              <img src="~/assets/shared/icon-plus.svg" alt="" />
              Add Feedback
            </button>
          </NuxtLink>
        </div>

        <div v-if="displayedFeedback">
          <NuxtLink
            :to="`/Feedback/${x.id}`"
            class="sugg-box md:mx-auto m-6"
            v-for="x in displayedFeedback"
            :key="x.id"
          >
            <div>
              <button
                class="
                  upvotes
                  btn
                  md:block
                  flex flex-row-reverse
                  items-center
                  gap-3
                "
              >
                <img
                  class="mx-auto mb-1"
                  src="~/assets/shared/icon-arrow-up.svg"
                  alt=""
                />
                {{ x.upvotes }}
              </button>
            </div>
            <div
              class="
                w-full
                flex
                md:flex-row
                flex-row-reverse
                md:items-center
                items-end
                justify-between
              "
            >
              <div class="">
                <h3 class="sugg-title">{{ x.title }}</h3>
                <p class="sugg-desc mt-2">{{ x.description }}</p>
                <div class="mt-2 flex">
                  <p class="sugg-tab">{{ x.category }}</p>
                </div>
              </div>
              <div
                class="
                  flex
                  md:flex-row
                  flex-row-reverse
                  items-center
                  justify-between
                "
              >
                <img
                  src="~/assets/shared/icon-comments.svg"
                  alt=""
                  class="mr-2"
                />
                <p v-if="x.comments">
                  {{ x.comments.length }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div
          v-show="displayedFeedback.length === 0"
          class="emptyCard lg:w-full w-11/12 my-6 mx-auto"
        >
          <div
            class="lg:w-1/2 w-10/12 m-auto flex flex-col justify-center items-center"
          >
            <img
              class="mb-6"
              src="~/assets/suggestions/illustration-empty.svg"
              alt=""
            />
            <h3 class="sugg-title">
              There is no <span class="capitalize">{{ type }}</span> feedback
              yet
            </h3>
            <p class="mt-2 text-center">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <NuxtLink to="/Feedback/New">
              <button
                class="sec-btn mt-3 px-7 flex items-center justify-around"
              >
                <img src="~/assets/shared/icon-plus.svg" alt="" />
                Add Feedback
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import RoadmapCard from "~/components/cards/RoadmapCard.vue";
import HeaderCard from "~/components/cards/HeaderCard.vue";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "index",
  components: {
    RoadmapCard,
    HeaderCard
  },

  data() {
    return {
      type: "",
      showMenu: false
    };
  },

  watch: {
    type() {
      if (this.showMenu) {
        this.showMenu = false;
      }
    }
  },

  mounted() {
    this.selectFeedback("")
  },

  computed: {
    ...mapGetters("feedbacks", [
      "allFeedbacks",
      "allProductRequests"
      // 'allComments'
    ]),

    displayedFeedback() {
      return this.allProductRequests.filter(el => {
        switch (this.type) {
          case "ui":
            return el.category === "ui";
          case "ux":
            return el.category === "ux";
          case "enhancement":
            return el.category === "enhancement";
          case "bug":
            return el.category === "bug";
          case "feature":
            return el.category === "feature";
          default:
            return this.allProductRequests;
        }
      });
    }
  },

  methods: {
    ...mapMutations('feedbacks', ["selectFeedback"]),
    feedbackType(type) {
      this.type = type;
    },

    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.active {
  background: #4661e6;
  color: #fff;
}

.trans-dark-bg {
  background: #00000060;
}
</style>
