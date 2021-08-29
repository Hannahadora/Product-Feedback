<template>
  <div>
    <NuxtLink :to="{ name: 'Feedback', params: { id: x.id }}" 
      class="sugg-box" 
      v-for="x in productRequests" :key="x.id">
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
          {{ commentLength }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import feedbacks from '~/static/data.json'

export default {
  name: 'SuggestionCard',

  data() {
      return {
        feedbacks:feedbacks,
        pR:feedbacks.productRequests,      }
  },

  mounted() {
    console.log(this.feedbacks.productRequests)
    console.log(this.comments)
    
  },
  
  computed: {
    productRequests() {
      return this.feedbacks.productRequests
    },
    // commentLength() {
    //   return this.pR.comments.length
    // }

  }

}
</script>

<style>
    .sugg-box {
      background: #fff;
      border-radius: 10px;
      padding: 25px;
      display: flex;
      align-items: flex-start;
      gap: 50px;
      margin: 24px 0;
    }
</style>