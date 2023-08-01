import React from "react";
import AppContext from "../context";

export const useCart = () => {
    const { cartItems, setCartItems } = React.useContext(AppContext)
    const totalPrice = cartItems.reduce((sum, obj) => Number(obj.price) + sum, 0)
    const salePrice = (totalPrice * 5 / 100)
    const finishPrice = (totalPrice - salePrice)

    return { cartItems, setCartItems, totalPrice, salePrice, finishPrice }
}

