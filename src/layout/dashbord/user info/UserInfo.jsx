import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import Swal from "sweetalert2";

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

  // console.log(users);

  const handleAdminRule = (user) => {
    axiousSecure.patch(`/user/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is now admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Rule</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {" "}
                    {user.role === "admin" ? (
                      <p className=" text-gray-600 text-xl">Admin</p>
                    ) : (
                      <button
                        className="btn btn-ghost text-sm bg-violet-200"
                        onClick={() => {
                          handleAdminRule(user);
                        }}
                      >
                       Make admin
                      </button>
                    )}
                  </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
