import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../../hooks/useAxiousSecure";


const UserInfo = () => {
    const axiousSecure = useAxiousSecure();

    const { refetch, data: users = [] } = useQuery({
      //
      queryKey: ["user"],
      queryFn: async () => {
        const res = await axiousSecure.get("user");
        return res.data;
      },
    });

    console.log(users);
  
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
#
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>Email</th>
        <th>Rule</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>

        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        name
        </td>
        <td>email</td>
        <th>
          <button className="btn btn-ghost btn-xs">admin</button>
        </th>
      </tr>



    </tbody>

  </table>
</div>
        </div>
    );
};

export default UserInfo;