<template>
  <div class="lg:w-1/2 md:w-2/3 w-11/12 mx-auto my-10">
      <GoBack class="mb-6"/>

      <div class="comment-box relative mt-10">
          <img class="w-10 absolute -top-5 left-10" src="~/assets/shared/icon-new-feedback.svg" alt="">
          <span class="text-2xl sugg-title">Create New Feedback</span>
          <h5 class="sugg-title mt-10">Feedback Title</h5>
          <h5>Add a short descriptive headline</h5>
          <span v-show="emptyTextBox" class="text-red-200 italic">Can't be empty</span>
          <input :class="{'emptyTextBox': emptyTextBox }" class="inputBox bg-gray-100 mt-6" type="text" v-model="title" />

          <h5 class="sugg-title mt-10">Category</h5>
          <h5>Choose a category for your feedback</h5>
          <span v-show="emptyTextBox" class="text-red-200 italic">Can't be empty</span>
          <select :class="{'emptyTextBox': emptyTextBox }" class="select-input bg-gray-100 mt-6" type="text" v-model="category">
            <option value="ui">Ui</option>
            <option value="ux">Ux</option>
            <option value="enhancement">Enhancement</option>
            <option value="bug">bug</option>
            <option value="feature">Feature</option>
        </select>

          <h5 class="sugg-title mt-10">Feedback Details</h5>
          <h5>Include any specific comment on what should be improved, added etc.</h5>
          <span v-show="emptyTextBox" class="text-red-200 italic">Can't be empty</span>
          <textarea
            class="textbox mb-5 mt-6 bg-gray-100 rounded"
            :class="{'emptyTextBox': emptyTextBox }"
            v-model="description"
          ></textarea>

          <div class="flex md:flex-row flex-col items-center md:justify-end justify-center gap-6 mb-10">
              <button @click="cancel" class="cancel-btn md:w-24 w-full">Cancel</button>
              <button @click="pushFeedback(newFeedback)" class="pry-btn">Add Feedback</button>
          </div>
      </div>
  </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

import GoBack from '~/components/GoBack.vue'
import { v4 as uuidv4 } from 'uuid';


export default {
  components: { GoBack },
    name: 'New',

    data() {
        return {
            emptyTextBox: false,
            title:'',
            category: '',
            description: '',
            newFeedback: {},
        }
    },

    computed: { 
        ...mapGetters( 'feedbacks', [
            'allFeedbacks',
            'allProductRequests'
        ]),
        // ...mapMutations(['feedbacks/addFeedback'])
    },

    methods: {
        pushFeedback(newFeedback) {
            if(this.description.length == 0) {
                this.emptyTextBox = true
                this.timer = setTimeout(() => {
                    this.emptyTextBox = false;
                }, 3000);
            } if(this.title.length == 0 && this.category.length == 0){
                this.emptyTextBox = true
                this.timer = setTimeout(() => {
                    this.emptyTextBox = false;
                }, 3000);
            }  else{
                this.newFeedback = {
                    title: this.title,
                    category: this.category,
                    description: this.description,
                    id: uuidv4(),
                    status: "",
                }
                this.$store.commit('feedbacks/addFeedback', {...this.newFeedback})
                this.$router.push('/')
            }   
        },

        cancel() {
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>-