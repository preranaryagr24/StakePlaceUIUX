import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const Idea = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    phone: "",
    email: "",
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/idea/createIdea`,
        formData
      );
      if (result.status === 201) {
        alert("Idea Submitted successfully");
        navigate("/");
      } else {
        alert("Idea Submission Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Idea Submission Failed");
    }
  };

  return (
    <div>
      <Navbar ideaBtn={false} />
      <section
        className={
          "bg-[url('/bg.svg')]  w-full  min-h-[85vh] flex justify-center items-center"
        }
      >
        <div className="w-full">
          <form className=" w-[80%] mx-auto px-6 flex flex-col border-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-10">
            <div className="mx-auto pb-6">
              <h2 className="text-gray-800 font-bold text-2xl">NEW IDEA</h2>
            </div>
            <Input
              onChange={handleChange}
              value={formData.title}
              name={"title"}
              Name={"Title"}
              placeholder={"Enter Title"}
            />
            <Input
              onChange={handleChange}
              value={formData.description}
              name={"description"}
              Name={"Description"}
              placeholder={"Enter Description"}
            />
            <Input
              onChange={handleChange}
              value={formData.phone}
              name={"phone"}
              Name={"Phone"}
              placeholder={"Enter Phone"}
            />
            <Input
              onChange={handleChange}
              value={formData.email}
              name={"email"}
              Name={"Email"}
              placeholder={"Enter Email"}
            />

            <div className=" w-[54%] mx-auto  my-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className=" w-[150px] text-sm bg-blue-700 hover:opacity-90 text-white px-2 py-2.5 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Idea;
