const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;
  return (
    <div className="card bg-base-200">
      <figure>
        <img src={image} className="w-full" alt="Food" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <p>Price: ${price}</p>
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
