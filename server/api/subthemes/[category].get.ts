import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async (event) => {
  try {
    const client = await serverSupabaseClient(event);

    const categoryId = event.context!.params!.category;

    const { data, error } = await client
      .from("subthemes")
      .select("*")
      .eq("id", categoryId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Error fetching subthemes:", error);
    return createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la récupération des subthemes",
    });
  }
});
