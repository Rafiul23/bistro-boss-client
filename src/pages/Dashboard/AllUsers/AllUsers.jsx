import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashCan } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = _id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${_id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success"
                      });
                }
            })
          
        }
      });
  }

  const handleMakeAdmin = _id =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make him admin!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${_id}`)
            .then(res =>{
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Success!",
                        text: "User has become an admin.",
                        icon: "success"
                      });
                }
            })
          
        }
      });
  }

  return (
    <div>
      <div className="flex justify-between my-4 p-8">
        <h2 className="text-3xl font-semibold">All Users</h2>
        <h2 className="text-3xl font-semibold">Total Users: {users?.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users?.map((user, i)=>  <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin' ? 'admin' : <button onClick={()=> handleMakeAdmin(user._id)} className="btn text-xl bg-green-500 text-white"><FaUser></FaUser></button> }</td>
                <td>
                    <button onClick={()=> handleDeleteUser(user._id)} className="btn text-red-500 text-xl"><FaTrashCan></FaTrashCan></button>
                </td>
              </tr> )
            }
            
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
