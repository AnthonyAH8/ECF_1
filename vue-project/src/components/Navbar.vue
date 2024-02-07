<script>
    export default {
        name : 'Navbar',
    };
</script>

<template>
<div class="navbar">
    <router-link to="/users">Accueil</router-link>
    <router-link to="/projects">Projets</router-link>
    <router-link to="/tasks">Tâches</router-link>
</div>
</template>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-around;
    }
    /* A finir */
</style>