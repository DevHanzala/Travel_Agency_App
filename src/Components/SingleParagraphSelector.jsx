import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

const SingleParagraphSelector = () => {
  const [selected, setSelected] = useState(""); // State to manage selected option

  return (
    <div className="w-[53vw] bg-white shadow-xl p-2 rounded-md mb-3 ">
      <div className="w-[52vw]">
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
              onChange={() => setSelected("paragraph1")}
            />
            <label
              htmlFor="paragraph1"
              className={`p-2 rounded-lg flex items-center justify-between space-x-4 cursor-pointer transition-all duration-200 ${
                selected === "paragraph1" ? "bg-[#8DD3BB] text-white" : "bg-[#8DD3BB]"
              }`}
            >
              <div>
                <p className=""><span className="bg-black mr-3 text-sm text-white px-2 rounded-md">visa
                    </span>***4321 <span className="text-xs ml-2">02/27</span></p>
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
        </form>
      </div>
    </div>
  );
};

export default SingleParagraphSelector;
