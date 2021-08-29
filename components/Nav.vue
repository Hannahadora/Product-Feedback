<template>
  <div class="nav">
      <HeaderCard />
      <FilterCard />
      <RoadmapCard />
  </div>

</template>

<script>
import HeaderCard from './cards/HeaderCard.vue'
import FilterCard from './cards/FilterCard.vue'
import RoadmapCard from './cards/RoadmapCard.vue'

export default {
  components: { HeaderCard, FilterCard, RoadmapCard },

}
</script>

<style>

</style>