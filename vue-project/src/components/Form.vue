<script>
export default {
    data() {
        return {
            formData: {
                firstname: '',
                lastname: '',
                username: '',
                email: '',
                password: '',
            },
            submitted: false,
        };
    },
    methods: {
        submitForm() {
            this.submitted = true;
        },
    },
};
</script>

<template>
    <form @submit.prevent="submitForm" class="inscription">
        <label for="firstname">Prénom:</label>
        <input type="text" id="firstname" v-model="formData.firstname" />

        <label for="lastname">Nom de famille:</label>
        <input type="text" id="lastname" v-model="formData.lastname" />

        <label for="username">Pseudo:</label>
        <input type="text" id="username" v-model="formData.username" />

        <label for="email">Mail:</label>
        <input type="email" id="email" v-model="formData.email" />

        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="formData.password" />

        <button type="submit">S'inscrire</button>

    </form>

    <div v-if="submitted">
        <p>Bienvenue {{ formData.username }}</p>
    </div>
</template>

<style>

html, body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.inscription {
    margin: 20px;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.147);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #d6d6d6b5;
    gap: 5px;

    & input{
        outline: #d6d6d6b5;
    }
}

/* A finir */
</style>