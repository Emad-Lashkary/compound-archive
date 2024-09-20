import toast from "react-hot-toast";
import supabase from "./supabase";

export async function getImages() {
  const { data, error } = await supabase.storage.from("gallery").list("", {
    limit: 100,
    offset: 0,
    sortBy: { column: "name", order: "asc" },
  });

  if (error) {
    console.error("Error fetching images:", error);
    return [];
  }

  return data;
}

export async function deleteImage(imagePath) {
  const { data, error } = await supabase.storage
    .from("gallery")
    .remove([imagePath]);

  if (error) {
    console.error("Error deleting image:", error);
  } else {
    console.log("Image deleted successfully:", data);
    toast.success("Image deleted successfully");
    window.location.reload();
  }
}
