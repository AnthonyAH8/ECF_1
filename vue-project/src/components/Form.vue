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
        <input type="text" id="firstname" name="firstname" v-model="formData.firstname" />

        <label for="lastname">Nom de famille:</label>
        <input type="text" id="lastname" name="lastname" v-model="formData.lastname" />

        <label for="username">Pseudo:</label>
        <input type="text" id="username" name="username" v-model="formData.username" />

        <label for="email">Mail:</label>
        <input type="email" id="email" name="email" v-model="formData.email" />

        <label for="password">Mot de passe:</label>
        <input type="password" id="password" name="password" v-model="formData.password" />

        <button type="submit">S'inscrire</button>
    </form>

    <div v-if="submitted">
        <p>Bienvenue {{ formData.username.toUpperCase() }}</p>
    </div>
</template>

<style>
.inscription {
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

    button {
        margin-top: 20px;
    }
}

p {
    text-align: center;
    color: #1d6996;
    font-size: 1.5em;

}

/* A finir */
</style>