import { FaTrashCan } from "react-icons/fa6";
import useCart from "./../../../hooks/useCart";

const Cart = () => {
  const { cart } = useCart();
  const totalPrice = cart?.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 className="text-4xl text-center my-2 font-bold">My Cart</h2>
      <div className="my-4 flex justify-between p-4 bg-base-200">
        <h2 className="text-4xl text-center font-medium">
          Total Items: {cart?.length}
        </h2>
        <h2 className="text-4xl text-center font-medium">
          Total Price: ${totalPrice}{" "}
        </h2>
        <button className="btn bg-[#d1a054] text-white">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#d1a054] text-white">
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name of Item</th>
              <th>Customer Eamil</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                cart?.map(item =>  <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="food"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.name}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                     $ {item.price}
                    </td>
                    <td>
                        <button className="btn text-red-500"><FaTrashCan></FaTrashCan></button>
                    </td>
                    
                  </tr>)
            }
           
           
           
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Cart;
