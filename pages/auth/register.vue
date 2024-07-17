<script lang="ts" setup>
const client = useSupabaseClient();

const email = ref("");
const password = ref("");

const handleRegister = async () => {
  try {
    const { error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    alert("Vérifiez votre email pour confirmer votre inscription");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div>
    <h1>Inscription</h1>
    <form @submit.prevent="handleRegister">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit">S'inscrire</button>
    </form>
  </div>
</template>

<style lang="scss"></style>
