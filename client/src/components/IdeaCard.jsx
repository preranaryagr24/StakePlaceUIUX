import React from "react";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const IdeaCard = ({ title, description, phone, email }) => {
  return (
    <div class="max-w-sm w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow drop-shadow-lg ">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 ">{description}</p>
      <div className=" flex mt-2 justify-between   items-center  ">
        <p className="flex items-center gap-2 ">
          <BsTelephoneFill /> +{phone}
        </p>
      </div>
      <div className=" flex mt-2 justify-between   items-center ">
        <p className=" flex items-center gap-1 ">
          <MdEmail />
          {email}
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;
