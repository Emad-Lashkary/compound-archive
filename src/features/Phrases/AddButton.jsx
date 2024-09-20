import { useState } from "react";
import Modal from "../../ui/Modal";
import AddPhraseForm from "./AddPhraseForm";
import { RiMailAddLine } from "react-icons/ri";

function AddButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex items-center gap-2 max-w-[100%]">
      <button
        onClick={() => setOpenModal((show) => !show)}
        className="flex w-max scale-[75%] items-center justify-center gap-2 rounded-full bg bg-gradient-to-br from-lime-300 via-blue-600 to-lime-300 px-3 py-3 transition-all hover:shadow-[0px_5px_30px] hover:shadow-blue-200 text-blue-50"
      >
        <span>Add new phrase</span> <RiMailAddLine className="scale-95" />
      </button>
      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <AddPhraseForm setOpenModal={setOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export default AddButton;
