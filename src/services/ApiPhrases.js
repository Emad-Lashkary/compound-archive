import supabase from "./supabase";

export async function getPhrases() {
  const { data, error } = await supabase.from("phrases").select("*");

  if (error) {
    console.log(error);
    throw new Error("Phrases could not be loaded");
  }

  return data;
}

export async function deletePhrase(id) {
  const { error } = await supabase.from("phrases").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Phrase could not be deleted");
  }
}
export async function addPhrase(phrase) {
  const { data, error } = await supabase
    .from("phrases")
    .insert([phrase])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Phrase could not be added");
  }

  return data;
}
