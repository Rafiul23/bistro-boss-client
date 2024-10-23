import RecImage from '../../../assets/menu/salad-bg.jpg';

const RecommendCard = () => {
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img
          src={RecImage}
          alt="Food"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-bold">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 hover:text-amber-400 border-b-4 text-amber-400 border-b-amber-400 uppercase">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
