<script setup lang="ts">
const supabase = useSupabaseClient();

const fecthData = async () => {
  const data = await supabase.from("categories").select("*");
  console.log(data.data);
};
onMounted(() => {
  fecthData();
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
