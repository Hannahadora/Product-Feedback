<template>
  <div>
    <textarea
      :placeholder="`Replying to @ ${replyingTo}`"
      class="textbox mb-5 mt-4 bg-gray-100 rounded"
      :class="{ 'border border-red-300': emptyTextBox }"
      v-model="content"
      @change="sendReply"
    ></textarea>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ReplyTextArea",
  data() {
    return {
      emptyTextBox: false,
      id: this.$route.params.id,
      content: "",
      newReply: {}
    };
  },

  props: {
    comment: {
      type: Object,
      default: {},
      required: true
    },
    user: {
      type: Object,
      default: {},
      required: true
    }
  },

  computed: {
    replyingTo() {
      return this.comment?.user?.username;
    }
  },

  methods: {
    ...mapMutations("feedbacks", [
      "addCommentToFeedback",
      "addReplyToFeedbackComment"
    ]),
    sendReply() {
      if (this.content) {
        const reply = {
          content: this.content,
          replyingTo: this.replyingTo,
          user: this.user
        };
      console.log((reply))
        this.addReplyToFeedbackComment({
          feedbackId: this.id,
          commentId: this.comment?.id,
          newReply: reply
        });
      } else {
        this.emptyTextBox = true;
      }
    }
  }
};
</script>

<style></style>
