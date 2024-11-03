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

        </div>
    );
};

export default PaymentHistory;