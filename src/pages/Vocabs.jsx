import { IoLanguage } from "react-icons/io5";
import FeaturesHeader from "../ui/FeaturesHeader";
import VocabsTable from "../features/Vocabs/VocabsTable";
import AddVocabForm from "../features/Vocabs/AddVocabForm";
import Descriptions from "../ui/Descriptions";
import Sort from "../ui/Sort";

const description =
  "This webpage offers a comprehensive list of English vocabs. Each entry is generated via the input form. Only authenticated users are permitted to submit data to the database. To authenticate, users must navigate to the login page using the button in the main header and enter the provided email and password. Non-authenticated users can only visit sections of the website. Users can also sort by the time they were added using the buttons at the top of the phrases table.";

function Vocabs() {
  return (
    <div className="flex flex-col items-center ">
      <FeaturesHeader icon={<IoLanguage className="size-6" />}>
        Vobabulary Page
      </FeaturesHeader>
      <Descriptions className="self-center mt-2" title="Phrases">
        {description}
      </Descriptions>
      <Sort param="vocab" className="justify-center" />
      <div className="flex flex-col justify-center  gap-8 md:flex-row sm:gap-4 w-[95%]">
        <VocabsTable />
        <AddVocabForm />
      </div>
    </div>
  );
}

export default Vocabs;
