import { MdClose } from "react-icons/md";
import './CartItem.css';
import { useContext } from "react";
import { Context } from '../../../context/Context';

export default function CartItem() {

    const { cartItem, handleCartProducQuantity, handleRemoveFromCart } = useContext(Context)


    return <div className="cart-products">
        {cartItem.map(item => (
            <div className="cart-product">
                <div key={item.id} className="img-container">
                    <img src="" alt="" />
                </div>
                <div className="product-details">
                    <span className="name">{item.attributes.title}</span>
                    <MdClose className="cls-btn" />
                    <div className="quantity-buttons">
                        <span onClick={()=>{
                            handleCartProducQuantity("dec", item)
                        }}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span onClick={()=>{
                            handleCartProducQuantity("inc", item)
                        }}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span className="highlight">$ {item.attributes.price * item.attributes.quantity}</span>
                    </div>
                </div>
            </div>
        )
        )}

    </div>
}