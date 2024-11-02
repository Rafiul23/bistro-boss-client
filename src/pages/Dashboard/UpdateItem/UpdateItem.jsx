import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_Image_hosting_Api_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const menuData = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { name, category, price, recipe, _id } = menuData;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (imageRes.data.success) {
      const updatedMenuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: imageRes.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, updatedMenuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} has been updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update an Item"}
        subHeading={"Refresh Item"}
      ></SectionTitle>
      <div className="bg-base-200 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* recipe name */}
          <div className="my-4">
            <label className="form-control w-3/4 ">
              <div className="label">
                <span className="label-text font-semibold">
                  Name of recipe*
                </span>
              </div>
            </label>
            <input
              type="text"
              defaultValue={name}
              {...register("name")}
              placeholder="name of recipe"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-4">
            {/* category */}
            <div className="w-full md:w-1/2">
              <label className="form-control w-3/4 ">
                <div className="label">
                  <span className="label-text font-semibold">
                    Select Category
                  </span>
                </div>
              </label>
              <select
                className="select select-bordered w-full "
                defaultValue={category}
                {...register("categoy")}
              >
                <option value={"default"} disabled>
                  Select a category
                </option>
                <option value="salad">Salad</option>

                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            <div className="w-full md:w-1/2">
              {/* price */}
              <label className="form-control w-3/4 ">
                <div className="label">
                  <span className="label-text font-semibold">Price*</span>
                </div>
              </label>
              <input
                type="number"
                {...register("price")}
                defaultValue={price}
                placeholder="price of recipe"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>

          <div className="w-full my-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-semibold">Recipe*</span>
              </div>
            </label>
            <textarea
              defaultValue={recipe}
              className="textarea textarea-bordered textarea-lg w-full"
              {...register("recipe")}
              required
            ></textarea>
          </div>

          <div className="my-4">
            <label className="form-control">
              <div className="label">
                <span className="label-text font-semibold">Recipe Image*</span>
              </div>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
              required
            />
          </div>
          <button className="btn bg-[#d1a054] text-white">
            Update Items <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
