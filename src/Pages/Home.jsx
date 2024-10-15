import { cartAtom, productAtom } from '../Atoms';
import { useAtom } from 'jotai';

const Home = () => {
    const [products] = useAtom(productAtom);
    const [cart, setCart] = useAtom(cartAtom);

    const addToCart = (id) => {
        const checkCart = cart.find(c => c === id)
        if (checkCart) {
            return "Item Already Exist on The Cart"
        }
        setCart((currentCart) => [...currentCart, id]);
        console.log(cart);
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {products.map((p, i) => (
                <div key={i} style={{ border: '1px solid black', padding: '10px' }}>
                    <img style={{ height: "80px" }} src={p.image} alt="" />
                    <strong>{p.title}</strong> <br />
                    {p.description} <br />
                    <button onClick={() => addToCart(p.id)}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Home;
