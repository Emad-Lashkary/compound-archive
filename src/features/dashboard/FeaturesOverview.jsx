import { GrGallery } from "react-icons/gr";
import { IoMdBook } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import useGetVocabs from "../Vocabs/useGetVocabs";
import useGetPhrases from "../Phrases/useGetPhrases";
import useGetImages from "../Gallery/UseGetImages";
import FeatureOverview from "./FeatureOverview";

function FeaturesOverview() {
  const { vocabRows } = useGetVocabs();
  const { phraseRows } = useGetPhrases();
  const { images } = useGetImages();

  return (
    <div className="flex w-[95%] flex-col items-center justify-around gap-5 rounded-xl bg-gradient-to-l from-blue-100 via-lime-100 to-blue-100 p-10 sm:flex-row sm:gap-0">
      <FeatureOverview route="vocabs" icon={<IoLanguage className="size-10" />}>
        {vocabRows?.length} vocabs added
      </FeatureOverview>

      <FeatureOverview route="phrases " icon={<IoMdBook className="size-10" />}>
        {phraseRows?.length} phrases added
      </FeatureOverview>

      <FeatureOverview route="gallery" icon={<GrGallery className="size-10" />}>
        {images?.length} photos added
      </FeatureOverview>
    </div>
  );
}

export default FeaturesOverview;
