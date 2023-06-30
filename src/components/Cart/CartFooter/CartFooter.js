import { useCallback, useContext } from 'react';
import './CartFooter.css';
import { Context } from '../../../context/Context';
import useRazorpay  from 'react-razorpay';

export default function CartFooter() {
    const { cartItem, cartSubTotal } = useContext(Context)
    const Razorpay = useRazorpay();

    const razorDisplay = useCallback(async(cartSubTotal)=>{
        const options = {
            key: "rzp_test_aKIbvFSKD9mZVa",
            ammount: cartSubTotal,
            currency: "INR",
            name: "E-Commerce-Store",
            description: "Gaming transaction",
            handler: (res)=>{
                console.log(res)
            },
            prefill: {
                name: "shubham",
                email: "shubhammandrawal2826@gmail.com",
                contact: "8799124435"
            },

            notes: {
                address: "work address"
            },
            theme:{
                color: "#3399cc"
            }

        }

        const rzpy1 = new Razorpay(options);
        rzpy1.open();
    }, [Razorpay])

    return <>
        {!!cartItem?.length && <div className="cart-footer">
            <div className="subtotal">
                <span className="text">Subtotal : </span>
                <span className="total">$ {cartSubTotal}</span>
            </div>
            <div className="button">
                <button onClick={()=>razorDisplay()}>checkout</button>
            </div>
        </div>}
    </>
}