<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Form from './components/Form.vue';
let users = ref([]);

export default {
  components: {
    Navbar,
    Form,
  },
};

</script>
  
<template>
  <h1>Gestion de projet</h1>
  <div id="app">
    <Navbar />
    <Form />
    <router-view/>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
