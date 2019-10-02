<template>
  <div class="about">
    <form
      id="app"
      @submit="checkForm"
      action="https://vuejs.org/"
      method="post">
      <p v-if="errors.length">
        <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Nome</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
        >
      </p>

      <p>
        <label for="age">Idade</label>
        <input
          id="age"
          v-model="age"
          type="number"
          name="age"
          min="0"
        >
      </p>

      <p>
        <label for="movie">Filme favorito</label>
        <select
          id="movie"
          v-model="movie"
          name="movie">
          <option>Star Wars</option>
          <option>Vanilla Sky</option>
          <option>Atomic Blonde</option>
        </select>
      </p>

      <p>
        <input
          type="submit"
          value="Enviar"
        >
      </p>
    </form>
  </div>
</template>
<script>
  export default {
    name: "show",
    data: function(){
      return {
        user: null,
        errors: [],
        name: null,
        age: null,
        movie: null
      }
    },
  //   components: {
  //     HelloWorld
  //   },
    methods: {
      back(){
        this.$router.back()
      },
      checkForm: function (e) {
        if (this.name && this.age) {
          return true;
        }
        this.errors = [];
        if (!this.name) {
          this.errors.push('O nome é obrigatório.');
        }
        if (!this.age) {
          this.errors.push('A idade é obrigatória.');
        }
        e.preventDefault();
      }
    },
    mounted () {
      const id = this.$route.params.id
      console.log(`https://jsonplaceholder.typicode.com/todos/${id}`)
      axios
        .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => (this.user = response.data))
    }
  };
</script>