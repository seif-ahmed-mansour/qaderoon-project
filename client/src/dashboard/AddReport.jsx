import React, { useState } from 'react';
import axios from 'axios';

const AddReport = () => {
  const [reportTitle, setReportTitle] = useState('');
  const [reportDesc, setReportDesc] = useState('');
  const [reportImg, setReportImg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = { reportTitle, reportDesc, reportImg };
    try {
      await axios.post(`${process.env.REACT_APP_HOST_SERVER}reports`, reportData);
      alert('Report added successfully');
    } catch (error) {
      console.error('Error adding report:', error);
      alert('Failed to add report');
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
            Report Image URL
          </label>
          <input
            type="text"
            id="reportImg"
            value={reportImg}
            onChange={(e) => setReportImg(e.target.value)}
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