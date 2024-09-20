import supabase from "./supabase";

export async function getVocabs() {
  const { data, error } = await supabase.from("vocabs").select("*");

  if (error) {
    console.log(error);
    throw new Error("Vocabs could not be loaded");
  }

  return data;
}

export async function deleteVocab(id) {
  const { error } = await supabase.from("vocabs").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Vocabs could not be deleted");
  }
}
export async function addVocab(vocab) {
  const { data, error } = await supabase
    .from("vocabs")
    .insert([vocab])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Vocabs could not be added");
  }

  return data;
}
