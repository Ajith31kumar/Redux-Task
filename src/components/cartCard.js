import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { saveCartProducts } from "../Redux/Reducers/ProductsSlice";

export default function CartCard({data,handleQuantity}) {
    const dispatcher = useDispatch();
    const { productsData = {} } = useSelector((state) => state);
    const { cartProducts=[] } = productsData;

    const handleRemove = (data) => {
        dispatcher(saveCartProducts(cartProducts.filter(item => item.id !== data.id)));
    }

    return (
        <Row className='mb-5'>
            <Col md={{ span: 9, offset: 1 }} className="bg-light p-4 shadow-lg">
                <Row>
                    <Col xs={3}><Image style={{ width: "150px", height: "150px", objectFit: "fill" }} src={data.images[0]} rounded /></Col>
                    <Col xs={9}>
                        <Row className="mt-2">
                            <Col xs={8}>
                                <div style={{ fontWeight: "bolder" }}><h4>{data.title}</h4></div>
                                <div><p>{data.description}</p></div>
                            </Col>
                            <Col xs={2}>
                                <Form.Select onChange={(e) => handleQuantity(e,data)} className="p-0 text-center pe-2" aria-label="Default select example">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </Form.Select>
                            </Col>
                            <Col xs={2} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                        </Row>
                        <Row>
                            <Col xs={9}></Col>
                            <Col xs={3} className="text-danger d-flex justify-content-end"><Button onClick={() => handleRemove(data)}>REMOVE</Button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={9}>Sub Total :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                </Row>
                <Row className="mt-2">
                    <Col xs={9}>Shipping :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>FREE</Col>
                </Row>
                <Row className="mt-5">
                    <Col xs={9} className="font-weight-bold" style={{ fontWeight: "bolder" }}>Total :</Col>
                    <Col xs={3} className="d-flex justify-content-end" style={{ fontWeight: "bolder" }}>${data.addPrice}</Col>
                </Row>
                <Row><Col className="d-flex justify-content-end text-danger" style={{ fontSize: "12px" }}>Get Cash Only With RuPay Card</Col></Row>
            </Col>
        </Row>
    )
}