<template>
  <div>
    <div class="w-full flex items-start gap-10 py-5">
      <img
        class="images"
        :src="comment && comment.user && comment.user.image"
        alt=""
      />
      <div class="w-full">
        <div class="flex items-center justify-between">
          <div class="">
            <h5 class="sugg-title">
              {{ comment && comment.user && comment.user.name }}
            </h5>
            <h5>{{ comment && comment.user && comment.user.username }}</h5>
          </div>
          <span @click="toggleReply" class="btn">Reply</span>
        </div>
        <h4 class="mt-3 brk-line">{{ comment && comment.content }}</h4>

        <reply-text-area v-if="replyBox" :replyingTo="replyingTo" :comment="comment" :user="user" @success="replyBox = false" />

        <div
          class="md:block hidden mt-6"
          v-for="reply in comment && comment.replies"
          :key="reply.id"
        >
          <replies :reply="reply" :comment="comment" :user="user" />
        </div>
      </div>
    </div>
    <div
      class="w-11/12 md:hidden block float-right mt-6"
      v-for="reply in comment && comment.replies"
      :key="reply.id"
    >
      <replies :reply="reply" :comment="comment" :user="user" />
    </div>
  </div>
</template>

<script>
import GoBack from "~/components/GoBack.vue";
import ReplyTextArea from "~/components/ReplyTextArea.vue";
import Replies from "./Replies.vue";

export default {
  name: "Comments",
  components: { GoBack, ReplyTextArea, Replies },
  data() {
    return {
      id: this.$route.params.id,
      replyBox: false,
      reReply: false,
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
      return this.comment?.user?.username
    }
  },


  methods: {
    toggleReReply() {
      this.reReply = !this.reReply;
    },
    toggleReply() {
      this.replyBox = !this.replyBox;
    }
  }
};
</script>

<style>
.comments:last-child {
  border-bottom: none;
}

.images {
  width: 60px;
  border: 1px solid red;
  border-radius: 50%;
}

.brk-line {
  line-break: anywhere;
}
</style>
