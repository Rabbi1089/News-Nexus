import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";

const useApproveArticale = () => {
    const axiousPublic = useAxiousPublic()

    const { data: approveAticles = [], refetch } = useQuery({
        queryKey: ["approveAticles"],
        queryFn: async () => {
          const res = await axiousPublic.get("approveAticles");
          return res.data;
        },
      });

      return [approveAticles, refetch];
};

export default useApproveArticale;