import { createContext, useContext } from "react";
import products from "../data/products";

const CartContext = createContext() 
const initState = {
    products: products,
    total:0,
    amount:0
}

export default useCart =() => {
    return useContext(CartContext)
}