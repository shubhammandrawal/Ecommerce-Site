import { useContext, useState } from 'react';
import Fetch from '../Hooks/UseFetch';
import './singleproduct.css';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/Context';
export default function SingleProduct({ item }) {

    const [quantity, setQuantity] = useState(1)

    const increament = () => {
        setQuantity(prev => prev + 1)
    }


    const decreament = () => {
        setQuantity(prev => {
            if (prev === 1) return 1
            else {
                return prev - 1
            }
        })
    }

    const { handleAddtoCart } = useContext(Context)

    const { id } = useParams();
    const  { data } = Fetch(`http://localhost:1337/api/best-sellers/?populate=*&`)

    if (!data) return
    debugger
    const product = data.data[0].attributes
    return <div className="single-Product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    {/* <img src={`http://localhost:1337` + product.attributes.url} alt="" /> */}
                </div>
                <div className="right">
                    <h3 className="name">{product.title}</h3>
                    <span className="price">Price : $ {product.price}</span>
                    <p className="description">{product.description}</p>
                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={increament}>+</span>
                            <span>{quantity}</span>
                            <span onClick={decreament}>-</span>
                        </div>
                        <button className="add-to-cart" onClick={() => {
                            handleAddtoCart(data.data[0], quantity)
                            setQuantity(1)
                        }}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className='Details'>
                <h3>More Details</h3>
                <p>{product.details}</p>
            </div>
        </div>
    </div>
}