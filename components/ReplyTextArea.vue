<template>
  <div>
    <textarea
      :placeholder="`Replying to @ ${comment.user.username}`"
      class="textbox mb-5 mt-4 bg-gray-100 rounded"
      :class="{ emptyTextBox: emptyTextBox }"
      v-model="replyContent"
      @mouseenter="sendReply"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "ReplyTextArea",
  data() {
    return {
      emptyTextBox: false,
      id: this.$route.params.id,
      replyContent: "",
      replyingTo: "",
      newReply: {},
    };
  },

  props: {
    comment: {
        type: Object,
        default: {},
        required: true,
    }
  },

  methods: {
    sendReply() {
      this.newReply = {
        replyContent: this.replyContent,
        replyingTo: this.replyingTo
      };
      console.log(this.neReply);
    }
  }
}
</script>

<style></style>
