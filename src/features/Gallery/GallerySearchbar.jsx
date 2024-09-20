import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";

function GallerySearchbar() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?per_page=20;query=${query}&client_id=wgYIWKe3GJVIKsNmA-WR3Ce_EBaDInS3TESAp5Y1teM`
        )
        .then((response) => {
          setImages(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value;
    setQuery(searchQuery);
    setOpenModal(true);
  };

  const { reset, register } = useForm();
  function handleClose() {
    setOpenModal((show) => !show);
    setImages([]);
    reset();
  }

  return (
    <div className="w-[95%]">
      <form
        className="flex gap-3 rounded-lg bg-gradient-to-r from-lime-600 via-blue-600 to-lime-300 p-3 opacity-75"
        onSubmit={handleSearch}
      >
        <input
          className="w-full rounded-lg p-2 bg-white"
          type="text"
          name="query"
          placeholder="Search for images..."
          {...register("query")}
        />
        <button
          type="submit"
          className="rounded-lg bg-lime-100 px-3 hover:bg-lime-50 transition-all"
        >
          Search
        </button>
      </form>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <div className="relative sm:h-[80vh] h-[100vh] sm:w-[60vw] w-[100vw]">
            <div className="absolute left-[50%] top-11 z-50 h-[50%] w-[92%] translate-x-[-50%] overflow-y-scroll rounded-xl bg-gradient-to-br from-lime-50 via-blue-50 to-blue-100 p-3 sm:h-[85%] sm:max-w-[92%]">
              <div className="m-2 grid grid-cols-2 gap-2">
                {images.map((image) => (
                  <a
                    href={image.links.html}
                    target="_blank"
                    rel="noreferrer"
                    key={image.id}
                  >
                    <img
                      className="max-h-36 w-full overflow-hidden sm:max-h-56"
                      key={image.id}
                      src={image.urls.small}
                      alt={image.description}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default GallerySearchbar;
