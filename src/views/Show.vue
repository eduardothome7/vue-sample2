<template>
  <div class="show">
      {{ user }}
    <p>
        <strong>#</strong>{{ user.id }}
    </p>
    <p>
        <strong>Title:</strong>{{ user.title }}
    </p>
    <p>
        <strong>Completed:</strong> {{ user.completed }}
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: "show",
  data: function(){
    return {
      user: null
    }
  },
//   components: {
//     HelloWorld
//   },
  mounted () {
    const id = this.$route.params.id
    console.log(`https://jsonplaceholder.typicode.com/todos/${id}`)
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => (this.user = response.data))
  }
};
</script>
