<template>
  <div>
    <div class="w-full flex items-start gap-10 py-5">
      <img class="images" :src="reply.user.image" alt="" />
      <div class="w-full">
        <div class="flex items-center justify-between">
          <div class="">
            <h5 class="sugg-title">{{ reply.user.name }}</h5>
            <h5>{{ reply.user.username }}</h5>
          </div>
          <span @click="toggleReReply" class="btn">Reply</span>
        </div>
        <h4 class="mt-3">
          <span class="italic font-light">@ {{ reply.replyingTo }}</span>
          {{ reply.content }}
        </h4>
        <reply-text-area v-if="reReply" :comment="comment" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "~/components/GoBack.vue";
import ReplyTextArea from "~/components/ReplyTextArea.vue";

export default {
  name: "Replies",
  components: { GoBack, ReplyTextArea },
  data() {
    return {
      id: this.$route.params.id,
      replyBox: false,
      reReply: false,
    };
  },

  props: {
    comment: {
      type: Object,
      default: {},
      required: true
    },
    reply: {
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

  methods: {
    toggleReReply() {
      this.reReply = !this.reReply;
    },
  }
};
</script>

<style></style>
