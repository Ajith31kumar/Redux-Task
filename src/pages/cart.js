import Container from 'react-bootstrap/Container';
import CartCard from '../components/cartCard';
import { useDispatch, useSelector } from "react-redux";
import { saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function Cart() {

    const dispatcher = useDispatch();
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts=[] } = productsData;

    const handleQuantity = (e,data) => {
        let quantity = e.target.value;
        let price = data.price;
            dispatcher(saveCartProducts(cartProducts.map(item => {
                if(item.id === data.id){
                    return {...item,addPrice:(quantity*price)}
                }
                return {...item}
            })))
    }

    return (
        <div>
            <Container>
                {
                    cartProducts.length > 0 ? cartProducts.map((item,i) => <CartCard key={i} data={item} handleQuantity={handleQuantity}/>) : <img className='emptyCart' src='https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg' alt='img'></img>
                }
            </Container>
        </div>
    )
} 