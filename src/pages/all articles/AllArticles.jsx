import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "../../hooks/useAxiousPublic";
import Articles from "./articles/Articles";
import { useEffect, useState } from "react";
import axios from "axios";

const AllArticles = () => {
  const axiousPublic = useAxiousPublic();
  //const [articles , setArticles] = useState([])
  //console.log('article from ', articles);

 
  const { data: articles = [] } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiousPublic.get("article");
      return res.data;
    },
  });
  console.log(articles);

 /*
  axiousPublic.get('article')
  .then(function (response) {
    setArticles(response.data)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

    */
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
