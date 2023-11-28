import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from "../components/productsCard";
import UncontrolledExample from '../components/CarouseSlide';
import { useDispatch, useSelector } from "react-redux";
import { saveProducts,saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function Home() {

    const dispatcher = useDispatch();
    const { productsData = {} } = useSelector((state) => state);
    const { products = [], cartProducts=[] } = productsData;
    console.log("SELECTOR", cartProducts);

    useEffect(() => {
        fetch("./mocks/products.json")
            .then(response => response.json())
            .then(result => {
                if (result.products) {
                    dispatcher(saveProducts(result.products));
                }
            })
            .catch(err => console.log("error ::", err))
    },[dispatcher])

    const handleCart = (event, data) => {
        if(cartProducts.length===0){
            let cartCopy = [...cartProducts];
            cartCopy.push({ ...data, quantity: 1 });
            dispatcher(saveCartProducts(cartCopy));
        }
        else if(cartProducts.length>0){
            let matchedData = cartProducts.find(item => item.id === data.id);
            if(matchedData){
                alert("This Product Already Added");
            }
            else{
                let cartCopy = [...cartProducts];
            cartCopy.push({ ...data, quantity: 1 });
            dispatcher(saveCartProducts(cartCopy));
            }
        }

    }

    return (
        <div>
            <div className='carouselSlide mb-5'>
                <UncontrolledExample />
            </div>
            <Container className="text-center">
                <Row>
                    {
                        products.map(item => <ProductCard key={item.id} data={item} handleCart={handleCart} />)
                    }

                </Row>
            </Container>
        </div>
    )
} 




// const handleCart = (event, data) => {
//     console.log(event)
//     if (event.target.innerText === "Add to Cart") {
//         let cartCopy = [...cartProducts];
//         cartCopy.push({ ...data, quantity: 1 });
//         dispatcher(saveCartProducts(cartCopy));
//         event.target.innerText = "Remove from Cart";
//     }
//     else {
//         dispatcher(saveCartProducts(cartProducts.filter(item => item.id !== data.id)));
//         event.target.innerText = "Add to Cart";
//     }