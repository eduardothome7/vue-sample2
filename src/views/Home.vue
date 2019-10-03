<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- info: {{ info }} -->
    <div class="md-elevation-1" v-for='i in info'>
      <div v-on:click="open(i.id)">
        <h4><strong>#{{ i.id }}</strong> {{ i.title }}</h4>
        <p>{{ i.completed }}</p>
      </div>
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
    // this.$notification.new("hello world", {  timer: 10 });
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then(response => (this.info = response.data))
  }
};
</script>
