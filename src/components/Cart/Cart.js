import {MdClose} from 'react-icons/md';
import './Cart.css'
import { BiCart } from 'react-icons/bi';
import CartItem from './CartItem/CartItem';
import CartFooter from './CartFooter/CartFooter';
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function Cart({setShowCart}) {

    const {cartItem, cartSubTotal} = useContext(Context)
    
    return <>
    <div className="cartPanel">
        <div className='opaque-layer'>
            <div className='cart-content'>
                <div className="cart-header">
                    <span className="cart-heading">Shopping Cart</span>
                    <span className="cls-btn" onClick={()=>{setShowCart(false)}}>
                            <MdClose className='cls-icon' />
                         <span className='text'>Close</span>
                    </span>
                </div>
                {!cartItem?.length &&<div className='empty-cart'>
                    <BiCart size={100} />
                    <span>No Product added</span>
                    <button className='return-shop'>Return to Shopping</button>
                </div>}
                <>
                    <CartItem />
                    <CartFooter />
                </>
            </div>
        </div>
    </div>
    </>
}