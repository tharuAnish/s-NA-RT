import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "@/store/slices/cart-slice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // product : productReducers (other )
  },
})

export default store
