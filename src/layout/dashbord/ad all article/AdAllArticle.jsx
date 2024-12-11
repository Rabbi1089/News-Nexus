import Swal from "sweetalert2";
import useArticale from "../../../hooks/useArticale";
import useAxiousSecure from "../../../hooks/useAxiousSecure";
import { useState } from "react";

const AdAllArticle = () => {
  const [articles, refetch] = useArticale();
  const axiousSecure = useAxiousSecure();

  const handleDelete = (id) => {
    axiousSecure.delete(`/admin/article/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        Swal.fire({
          icon: "error",
          text: "Deleted successfully!",
        });
      }
    });
  };

  const premiumStatus = (id) => {
    axiousSecure
      .patch(`/admin/premium/${id}`, { status: "decline" })
      .then((res) => {
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

  const handleArticleStatusDecline = (id) => {
    axiousSecure
      .patch(`/admin/article/${id}`, { status: "decline" })
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
                      <button
                        onClick={() => {
                          handleArticleStatusDecline(article._id);
                        }}
                        className="btn btn-ghost btn-xs text-red-600"
                      >
                        Decline{" "}
                      </button>
                      <button
                        onClick={() => {
                          handleArticleStatusApprove(article._id);
                        }}
                        className="btn btn-ghost btn-xs text-green-500"
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
