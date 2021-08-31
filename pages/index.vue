<template>
  <div class="suggestion-view flex lg:flex-row md:flex-col lg:items-start md:items-center lg:justify-between">
    <div class="lg:w-1/5 md:w-10/12">
      <HeaderCard />
      <div>
        <ul class="card filter-card mt-5">
          <li :class="{active: type ===''}" @click="feedbackType('')" class="filter-btns">All</li>
          <li :class="{active: type ==='ui'}" @click="feedbackType('ui')" class="filter-btns">UI</li>
          <li :class="{active: type ==='ux'}" @click="feedbackType('ux')" class="filter-btns">UX</li>
          <li :class="{active: type ==='enhancement'}" @click="feedbackType('enhancement')" class="filter-btns">Enhancement</li>
          <li :class="{active: type ==='bug'}" @click="feedbackType('bug')" class="filter-btns">Bug</li>
          <li :class="{active: type ==='feature'}" @click="feedbackType('feature')" class="filter-btns">Feature</li>
        </ul>
      </div>
      <RoadmapCard />
    </div>

    <div class="lg:w-4/5 md:w-10/12">
      <div class="suggestion-header">
        <div class="flex items-center">
          <img class="mr-4" src="~/assets/suggestions/icon-suggestions.svg" alt="">
          <h2  class="font-bold">{{ displayedFeedback.length }} Suggestions</h2>
          <p class="text-sm ml-6 font-bold">Sort By: Most Upvotes</p>
        </div>
        <NuxtLink to="/Feedback/New" > 
            <button class="sec-btn mt-3 px-7 flex items-center justify-around">
              <img src="~/assets/shared/icon-plus.svg" alt="">
              Add Feedback
            </button> 
          </NuxtLink>
      </div>

      <div v-if="displayedFeedback">
        <NuxtLink :to="`/Feedback/${x.id}`" 
          class="sugg-box" 
          v-for="x in displayedFeedback" :key="x.id">
          <button class="upvotes btn">
            <img class="mx-auto mb-1" src="~/assets/shared/icon-arrow-up.svg" alt="">
            {{ x.upvotes }}</button>
          <div class="w-full flex items-center justify-between">
            <div class="">
              <h3 class="sugg-title">{{ x.title }}</h3>
              <p class="sugg-desc mt-2">{{ x.description }}</p>
              <div class="mt-2 flex">
                <p class="sugg-tab">{{ x.category }}</p>
              </div>
            </div>
            <p>
              <img src="~/assets/shared/icon-comments.svg" alt="" class="mr-2">
              <!-- {{ commentLength }} -->
            </p>
          </div>
        </NuxtLink>
      </div>

      <div v-show="displayedFeedback.length === 0" class="emptyCard my-6">
        <div class="w-1/2 m-auto flex flex-col justify-center items-center">
          <img class="mb-6" src="~/assets/suggestions/illustration-empty.svg" alt="">
          <h3 class="sugg-title">There is no <span class="capitalize">{{ type }}</span> feedback yet</h3>
          <p class="mt-2 text-center">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
          <NuxtLink to="/Feedback/New" > 
            <button class="sec-btn mt-3 px-7 flex items-center justify-around">
              <img src="~/assets/shared/icon-plus.svg" alt="">
              Add Feedback
            </button> 
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import RoadmapCard from '~/components/cards/RoadmapCard.vue'
import HeaderCard from '~/components/cards/HeaderCard.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'index',
  components: {
    RoadmapCard,
    HeaderCard
  },

  data() {
    return {
      type: ''
    }
  },

   computed: { 
    ...mapGetters( 'feedbacks', [
        'allFeedbacks',
        'allProductRequests',
        // 'allComments'
    ]),

   

    displayedFeedback() {
      return this.allProductRequests.filter(el => {
        switch(this.type) {
          case 'ui':
              return el.category === "ui";
          case 'ux':
              return el.category === "ux";
          case 'enhancement':
              return el.category === "enhancement";
          case 'bug':
              return el.category === "bug";
          case 'feature':
              return el.category === "feature";
          default:
            return this.allProductRequests
        }
      })
    },
  
  },

  methods: {
    feedbackType(type) {
      this.type = type;
    },
  }


}
</script>

<style scoped>
  .suggestion-view {
    margin: 50px 100px;
    justify-content: space-between;
    gap: 25px;
  }

  .active {
    background: #4661e6;
    color: #fff;
  }
</style>
