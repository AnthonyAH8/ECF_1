<script>
import { defineComponent } from 'vue'; // Import defineComponent
import { RouterLink } from 'vue-router';

export default defineComponent({
  data() {
    return {
      loginData: {
        username: '',
        password: '',
      },
      submitted: false,
    };
  },
  methods: {
    submitLogin() {
      this.submitted = true;
    },
  },
});
</script>

<template>
    <form @submit.prevent="submitLogin" class="login">
        <label for="username">Pseudo :</label>
        <input type="text" id="username" v-model="loginData.username" placeholder="Entrez votre nom d'utilisateur">

        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="loginData.password" placeholder="Entrez votre mot de passe">

        <button type="submit">Se connecter</button>
        
        <router-link to="/register" class="redirection">Pas encore inscrit? Création d'un compte</router-link>

    </form>

    <div v-if="submitted">
        <p>{{ loginData.username.toUpperCase() }}, vous êtes bien connecté.</p>
    </div>
</template>

<style>
    .login {
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    background-color: #2c3e5018;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    & input[type=text]:focus {
        border: 1px solid #2c3e50;
        outline: none;
        color: #1d6996;
    }

    button{
        margin: 20px;
    }
}

p{
    text-align: center;
    color: #1d6996;
    font-size: 1.5em;

}

</style>