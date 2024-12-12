import { useForm } from "react-hook-form";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import Swal from "sweetalert2";

const AddPublisher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiousPublic = useAxiousPublic();

  //api key from imagebb
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    //image upload to imageBB and get url from it
    const imageFile = { image: data.image[0] };
    const res = await axiousPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const publisher = {
        name: data.name,
        image: res.data.data.display_url,
      };
      const publisherRes = await axiousPublic.post("/publisher", publisher);

      if (publisherRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been saved`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div className=" mx-auto">
      <h1 className=" text-4xl uppercase font-serif text-center">
        {" "}
        Add a Publisher
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" lg:justify-center lg:flex lg:gap-5">
          <div className="">
            <label className="form-control w-full max-w-xs p-1">
              <div className="label">
                <span className="label-text">Publisher name</span>
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>

          <div className="col-span-full sm:col-span-2">
            <div className="label">
              <span className="label-text">Publisher logo</span>
            </div>
            <input
              {...register("image")}
              name="image"
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className=" mt-3  my-4 lg:py-6">
            <button className="btn btn-primary" type="submit">
              add publisher
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPublisher;
