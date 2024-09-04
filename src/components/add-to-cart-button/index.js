"use client"

import { useDispatch, useSelector } from "react-redux"
import { Button } from "../ui/button"
import { addToCart, removeFromCart } from "@/store/slices/cart-slice"

function AddToCartButton({ productItem }) {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const isInCart = cartItems.some((item) => item.id === productItem.id)

  const handleClick = () => {
    if (isInCart) {
      dispatch(removeFromCart(productItem.id))
    } else {
      dispatch(addToCart(productItem))
    }
  }

  return (
    <div className="mt-8 max-w-md">
      <Button type="button" onClick={handleClick}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </Button>
    </div>
  )
}

export default AddToCartButton
