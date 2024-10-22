import Modal from "./Modal";
import { useState } from "react";
import ParagraphSelector from "./ParagraphSelector";
import SingleParagraphSelector from "./SingleParagraphSelector";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ModalParagraphSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ParagraphSelector />
      <div className="bg-white shadow-xl p-2 mt-6 w-[55vw]">
        <SingleParagraphSelector />
        <div className="w-full">
          <div
            className="w-full  p-4 md:pt-16 my-2 border-2 border-dotted border-gray-400 rounded-lg text-center 
              focus:outline-none h-[200px] text-lg cursor-pointer relative"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          ><p>
            Add a new card
            </p>
            <AddCircleOutlineIcon/>
        
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ModalParagraphSelector;
