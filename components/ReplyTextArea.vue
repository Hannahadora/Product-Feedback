<template>
  <div>
    <textarea
      :placeholder="`Replying to @ ${replyingTo}`"
      class="textbox mb-5 mt-4 bg-gray-100 rounded"
      :class="{ 'border border-red-300': emptyTextBox }"
      v-model="content"
      @keyup.enter="sendReply"
    ></textarea>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { v4 as uuidv4 } from "uuid";

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
    },
    replyingTo: {
      type: String,
      default: "",
    }
  },

  computed: {
  
  },

  methods: {
    ...mapMutations("feedbacks", [
      "addReplyToFeedbackComment",
      "selectFeedback"
    ]),
    sendReply() {
      if (this.content) {
        const reply = {
          content: this.content,
          replyingTo: this.replyingTo,
          user: this.user,
          id: uuidv4()
        };
        this.selectFeedback(this.id)
        this.addReplyToFeedbackComment({
          commentId: this.comment?.id,
          newReply: reply
        });
        this.content = "";
        this.$emit('success')
      } else {
        this.emptyTextBox = true;
      }
    }
  }
};
</script>

<style></style>
