import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: paymentData = []} = useQuery({
        queryKey: ['payment history', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/payments/${user?.email}`);
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle
            subHeading={'At a Glance!'}
            heading={'Payment History'}
            ></SectionTitle>


<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#d1a054] text-white">
            <tr>
              <th>
                SL No.
              </th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData?.map((data, index) => (
              <tr key={data._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                   
                    <div>
                      <div className="font-bold">{data.email}</div>
                    </div>
                  </div>
                </td>
                <td>{data.date}</td>
                <td>$ {data.price}</td>
                <td>
                  {data.transactionId}
                </td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default PaymentHistory;