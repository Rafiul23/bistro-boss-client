import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashCan } from "react-icons/fa6";

const ManageItems = () => {
  const [menu] = useMenu();


  const handleDeleteItem = (_id)=>{
    
  }

  return (
    <div>
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"manage all items"}
      ></SectionTitle>
      <div className="flex my-4 p-8">
        <h2 className="text-3xl font-semibold">Total Itemss: {menu?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL. No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>
                 
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item?.image}
                        alt={item.name}
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                 
                <Link to={`/update/${item._id}`}>
                <button className="btn text-white bg-[#d1a054]"
                    >
                      Update
                    </button>
                </Link>
                  
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn text-red-500 text-xl"
                  >
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
