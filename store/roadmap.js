import axios from 'axios';
import roadmap from '../static/json/roadmap.json'
// import router from 'vue-router'

export const state = () => ({
    namespaced: true,
    roadmap:roadmap,
  });
  
  export const mutations = {
  
  };
  
  export const actions = {
    
  };
  
  export const getters = {
    allRoadmaps: (state) => state.roadmaps,
    planned: (state) => state.roadmap.planned, 
    inProgress: (state) => state.roadmap.inProgress, 
    live: (state) => state.roadmap.live,
  };