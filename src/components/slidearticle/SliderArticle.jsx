import useArticale from "../../hooks/useArticale";

const SliderArticle = () => {
  const articles = useArticale();

  return (
    <>
      <div className="">
        {articles.map((article) => (
          <div
            key={article._id}
            className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 mx-auto"
          >
            <div className="flex justify-between pb-4 border-bottom">
              <div className="flex items-center">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="mb-0 capitalize text-gray-800"
                >
                  {article?.premium && article?.premium ? (
                    <div className="badge badge-secondary">Premium</div>
                  ) : null}
                </a>
              </div>
              <a rel="noopener noreferrer" href="#">
                Publisher :{article?.publisher}
              </a>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={article?.image}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="flex items-center text-xl">
                  <span>{article?.created_at.split("T")[0]}</span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold text-violet-600">
                    {article?.title}
                  </h3>
                </a>
                <p className="leading-snug text-gray-600">
                  {article?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-lg p-4 shadow-md bg-gray-50 text-gray-800 mx-auto">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize text-gray-800"
            >
              {article?.premium && article?.premium ? (
                <div className="badge badge-secondary">Premium</div>
              ) : null}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            Publisher :{article?.publisher}
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={article?.image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="flex items-center text-xl">
              <span>{article?.created_at.split("T")[0]}</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold text-violet-600">
                {article?.title}
              </h3>
            </a>
            <p className="leading-snug text-gray-600">{article?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderArticle;
