<script>
import { RouterLink } from 'vue-router';

    export default {
        name : 'Navbar',
    };
</script>

<template>
<nav class="navbar">
    <RouterLink to="/users">Accueil</RouterLink>
    <RouterLink to="/projects">Projets</RouterLink>
    <RouterLink to="/tasks">Tâches</RouterLink>
    <RouterLink to="/register">S'inscrire</RouterLink>
</nav>
</template>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        margin-bottom: 10px;
        padding: 10px;
        color: #2c3e50;
        
        & RouterLink:hover{
            color: #1d6996;
            text-decoration: underline;
            text-underline-offset: 5px;
        }
    }

</style>