import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        subHeading={"What's new?"}
        heading={"add an item"}
      ></SectionTitle>
      <div className="bg-base-200 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* recipe name */}
        <div className="my-4">
        <label className="form-control w-3/4 ">
            <div className="label">
              <span className="label-text font-semibold">Name of recipe*</span>
            </div>
          </label>
          <input
              type="text"
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
              <span className="label-text font-semibold">Select Category</span>
            </div>
          </label>
          <select
            className="select select-bordered w-full "
            select
            {...register("categoy")}
          >
            <option disabled>Select a category</option>
            <option value="salad">Salad</option>

            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drink">Drink</option>
          </select>
          </div>

          <div className="w-full md:w-1/2">
          <label className="form-control w-3/4 ">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
          </label>
          <input
              type="number"
              {...register("price")}
              placeholder="price of recipe"
              required
              className="input input-bordered w-full"
            />

            </div>  

          </div>
          
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItems;
