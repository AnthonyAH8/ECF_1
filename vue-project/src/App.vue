<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Form from './components/Form.vue';
import Login from './components/Login.vue';
let users = ref([]);

export default {
  components: {
    Navbar,
    Form,
    Login
},
};

</script>
  
<template>
  <div>
    <h1>Gestion de projet</h1>
  </div>
  <div id="app">
    <Navbar />
    <!-- <Form /> -->
    <Login/>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
