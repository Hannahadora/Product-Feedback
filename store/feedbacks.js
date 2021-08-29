import axios from 'axios';

export const state = () => ({
    feedbacks: []
  });
  
  export const mutations = {
    // SET_Feedbacks: (state, feedbacks) => state.feedbacks = feedbacks
  };
  
  export const actions = {
    // fetchFeedbacks ({ commit }) {
    //     axios
    //         .get('/data.json')
    //         .then(response => response.data)
    //         .then(response => {
    //             console.log(response);
    //         commit('SET_Feedbacks', feedbacks)
    //     })
    // }
  };
  
  export const getters = {
    allfeedbacks: (state) => state.feedbacks
  };