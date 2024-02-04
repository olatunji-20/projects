import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {

  const profiles = ref([]);
  const profile = ref({});

  const getProfiles = async () => {
    let url = "http://localhost:3500/profiles";

    try {
      const res = await axios.get(url);
      profiles.value = await res.data;
      console.log(profiles)
    } catch(err) {
      console.log("error couldn't fetch", err)
    }

  }


  const getProfile = async (id) => {
    try {
      const res = await axios.get("http://localhost:3500/profiles/" + id);
      profile.value = await res.data;

    } catch (err) {
      console.log(err + "ebjrnt")
    }
  }

  return { 
    profiles,
    getProfiles,
    profile,
    getProfile
   }





})
