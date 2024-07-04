import React, { useState } from "react";

const UserForm = () => {
  const [userFormInputes, setUserFormInputes] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/users", {
        name: userFormInputes.name,
        email: userFormInputes.email,
        phone: userFormInputes.phone,
        address: userFormInputes.address,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" my-auto mx-auto w-1/3 border flex flex-col justify-between items-center">
      <h1 className=" text-3xl my-5">user form</h1>
      <LabelInput
        onChange={(e) => {
          setUserFormInputes({
            ...userFormInputes,
            name: e.target.value,
          });
        }}
        placeholder={"Name"}
        label={"Name"}
      />
      <LabelInput
        onChange={(e) => {
          setUserFormInputes({
            ...userFormInputes,
            email: e.target.value,
          });
        }}
        placeholder={"Email"}
        label={"Email"}
      />
      <LabelInput
        onChange={(e) => {
          setUserFormInputes({
            ...userFormInputes,
            phone: e.target.value,
          });
        }}
        placeholder={"Number"}
        label={"Number"}
      />
      <div className="w-[80%] mx-auto mb-4">
        <label
          htmlFor={"Address"}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {"Address"}
        </label>
        <textarea
          placeholder="Address"
          className=" w-full p-2 h-[120px] border rounded-md"
        ></textarea>
      </div>
      <button
        type="button"
        className=" rounded-md p-2 w-[80%] mt-5 bg-black text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className=" h-[50px]"></div>
    </div>
  );
};

function LabelInput({ type = "text", label, placeholder, onChange }) {
  return (
    <div className=" w-[80%] mx-auto mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black sm:text-sm"
        required
      />
    </div>
  );
}

export default UserForm;
