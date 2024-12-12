import { Link } from "react-router-dom";

const Articles = ({ Article }) => {
  const text = Article.description;
  const result = text.substring(0, 100);

  return (
    <div className="max-w-lg p-4 shadow-md  text-gray-800 mx-auto hover:">
      <div className="space-y-4">
        {Article.premium && Article.premium ? (
          <div className="badge badge-secondary">Premium</div>
        ) : null}
        <div className="space-y-2">
          <img
            src={Article.image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
        </div>
        <div className="space-y-2 max-h-8">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-2xl font-semibold text-violet-600">
              {Article.title}
            </h3>
          </a>
          <div className=" my-8">
            <p className="leading-snug text-xl text-gray-600">
              <span className=""> {result}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-between p-2 mt-24 space-x-4 ">
        <div className="justify-start flex items-center text-2xl my-5 font-serif bold text-gray-600">
          Published by :{Article.Publisher}
        </div>

        <div>
          {" "}
          <span>
            <a
              rel="noopener noreferrer"
              href="#"
              className="font-bold hover:underline text-gray-600"
            ></a>
          </span>
          {/* <img
            src=""
            alt=""
            className="w-12 h-12 rounded-lg bg-gray-500"
          /> */}
          .
          <div className=" flex gap-3">
            {Article.tags.map((tag, index) => {
              // console.log(` - Tag: ${tag}`);
              return (
                <button key={index} className="btn btn-sm">
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Link to={`/article/${Article._id}`}>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 text-gray-50"
        >
          Read more
        </button>
      </Link>
    </div>
  );
};

export default Articles;


