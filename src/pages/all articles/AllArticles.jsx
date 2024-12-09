import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../hooks/useAxiousPublic";
import Articles from "./articles/Articles";

const AllArticles = () => {
  const axiousPublic = useAxiousPublic();

  const { data: articles = {} } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiousPublic.get("article");
      return res.data;
    },
  });
  console.log(articles);
  return (
    <>
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
