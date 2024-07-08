import { serverSupabaseClient } from "#supabase/server";
import { createError } from "h3";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const slug = event.context.params.slug;

  // Vérifiez le type de route
  if (slug.startsWith("category-")) {
    // Route pour les catégories
    const categoryId = slug.split("-")[1];
    return handleCategoryRoute(client, categoryId);
  } else if (isUUID(slug)) {
    // Route pour un UUID
    return handleSimpleId(client, slug);
  } else {
    throw createError({
      statusCode: 400,
      statusMessage: "Route invalide",
    });
  }
});

async function handleCategoryRoute(client, categoryId) {
  try {
    const { data, error } = await client
      .from("subthemes")
      .select("*")
      .eq("category_id", categoryId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching subthemes by category:", error);
    throw createError({
      statusCode: 500,
      statusMessage:
        "Erreur lors de la récupération des subthemes par catégorie",
    });
  }
}

async function handleSimpleId(client, id) {
  try {
    const { data, error } = await client
      .from("subthemes")
      .select("*")
      .eq("id", id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching subtheme by UUID:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Erreur lors de la récupération du subtheme par UUID",
    });
  }
}

// Fonction pour vérifier si une chaîne est un UUID valide
function isUUID(str) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
}
