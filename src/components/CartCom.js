import React from 'react';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


const CartCom = () => {
    const item = useSelector((state) => state.cart);
    const disPatch = useDispatch();

    const handleRemove = (payload) => {
        disPatch(remove(payload));
    }

    return (
        <div>
            {
                item.map((e, i) => {
                    return (
                        <div key={i} className='container py-3'>
                            <div className=''>
                                <div className="col-8 shadow py-3">
                                    <div className="row">
                                        <div className="col-4">
                                            <img style={{ width: '100%', height: '100px' }} src={e.image} alt={e.title} />
                                        </div>
                                        <div className="col-8">
                                            <h3>{e.title}</h3>
                                            <p>{e.description}</p>
                                            <Button onClick={() => handleRemove(e.id)}>Remove Cart</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>

    )
}

export default CartCom