import { useState, useEffect } from "react";
import axios from "axios";

const AddArticle = () => {
  const [title, setReportTitle] = useState("");
  const [content, setReportDesc] = useState("");
  const [img, setReportImg] = useState(null);
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_HOST_SERVER}authors`
        );
        setAuthors(response.data.data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleFileChange = (e) => {
    setReportImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("img", img);
    formData.append("author", selectedAuthor);

    try {
      await axios.post(
        `${import.meta.env.VITE_HOST_SERVER}articles`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setReportTitle("");
      setReportDesc("");
      setReportImg(null);
      setSelectedAuthor("");
      alert("Article added successfully");
    } catch (error) {
      console.error("Error adding article:", error);
      alert("Failed to add article");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-red-600">Add Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reportTitle">
            Article Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setReportTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reportDesc">
            Article Content
          </label>
          <textarea
            id="reportDesc"
            value={content}
            onChange={(e) => setReportDesc(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="reportImg">
            Article Image
          </label>
          <div className="relative border rounded shadow appearance-none focus-within:shadow-outline">
            <input
              type="file"
              id="reportImg"
              accept="image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/webp"
              onChange={handleFileChange}
              className="absolute opacity-0 w-full h-full cursor-pointer"
              required
            />
            <div className="flex justify-between items-center py-2 px-3 text-gray-700">
              <span>Choose a file...</span>
              <span className="bg-primary text-white rounded py-1 px-4">
                Browse
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="author">
            Author
          </label>
          <select
            id="author"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="">Select an author</option>
            {authors.map((author) => (
              <option
                key={author._id}
                value={author._id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add Article
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
