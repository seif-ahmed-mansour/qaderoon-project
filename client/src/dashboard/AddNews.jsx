import React, { useState } from "react";
import axios from "axios";

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState("");
  const [newsDesc, setNewsDesc] = useState("");
  const [newsImg, setNewsImg] = useState(null);

  const handleFileChange = (e) => {
    setNewsImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("newsTitle", newsTitle);
    formData.append("newsDesc", newsDesc);
    formData.append("newsImg", newsImg);

    try {
      await axios.post(`${import.meta.env.VITE_HOST_SERVER}news`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
        setNewsTitle("");
        setNewsDesc("");
        setNewsImg(null);
      alert("News added successfully");
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Add News</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newsTitle">
            News Title
          </label>
          <input
            type="text"
            id="newsTitle"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newsDesc">
            News Description
          </label>
          <textarea
            id="newsDesc"
            value={newsDesc}
            onChange={(e) => setNewsDesc(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newsImg">
            News Image
          </label>
          <input
            type="file"
            id="newsImg"
            accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add News
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
