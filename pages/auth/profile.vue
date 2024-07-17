<script lang="ts" setup>
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

console.log(user.email, "user");
console.log(client, "client");
// Utiliser un watcher pour observer les changements de user
const handleLogout = async () => {
  try {
    const { error } = await client.auth.signOut();
    if (error) {
      throw error;
    }
    // Rediriger vers la page de connexion ou la page d'accueil
    await router.push("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion:", error.message);
    // Gérer l'erreur (par exemple, afficher un message à l'utilisateur)
  }
};
</script>

<template>
  <div>
    <h2>email : {{ user.email }}</h2>
  </div>
  <button @click="handleLogout">Se déconnecter</button>
</template>

<style lang="scss"></style>
