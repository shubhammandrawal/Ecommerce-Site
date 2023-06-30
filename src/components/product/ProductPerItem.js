import './product.css';
import { useNavigate} from 'react-router-dom';


export default function ProductPerItem({ item, img, id }) {
    const Navigate = useNavigate();
    // debugger
    return <div className="products" onClick={()=> Navigate(`/product/${id}`)}>
        <div className="single-product">
            <img src={img} alt="" />
            <h3>{item.title}</h3>
            <span>Price: {item.price}</span>
        </div>
    </div>
}