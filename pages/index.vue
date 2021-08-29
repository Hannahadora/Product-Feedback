<template>
  <div class="suggestion-view">
    <Nav class="w-1/5"/>
    <div class="w-4/5">
      <SuggestionHeader />
      <SuggestionCard />
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import Nav from '../components/Nav.vue'
import SuggestionHeader from '../components/suggestions/SuggestionHeader.vue'
import SuggestionCard from '../components/suggestions/SuggestionCard.vue'

export default {
  name: 'index',
  components: {
    Nav,
    SuggestionHeader,
    SuggestionCard
  }

}
</script>

<style scoped>
  .suggestion-view {
    margin: 50px 100px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 25px;
  }
</style>
