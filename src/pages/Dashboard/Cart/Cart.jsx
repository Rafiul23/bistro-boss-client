import useCart from './../../../hooks/useCart';


const Cart = () => {

    const {cart} = useCart();
    const totalPrice = cart?.reduce((sum, item)=> sum + item.price, 0);

    return (
        <div>
            <h2 className='text-4xl text-center my-2 font-bold'>My Cart</h2>
            <div className='my-4 flex justify-between p-4 bg-base-200'>
            <h2 className='text-4xl text-center font-medium'>Total Items: {cart?.length}</h2>
            <h2 className='text-4xl text-center font-medium'>Total Price: ${totalPrice} </h2>
            <button className='btn bg-[#d1a054] text-white'>Pay</button>
            </div>
        </div>
    );
};

export default Cart;