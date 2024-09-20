import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../services/ApiGallery";

function useGetImages() {
  const { data: images, isLoading } = useQuery({
    queryKey: ["gallery"],
    queryFn: getImages,
  });

  return { images, isLoading };
}
export default useGetImages;
