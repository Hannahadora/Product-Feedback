<template>
  <div class="lg:w-1/2 md:w-2/3 w-11/12 mx-auto my-10">
    <GoBack class="mb-6" />

    <div class="comment-box relative mt-10">
      <img
        class="w-10 absolute -top-5 left-10"
        src="~/assets/shared/icon-new-feedback.svg"
        alt=""
      />
      <span class="text-2xl sugg-title">Edit Feedback</span>
      <h5 class="sugg-title mt-10">Feedback Title</h5>
      <h5>Add a short descriptive headline</h5>
      <span v-show="emptyTextBox" class="text-red-200 italic"
        >Can't be empty</span
      >
      <input
        :class="{ emptyTextBox: emptyTextBox }"
        class="inputBox bg-gray-100 mt-6"
        type="text"
        v-model="feedback.title"
      />

      <h5 class="sugg-title mt-10">Category</h5>
      <h5>Choose a category for your feedback</h5>
      <span v-show="emptyTextBox" class="text-red-200 italic"
        >Can't be empty</span
      >
      <select
        :class="{ emptyTextBox: emptyTextBox }"
        class="select-input bg-gray-100 mt-6"
        type="text"
        v-model="feedback.category"
      >
        <option value="ui">Ui</option>
        <option value="ux">Ux</option>
        <option value="enhancement">Enhancement</option>
        <option value="bug">bug</option>
        <option value="feature">Feature</option>
      </select>

      <h5 class="sugg-title mt-10">Update Status</h5>
      <h5>Change feature state</h5>
      <span v-show="emptyTextBox" class="text-red-200 italic"
        >Can't be empty</span
      >
      <select
        :class="{ emptyTextBox: emptyTextBox }"
        class="select-input bg-gray-100 mt-6"
        type="text"
        v-model="feedback.status"
      >
        <option value="suggestion">Suggestion</option>
        <option value="planned">Planned</option>
        <option value="in-progress">In-Progress</option>
        <option value="live">Live</option>
      </select>

      <h5 class="sugg-title mt-10">Feedback Details</h5>
      <h5>
        Include any specific comment on what should be improved, added etc.
      </h5>
      <span v-show="emptyTextBox" class="text-red-200 italic"
        >Can't be empty</span
      >
      <textarea
        class="textbox mb-5 mt-6 bg-gray-100 rounded"
        :class="{ emptyTextBox: emptyTextBox }"
        v-model="feedback.description"
      ></textarea>

      <div
        class="flex md:flex-row flex-col items-center md:justify-end justify-center gap-6 mb-10"
      >
        <button @click="cancel" class="cancel-btn md:w-24 w-full">
          Cancel
        </button>
        <button @click="editFeedback" class="pry-btn">
          Edit Feedback
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import GoBack from "~/components/GoBack.vue";
export default {
  components: { GoBack },
  name: "Edit",

  data() {
    return {
      id: this.$route.params.id,
      emptyTextBox: false,
      feedback: {
        title: "",
        description: "",
        category: "",
        status: ""
      }
    };
  },

  computed: {
    ...mapGetters("feedbacks", ["allFeedbacks", "allProductRequests"]),

    selectedFeedback() {
      const feedback = this.allProductRequests?.find(
        el => el.id === Number(this.id)
      );
      return feedback;
    }
  },

  methods: {
    ...mapMutations("feedbacks", ["updateFeedback"]),
    editFeedback() {
      this.updateFeedback({
        feedbackId: this.id,
        payload: this.feedback
      });
      this.$router.push("/");
    },

    cancel() {
      this.$router.push("/");
    }
  },

  mounted() {
    this.feedback = {... this.selectedFeedback}
  }
};
</script>

<style></style>-
