import { useAtom } from 'jotai';
import React from 'react';
import { cartAtom, productAtom } from '../Atoms';

const Cart = () => {
    const [cart] = useAtom(cartAtom);
    const [products] = useAtom(productAtom);

    const getCartProducts = () => {
        // Filter products to find those that are in the cart
        return products.filter(p => cart.includes(p.id));
    };

    const cartProducts = getCartProducts();
    console.log(cartProducts);
    return (
        <div>
            <h1>Your Cart</h1>
            {cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                    <div key={product.id} style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
                        <img style={{ height: "80px" }} src={product.image} alt="" />
                        <strong>{product.title}</strong> <br />
                        {product.description} <br />
                    </div>
                ))
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
