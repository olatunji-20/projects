import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      profiles: [],
      profile: {}
    }
  },
  actions: {
    async getProfiles() {    
        try {
          const res = await axios.get("http://localhost:3500/profiles");
          this.profiles = await res.data;
        } catch(err) {
          console.log("error couldn't fetch", err)
        }
      },

    async getProfile(id) {
      try {
        const res = await axios.get("http://localhost:3500/profiles/" + id);
        this.profile = await res.data;
      } catch (err) {
        console.log(err + "ebjrnt")
      }
    }



  }


})
