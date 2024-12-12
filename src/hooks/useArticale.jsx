import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";

const useArticale = () => {
  const axiousPublic = useAxiousPublic();
  const { data: articles = [], refetch } = useQuery({
    queryKey: ["article"],
    queryFn: async () => {
      const res = await axiousPublic.get("article");
      return res.data;
    },
  });


  return [articles, refetch];
};

export default useArticale;
