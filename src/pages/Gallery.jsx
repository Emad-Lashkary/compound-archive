import { GrGallery } from "react-icons/gr";
import GallerySearchbar from "../features/Gallery/GallerySearchbar";
import FeaturesHeader from "../ui/FeaturesHeader";
import GalleryUploader from "../features/Gallery/GalleryUploader";
import GalleryTable from "../features/Gallery/GalleryTable";
import Descriptions from "../ui/Descriptions";

const descriptions1 =
  "This page features a gallery showcasing a variety of images from diverse and serene locations, designed to enhance the website’s user interface and provide a more relaxing experience for users and visitors. Photos can be uploaded through the input field below, and each image can be deleted using the eraser icon located at the bottom left of each photo.";
const descriptions2 =
  "Only authenticated users are authorized to upload photos to the database or delete them. To authenticate, users must navigate to the login page via the button in the main header and enter their provided email and password. Non-authenticated users are limited to viewing sections of the website.";
const descriptions3 =
  "Users can also sort images by the time they were added using the buttons at the top of the gallery. Additionally, a search bar below allows all users to find images of their choice from the Unsplash API. Click on the images to view them in full size.";

function Gallery() {
  return (
    <div className="flex flex-col items-center gap-3">
      <FeaturesHeader icon={<GrGallery className="size-6" />}>
        Gallery Page
      </FeaturesHeader>

      <Descriptions title="Gallery">
        {descriptions1}
        <br />
        {descriptions2}
        <br />
        {descriptions3}
      </Descriptions>

      <GallerySearchbar />
      <GalleryUploader />
      <GalleryTable />
    </div>
  );
}

export default Gallery;
