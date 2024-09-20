import { IoMdBook } from "react-icons/io";
import FeaturesHeader from "../ui/FeaturesHeader";
import PhrasesTable from "../features/Phrases/PhrasesTable";
import AddButton from "../features/Phrases/AddButton";
import Searchbar from "../ui/Searchbar";
import Descriptions from "../ui/Descriptions";

const description =
  'This webpage offers a comprehensive list of English phrases and slang terms. Each entry is generated via an input form, accessible by clicking the "Add New Phrase" button located in the secondary header. Only authenticated users are permitted to submit data to the database. To authenticate, users must navigate to the login page using the button in the main header and enter the provided email and password. Non-authenticated users can only visit sections of the website. Additionally, a search bar is available below, enabling all users to search through the phrases and find those containing the words they searched for. Users can also sort and filter phrases by the time they were added or by difficulty level using the buttons at the top of the phrases table.';

function Phrases() {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-5">
      <FeaturesHeader icon={<IoMdBook className="size-6" />}>
        <div className="flex w-[100%] flex-col items-center gap-2 sm:w-full sm:flex-row sm:gap-0">
          <span>Phrases Page</span>
          <AddButton />
        </div>
      </FeaturesHeader>
      <Descriptions title="Phrases">{description}</Descriptions>
      <Searchbar param="phrase" />
      <PhrasesTable />
    </div>
  );
}

export default Phrases;
