import { useEffect, useState } from "react";
import { deleteImage, getImages } from "../../services/ApiGallery";
import { useSearchParams } from "react-router-dom";
import { BsEraser } from "react-icons/bs";
import Sort from "../../ui/Sort";
import toast from "react-hot-toast";
import { useUser } from "../authentication/useUser";

function GalleryTable() {
  const [images, setImages] = useState([]);
  const [searchParams] = useSearchParams();
  const { user } = useUser();
  const authed = user?.role === "authenticated";

  function handleDelete(image) {
    if (!authed) {
      toast.error("you need to login to access deleting photo.");
      return;
    }
    deleteImage(image);
  }

  useEffect(() => {
    async function fetchImages() {
      const imageList = await getImages();
      setImages(imageList);
    }

    fetchImages();
  }, []);

  searchParams.get("sort-img") === "new-first" &&
    images.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  searchParams.get("sort-img") === "old-first" &&
    images.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  return (
    <div className="flex flex-col items-center justify-center">
      <Sort param="img" />
      <div className="grid w-[95%] grid-cols-1 justify-items-center rounded-lg bg-gradient-to-br from-blue-100 via-blue-50 to-lime-50 sm:grid-cols-2">
        {images &&
          images?.map((image) => (
            <div key={image.name} className="relative h-full w-[87%]  py-5">
              <button
                onClick={() => handleDelete(image.name)}
                className="absolute bottom-6 z-50 left-1 rounded-full p-1 hover:scale-125 transition-all bg-gradient-to-br from-blue-300 to-lime-200 opacity-35"
              >
                <BsEraser className="size-4" />
              </button>
              <img
                className="h-auto w-full rounded-lg transition-all hover:scale-[1.02] active:scale-105"
                src={`https://cixlzzyzwmpmwqmeohyc.supabase.co/storage/v1/object/public/gallery/${image.name}`}
                alt={image.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default GalleryTable;
