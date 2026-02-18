import { useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {

  return (
    <>
      <div className="w-full flex flex-col p-6">
        <div>
          {data.map((phoneDetail, idx) => {
            return (
              <div key={idx} className="mb-6 flex p-6 bg-[#282828] rounded-lg ">
                {/* image */}
                <div className="w-1/4">
                  <img src={phoneDetail.image} alt="Phone-Img" />
                </div>

                {/* details */}
                <div className="flex-1">
                  <h1>{phoneDetail.title}</h1>
                  <p className="my-1">
                    ⭐{phoneDetail.rating} || {phoneDetail.reviews}
                  </p>

                  <ul className="my-3">
                    {phoneDetail.details.map((item, idx) => {
                      return <li className="list-disc ml-6" key={idx}>{item}</li>;
                    })}
                  </ul>

                  <p className="text-green-500">{phoneDetail.offers.exchangeOffer}</p>
                  <p className="text-green-300 mt-2">{phoneDetail.offers.bankOffer}</p>
                </div>

                {/* price */}
                <div className="flex flex-col items-end">
                  <p className="text-2xl font-bold">{phoneDetail.price}</p>
                  <p className="line-through">{phoneDetail.originalPrice}</p>
                  <p className="text-green-500 text-lg">{phoneDetail.discount}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
