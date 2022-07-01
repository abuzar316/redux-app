/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/productSlice';



const HomeCom = () => {
    // const [product, setProduct] = useState([]);
    const disPatch = useDispatch();

    const { data: product, status } = useSelector((state) => state.product);

    // console.log(product);

    // const api = async () => {
    //     const data = await fetch('https://fakestoreapi.com/products');
    //     const results = await data.json();
    //     // console.log(results);
    //     setProduct(results)
    // }

    useEffect(() => {
        disPatch(fetchProducts());
        // api()
    }, [])


    const handleAdd = (payload) => {
        // console.log(payload)
        disPatch(add(payload));
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>
    }

    return (
        <>
            <div className='py-4'>
                <div className="container">
                    <div className="row">
                        {product.map((e, i) => {
                            return (
                                <div key={i} className="col-md-4 py-3">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" style={{ width: '100%', height: '200px', objectFit: "cover" }} src={e.image} />
                                        <Card.Body>
                                            <Card.Title className='truncate'>{e.title}</Card.Title>
                                            <Card.Text className='line-clamp'>{e.description}</Card.Text>
                                            <Button onClick={() => handleAdd(e)} variant="primary">Add To Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </div>)
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeCom