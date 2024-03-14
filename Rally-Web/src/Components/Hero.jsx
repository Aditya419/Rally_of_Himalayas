import React from "react";

const Hero = () => {
  return (
    <>
      <div className="py-3">
        <div className="flex justify-center md:items-center md:pt-6">
          <div className=" border-t-4 border-orange-500 py-2 w-20 mt-2 md:mx-5"></div>
          <h6 className=" text-sm md:text-lg md:font-semibold text-center w-[600px] md:w-[1600px] ">
            Rally of Himalayas, our latest venture in motorsports, merges the
            thrill of racing with exploration in remote destinations to foster
            growth and advancement. Previously, our events were organized under
            the banner of Brownbear Motorsport, a subsidiary of the Chamba
            Motorsport entity.
          </h6>
          <div className=" border-t-4 border-orange-500 py-2 w-20 mt-2 md:mx-5"></div>
        </div>
        <div className="font-bold text-4xl md:text-5xl py-2 md:py-10 flex justify-center">
          Upcoming Event
        </div>
        <img
          className="object-cover h-[500px] md:h-[1150px]"
          src="https://chambamotorsport.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-20-at-9.40.11-AM-1-1-e1684556028650-1536x870.jpeg"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
