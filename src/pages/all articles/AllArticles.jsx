import Articles from "./articles/Articles";
import useApproveArticale from "../../hooks/useApproveArticale";
import UsePublishers from "../../hooks/UsePublishers";
import { useState } from "react";


const AllArticles = () => {
  const [article] = useApproveArticale();
  const publisher = UsePublishers();
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const articles = article.filter((item) =>
    selectedValue ? item.Publisher === selectedValue : true
  );

  // Combine all tags into a single array
  const allTags = article.flatMap(({ tags }) => tags);
  const uniqueTags = [...new Set(allTags)];

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              name="category"
              onChange={handleChange}
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Publisher</option>
              {publisher.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              name="tag"
           
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Tag</option>
              {uniqueTags?.map((item, id) => (
                <option key={id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <form >
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                placeholder="Enter article Title"
                aria-label="Enter article Title"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <button  className="btn">
            Reset
          </button>
        </div>
      </div>
      <h2 className="text-5xl font-serif lg:text-center text-center text-gray-900">
        Our All content
      </h2>
      <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:mt-10 ">
        {articles.map((Article, idx) => (
          <Articles Article={Article} key={idx}></Articles>
        ))}
      </div>
    </>
  );
};

export default AllArticles;
