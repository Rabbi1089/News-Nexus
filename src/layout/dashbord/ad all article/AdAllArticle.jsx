import useArticale from "../../../hooks/useArticale";

const AdAllArticle = () => {
  const [articles] = useArticale();
  console.log(articles);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Article Title</th>
              <th>Article Author</th>
              <th>Publisher</th>
              <th>Posted Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">article title</div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {" "}
                        article author name
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          article author email
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>publisher</td>
                <td>posted date</td>
                <td>status</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                  <button className="btn btn-ghost btn-xs">Make Premium</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdAllArticle;
