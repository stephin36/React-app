import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
    const dispatch =  useDispatch();
    const handleCart = () => {
        dispatch(clearItem());
    }
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems.card);
    return(<div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={() => handleCart()}>
                Clear Cart</button>
                {cartItems.length === 0 && (<h1>Cart is empty! Add items to Cart.</h1>)}
                <ItemList items={cartItems}/>
        </div>
    </div>)
};

export default Cart;