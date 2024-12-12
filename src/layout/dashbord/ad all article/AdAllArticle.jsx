import Swal from "sweetalert2";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import { useState } from "react";
import useArticale from "../../../hooks/useArticale";


const AdAllArticle = () => {
  const [articles, refetch] = useArticale()
  const axiousSecure = useAxiousSecure();
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiousSecure.delete(`/admin/article/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              icon: "error",
              text: "Deleted successfully!",
            });
          }
        });
      }
    });
  };

  const premiumStatus = (id) => {
    axiousSecure.patch(`/admin/premium/${id}`).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "article has been saved in premium list",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeclineMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = selectedArticleId;
    const message = form.declineMessage.value;
    console.log("handleDeclineMessage", id, message);
    axiousSecure
      .patch(`/admin/article/${id}`, {
        status: "decline",
        declineMessage: message,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Your article is declined!",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        }
      });
  };

  const handleArticleStatusDecline = (id) => {
    setSelectedArticleId(id);
  };

  const handleArticleStatusApprove = (id) => {
    axiousSecure
      .patch(`/admin/article/${id}`, { status: "approve" })
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Article approved",
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
              <th>Article Title</th>
              <th>Article Author</th>
              <th>Publisher</th>
              <th>Posted Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, id) => (
              <tr key={article._id}>
                <th>{id + 1}</th>
                <td>
                  <div className="font-bold">{article.title}</div>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={
                            article?.author?.img
                              ? article?.author?.img
                              : "https://img.daisyui.com/images/profile/demo/2@94.webp"
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-center">
                        {" "}
                        {article?.author?.name}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {article?.author?.email}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td>{article?.Publisher}</td>
                <td>
                  {article?.created_at
                    ? article?.created_at.split("T")[0]
                    : null}
                </td>
                <th>
                  {article?.status === "approve" ? (
                    <span>Approved</span>
                  ) : article?.status === "decline" ? (
                    <span className="text-red-600">Declined</span>
                  ) : (
                    <>
                      {/* You can open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Decline
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form onSubmit={handleDeclineMessage} method="dialog">
                            <label className="form-control w-full max-w-xs">
                              <div className="label">
                                <span className="label-text">
                                  What is reason of decline?
                                </span>
                              </div>
                              <input
                                type="text"
                                name="declineMessage"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                              />
                            </label>
                            {/* modal start here */}
                            <button
                              onClick={() => {
                                handleArticleStatusDecline(article._id);
                              }}
                              className="btn btn-ghost btn-xs text-red-600 mt-4"
                            >
                              Decline{" "}
                            </button>
                          </form>
                        </div>
                      </dialog>
                      <button
                        onClick={() => {
                          handleArticleStatusApprove(article._id);
                        }}
                        className="btn ml-3 text-green-500"
                      >
                        Approve{" "}
                      </button>
                    </>
                  )}
                </th>
                <th>
                  <button
                    onClick={() => {
                      handleDelete(article._id);
                    }}
                    className="btn btn-ghost btn-xs text-red-600"
                  >
                    Delete
                  </button>
                  {article.premium ? (
                    <span className=" text-yellow-700">Premium</span>
                  ) : (
                    <button
                      onClick={() => {
                        premiumStatus(article._id);
                      }}
                      className="btn btn-ghost btn-xs"
                    >
                      Make Premium
                    </button>
                  )}
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
