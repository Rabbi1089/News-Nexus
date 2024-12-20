
import useAuth from './useAuth';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiousSecure();
    const { data : isAdmin , isPending : isAdminLoading} = useQuery({
        queryKey: [user?.email , 'isAdmin'],
        queryFn: async() => {
            const res = await axiousSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin
        }
      })
    return [isAdmin , isAdminLoading]
};

export default useAdmin;