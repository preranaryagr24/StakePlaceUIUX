import React from "react";

const Input = ({ name, Name, value, onChange, placeholder }) => {
  return (
    <div className=" my-4 w-[90%] mx-auto group  flex items-center">
      <label className="font-bold text-black w-[20%] ">{Name}</label>
      <input
        onChange={onChange}
        type="text"
        name={name}
        value={value}
        className="flex-1 border rounded-md border-gray-300  outline-none p-2"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
