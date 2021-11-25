<template>
  <div class="back-btn">
    <span
        @click="goBack" 
        class="btn font-bold flex items-center"
        :class="{ 'text-white': whiteText }">
        <img class="mr-4" src="~/assets/shared/icon-arrow-left.svg" alt="">
        Go back</span>
  </div>
</template>

<script>
export default {
    name: 'GoBack',
    props: {
      whiteText: {
        type: Boolean
      }
    },

    methods: {
        goBack() {
           window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
        }
    }
}
</script>

<style>
  .back-btn {
    font-size: 13px;
  }
</style>