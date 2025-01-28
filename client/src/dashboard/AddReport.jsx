import { useState } from "react";
import axios from "axios";

const AddReport = () => {
  const [reportTitle, setReportTitle] = useState("");
  const [reportDesc, setReportDesc] = useState("");
  const [reportImg, setReportImg] = useState(null);

  const handleFileChange = (e) => {
    setReportImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("reportTitle", reportTitle);
    formData.append("reportDesc", reportDesc);
    formData.append("reportImg", reportImg);

    try {
      await axios.post(`${import.meta.env.VITE_HOST_SERVER}reports`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setReportTitle("");
      setReportDesc("");
      setReportImg(null);
      alert("Report added successfully");
    } catch (error) {
      console.error("Error adding report:", error);
      alert("Failed to add report");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Add Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reportTitle">
            Report Title
          </label>
          <input
            type="text"
            id="reportTitle"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reportDesc">
            Report Description
          </label>
          <textarea
            id="reportDesc"
            value={reportDesc}
            onChange={(e) => setReportDesc(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reportImg">
            Report Image
          </label>
          <input
            type="file"
            id="reportImg"
            accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
            onChange={handleFileChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Report
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReport;
