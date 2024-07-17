<script lang="ts" setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    // Rediriger vers la page d'accueil ou le tableau de bord
    navigateTo("/profile");
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required />
      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<style lang="scss"></style>
