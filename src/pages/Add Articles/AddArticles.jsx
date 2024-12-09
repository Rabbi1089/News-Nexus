import Swal from "sweetalert2";
import useAxiousPublic from "../../hooks/useAxiousPublic";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "tag1", label: "tag1" },
  { value: "tag12", label: "tag12" },
  { value: "tag13", label: "tag13" },
];

const AddArticles = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const axiosPublic = useAxiousPublic();
  console.log(selectedOption);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //api key from imagebb
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const onSubmit = async (data) => {
    // console.log(data);

    //image upload to imageBB and get url from it
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    //here imagebb give display url console.log(res.data);

    if (res.data.success) {
      const Article = {
        title: data.title,
        Publisher: data.Publisher,
        tags: selectedOption,
        description: data.description,
        image: res.data.data.display_url,
      };
      const articleRes = await axiosPublic.post("/article", Article);
      console.log("from menus", articleRes.data);
      console.log(Article);

      if (articleRes.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.title} has been saved`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div className="">
        <section className="p-6 bg-gray-100 text-gray-900">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="col-span-full sm:col-span-3  ">
                <label htmlFor="name" className="text-lg">
                  Title
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="title"
                  className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                />
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="Publisher" className="text-lg">
                    Publisher
                  </label>
                  <select
                    {...register("Publisher", { required: true })}
                    className="select w-full max-w-lg"
                  >
                    <option disabled selected>
                      Category
                    </option>
                    <option value="publisherOne">publisher 2</option>
                    <option value="publisherTwo">publisher two</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="" className="text-lg">
                    Price
                  </label>

                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    isMulti
                   
                    options={options}
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="bio" className="text-sm">
                    {" "}
                    Description
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    id="bio"
                    placeholder="description"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  ></textarea>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <input
                    {...register("image")}
                    type="file"
                    className="file-input w-full max-w-xs"
                  />
                </div>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-active">
              Add item
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddArticles;