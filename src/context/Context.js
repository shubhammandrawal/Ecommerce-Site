import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function AppContext({ children }) {

    const [product, SetProduct] = useState()
    const [cartItem, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartSubTotal, setCartSubTotal] = useState(0)

    useEffect(() => {

        let count = 0;
        cartItem.map(item => count += item.attributes.quantity)
        setCartCount(count)

        let subTotal = 0;
        cartItem.map(item => subTotal += item.attributes.price * item.attributes.quantity)
        setCartSubTotal(subTotal)
    }, [cartItem])

    const handleAddtoCart = (product, quantity) => {
        let items = [...cartItem]
        let index = items.findIndex(p => p.id === product.id)
        if(index !== -1){
            items[index].attributes.quantity += quantity
        }

        else{
            product.attributes.quantity = quantity
            items = [...items, product]
        }

        setCartItems(items)
    }
    const handleRemoveFromCart = (product) => {
        let items = [...cartItem]
        items = items.filter(p => p.id !== product.id)
     }
    const handleCartProducQuantity = (type, product) => { 
        // debugger
        let items = [...cartItem]
        let index = items.findIndex(p => p.id === product.id)
        if(type === "inc"){
           items[index].attributes.quantity += 1;
        } else if(type === "dec"){
            if(items[index].attributes.quantity === 1) return
           items[index].attributes.quantity -= 1;
        }

        setCartItems(items)
    }

    return <Context.Provider value={{
        product,
        SetProduct,
        cartItem,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddtoCart,
        handleCartProducQuantity,
        handleRemoveFromCart
    }}>
        {children}
    </Context.Provider>
}
