const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
  return (
    <div className="card bg-base-200 relative">
      <figure>
        <img src={image} className="w-full" alt="Food" />
        <p className="bg-slate-900 absolute top-2 right-2 text-white px-2 py-1 rounded-lg"> ${price}</p>
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 hover:text-amber-400 border-b-4 text-amber-400 border-b-amber-400 uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
