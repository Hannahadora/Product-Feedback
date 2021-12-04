<template>
  <div class="header-card">
    <div>
      <h1 class="font-bold">Adora's</h1>
      <h4>Feedback Board</h4>
    </div>
    <div class="md:hidden block" @click="openMenu">
      <img
        class="cursor-pointer"
        src="~/assets/shared/mobile/icon-hamburger.svg"
        alt=""
        v-if="!showMenu"
      />
      <img
        class="cursor-pointer"
        src="~/assets/shared/mobile/icon-close.svg"
        alt=""
        v-else
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderCard",
  data() {
    return {
      showMenu: false,
    };
  },

  props: {},

  methods: {
    openMenu() {
      this.showMenu = !this.showMenu;
      this.$emit("menu", this.showMenu);
    },

    // closeMenu() {
    //   !this.showMenu = this.showMenu
    // },
  },
};
</script>

<style>
</style>