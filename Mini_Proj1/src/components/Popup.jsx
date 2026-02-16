import React from "react";

const Popup = ({popup,setPopup,title,desc}) => {
    function trigerAlert(){
        alert("Functionality not added in this button")
    }
    
  return (
    <div>
      {/* popup */}
      {popup && (
        <div className=" flex items-center justify-center absolute top-0 left-0 w-screen h-screen w-[200px] h-[200px] bg-black/50">
          <button
            onClick={() => setPopup(false)}
            className="absolute bg-[#242424] top-[1rem] right-[1rem]"
          >
            ❌
          </button>

          <div className="w-full h-full rounded-lg max-w-[40rem] max-h-[20rem] bg-[#242424] p-5 flex items-center justify-center flex-col">
            <h1 className="text-2xl">⚠️ {title}</h1>
            <p className="text-lg my-5">
              {desc}
            </p>
            <div className="flex gap-14">
              <button onClick={trigerAlert} className="bg-[tomato]">No</button>
              <button onClick={trigerAlert} className="bg-green-500">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
