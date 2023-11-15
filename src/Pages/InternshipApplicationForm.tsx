import React, { useEffect, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    city: "",
    latitude: "",
    longitude: "",
    type: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.target);
  };
  const fileHandleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const userSelectedFile = fileInput.files[0];
      setSelectedFile(userSelectedFile);
    }
  };
  return (
    <div className=" m-16  ">
      <h1 className="mb-5 text-4xl">Internship Application Form</h1>
      <form className=" ">
        <div className="grid pr-4 group">
          <label className="pb-2 text-gray-700 text-[20px] font-normal text-left group-focus-within:text-lime-400">
            Essay
          </label>
          <textarea
            name="name"
            value={formData.name}
            onChange={changeHandler}
            className=" border rounded mb-4 shadow appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-lime-600"
            rows={8}
            cols={50}
            placeholder="place your esaye here....."
            required
          ></textarea>
        </div>
        <div className="grid pr-4 group">
          <label className="pb-2 text-gray-700 text-[20px] font-normal text-left group-focus-within:text-lime-400">
            Resume :
            <input
              className="border rounded m-4 w-96 shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-lime-600"
              type="file"
              onChange={fileHandleFileChange}
              accept=".pdf,.doc,.docx"
            ></input>
          </label>
        </div>
        <div className="grid pr-4 group">
          <label className="pb-2 text-gray-700 text-[20px] font-normal text-left group-focus-within:text-lime-400">
            Portfolio Link :
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={changeHandler}
              className="border rounded m-4 w-96 shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-lime-600"
              placeholder="place your url here....."
            ></input>
          </label>
        </div>
        <div>
          <button
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={clickHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
