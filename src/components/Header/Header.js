import { BiCart } from 'react-icons/bi';
import './Header.css';
import { useContext, useEffect, useState, useTransition } from 'react';    
import Cart from '../Cart/Cart';
import { Context } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
export default function Header() {
    const[showCart, setShowCart] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const {cartCount} = useContext(Context)
    const navigate = useNavigate()

    const handScroll = () => {
        const offSet = window.scrollY;
        if (offSet > 200) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handScroll)
    }, [])

    return <>
        <header className={`header ${scrolled ? 'sticky' : ''}`}>
            <h2 onClick={(()=>{
                navigate("/")
            })}>E-COMMERCE-STORE</h2>
            <div className='cart'>
                <BiCart onClick={()=>{
                    setShowCart(true)
                }} />
                {!!cartCount && <span className='items'>{cartCount}</span>}
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
    </>
}