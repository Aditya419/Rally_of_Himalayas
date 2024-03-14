import React from "react";
import { LuBookOpen } from "react-icons/lu";

const Card = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row justify-center gap-16 md:py-10">
        <div className="w-80 md:w-96 flex flex-col gap-4 items-center  text-center shadow-xl">
          <img
            src="https://chambamotorsport.com/wp-content/uploads/2023/05/brownbearxsports_20210506_p_2567614488851563251_1_2567614488851563251-e1683530652216.jpg"
            alt=""
            srcset=""
          />
          <div className="text-lg font-semibold  md:py-2">THIS IS A CARD.</div>
          <div className="">
            The event named “Rally of Chamba 2021” held on 9th to 11th April
            2021, kick-started the tourist extravaganza which has been named
            “Chalo Chamba” or "Let’s go to Chamba". Which will be a yearly fest
            organized by Government of Himachal Pradesh. We successfully
            conducted this event under the supervision of Chamba Administration.
          </div>
          <div className="text-orange-500 py-2 mb-4 w-28 h-10 rounded-sm border-2  border-slate-50 flex items-center gap-1 ">
            <LuBookOpen />
            <a>Read More</a>
          </div>
        </div>
        <div className="w-80 md:w-96 flex flex-col items-center text-center gap-4 shadow-xl">
          <img
            src="https://chambamotorsport.com/wp-content/uploads/2023/05/brownbearxsports_20210506_p_2567614488851563251_1_2567614488851563251-e1683530652216.jpg"
            alt=""
            srcset=""
          />
          <div className="text-lg font-semibold  md:py-2">THIS IS A CARD.</div>
          <div>
            The event named “Rally of Chamba 2021” held on 9th to 11th April
            2021, kick-started the tourist extravaganza which has been named
            “Chalo Chamba” or "Let’s go to Chamba". Which will be a yearly fest
            organized by Government of Himachal Pradesh. We successfully
            conducted this event under the supervision of Chamba Administration.
          </div>
          <div className="text-orange-500 mb-4 py-2 w-28 h-10 rounded-sm border-2 border-slate-50 flex items-center gap-1">
            <LuBookOpen />
            <a>Read More</a>
          </div>
        </div>
        <div className="w-80 md:w-96 flex flex-col items-center gap-4 text-center shadow-xl">
          <img
            src="https://chambamotorsport.com/wp-content/uploads/2023/05/brownbearxsports_20210506_p_2567614488851563251_1_2567614488851563251-e1683530652216.jpg"
            alt=""
            srcset=""
          />
          <div className="text-lg font-semibold  md:py-2">THIS IS A CARD.</div>
          <div>
            The event named “Rally of Chamba 2021” held on 9th to 11th April
            2021, kick-started the tourist extravaganza which has been named
            “Chalo Chamba” or "Let’s go to Chamba". Which will be a yearly fest
            organized by Government of Himachal Pradesh. We successfully
            conducted this event under the supervision of Chamba Administration.
          </div>
          <div className="text-orange-500 mb-4 py-2 w-28 h-10 rounded-sm border-2 border-slate-50 flex items-center gap-1">
            <LuBookOpen />
            <a>Read More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
