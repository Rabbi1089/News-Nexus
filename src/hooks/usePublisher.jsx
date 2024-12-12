import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";

const usePublisher = () => {
  const axiousPublic = useAxiousPublic();
  const { data } = useQuery({
    queryKey: ["publisher"],
    queryFn: async () => {
      const res = await axiousPublic.get("publisher");
      return res.data;
    },
  });

  return data
};

export default usePublisher;
