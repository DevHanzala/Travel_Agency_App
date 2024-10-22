import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const ParagraphSelector = () => {
  const [selected, setSelected] = useState(""); // State to manage selected option
  const navigate = useNavigate(); // Initialize the navigate function

  const handleRadioChange = (value) => {
    setSelected(value);
    if (value === "paragraph1") {
      navigate('/bookingdetail2'); // Navigate to bookingdetail2 when first paragraph is selected
    }
  };

  return (
    <div className="w-[55vw] bg-white shadow-xl p-2 rounded-md mb-3">
      <div className="w-[53vw]">
        <form>
          {/* First Paragraph */}
          <div className="mb-4">
            <input
              type="radio"
              id="paragraph1"
              name="paragraph"
              value="paragraph1"
              className="hidden"
              checked={selected === "paragraph1"}
              onChange={() => handleRadioChange("paragraph1")} // Call handleRadioChange
            />
            <label
              htmlFor="paragraph1"
              className={`p-4 rounded-lg flex items-center justify-between space-x-4 cursor-pointer transition-all duration-200 ${
                selected === "paragraph1" ? "bg-[#8DD3BB] text-white" : "bg-white/30"
              }`}
            >
              <div>
                <p className="text-lg">Pay in full.</p>
                <p className="text-lg">Pay the total and you are all set.</p>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Radio
                      style={{ color: selected === "paragraph1" ? "white" : "gray" }} // White when selected, gray otherwise
                    />
                  }
                />
              </div>
            </label>
          </div>

          {/* Second Paragraph */}
          <div className="mb-4">
            <input
              type="radio"
              id="paragraph2"
              name="paragraph"
              value="paragraph2"
              className="hidden"
              checked={selected === "paragraph2"}
              onChange={() => handleRadioChange("paragraph2")} // Call handleRadioChange
            />
            <label
              htmlFor="paragraph2"
              className={`p-4 rounded-lg flex items-center justify-between space-x-4 cursor-pointer transition-all duration-200 ${
                selected === "paragraph2" ? "bg-[#8DD3BB] text-white" : "bg-white/30"
              }`}
            >
              <div>
                <p className="text-lg">Pay with installment.</p>
                <p className="text-lg">Pay in multiple payments over time.</p>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Radio
                      style={{ color: selected === "paragraph2" ? "white" : "gray" }} // White when selected, gray otherwise
                    />
                  }
                />
              </div>
            </label>
          </div>
        </form>
        <p className="px-3 font-thin underline">more info</p>
      </div>
    </div>
  );
};

export default ParagraphSelector;
