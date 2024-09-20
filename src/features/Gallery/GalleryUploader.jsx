import React, { useState } from "react";
import supabase from "../../services/supabase";
import toast from "react-hot-toast";
import SpinnerMini from "../../ui/SpinnerMini";
import { useUser } from "../authentication/useUser";

function GalleryUploader() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    if (!authed) {
      toast.error("you need to login to access uploading photo.");
      return;
    }
    e.preventDefault();
    if (!file) return;
    setIsLoading(true);

    const fileName = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("gallery")
      .upload(fileName, file);

    if (error) {
      toast.error("Error uploading file");
      console.error("Error uploading file:", error);
    } else {
      setIsLoading(false);
      toast.success("File uploaded successfully");
      window.location.reload();
    }
  }

  return (
    <form
      className="flex items-center w-[95%] opacity-70 justify-between gap-4 rounded-lg bg-gradient-to-r from-lime-600 via-blue-600 to-lime-300 p-3"
      onSubmit={handleSubmit}
    >
      <input
        className="h-10 w-[60%] border-b-2 border-lime-50 text-lime-50"
        type="file"
        onChange={handleFileChange}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="rounded-lg  bg-lime-100 hover:bg-lime-50 py-2 sm:px-8 px-[10px]"
      >
        {isLoading ? <SpinnerMini /> : <span>Upload</span>}
      </button>
    </form>
  );
}

export default GalleryUploader;
