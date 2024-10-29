import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const FoodCard = ({item}) => {
    const {image, name, recipe, price, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();


    const handleAddToCart = food =>{
      if(user && user?.email){
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }

        axiosSecure.post('/carts', cartItem)
        .then(res =>{
          if(res.data.insertedId){
            Swal.fire({
              title: "Added to Cart!",
              text: "Your item has been added to cart.",
              icon: "success"
            });
          }
        })

      } else {
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add to the cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}});
          }
        });
      }
    }
  return (
    <div className="card bg-base-200 relative">
      <figure>
        <img src={image} className="w-full" alt="Food" />
        <p className="bg-slate-900 absolute top-2 right-2 text-white px-2 py-1 rounded-lg"> ${price}</p>
      </figure>
      <div className="card-body text-center space-y-2">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=> handleAddToCart(item)} className="btn btn-outline bg-slate-200 border-0 hover:text-amber-400 border-b-4 text-amber-400 border-b-amber-400 uppercase">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
