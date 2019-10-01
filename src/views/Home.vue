<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- info: {{ info }} -->
    <div v-for='i in info'>
      <p v-on:click="open(i.id)">{{ i.id }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from 'axios';

export default {
  name: "home",
  data: function(){
    return {
      info: null
    }
  },
  methods: {
    open(id){
      this.$router.push({ path: `show/${id}` })
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => (this.info = response.data))
  }
};
</script>
