import Nav from './Nav';
import Terminal from './Terminal';
import Item from './Item';
import Cart from './Cart';
import CartItem from './CartItem';
import { useState } from 'react';

function Store() {
    const [cartContents, setCartContents] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const divClass = `store-container ${showCart ? 'open-cart' : null}`;

    const handleCloseCart = () => {
        setShowCart(false);
    }

    const handleShowCart = () => {
        setShowCart(true);
    }

    const handleAddItem = (name) => {
        console.log('called')
        if (cartContents.length < 1 || !cartContents.some(el => el.name === name)) {
            setCartContents([...cartContents, { name: name, quantity: 1}]);
        } else {
            setCartContents(cartContents.map(el => {
                if (el.name === name) {
                    return {
                        name: el.name,
                        quantity: el.quantity + 1
                    }
                } else {
                    return el;
                }
            }))
        }
    }

    const handleRemoveItem = (name) => {
        console.log('remove')
        if (cartContents.some(el => el.name === name && el.quantity > 1)) {
            setCartContents(cartContents.map(el => {
                if (el.name === name) {
                    return {
                        name: el.name,
                        quantity: el.quantity - 1
                    }
                } else {
                    return el;
                }
            }));
        } else {
            setCartContents(cartContents.filter(el => el.name !== name));
        }
    }

    return (
        <div className='store content-container'>
            <Nav selected='Store' />
            <Terminal>
                <div className={divClass}>
                    <div className="items-container">
                        <div className="item-category operating-system">
                        <h3>Operating Systems</h3>
                            <Item name='Sandevistan' onClickAddItem={handleAddItem}/>
                            <Item name='Cyberdeck' onClickAddItem={handleAddItem}/>
                        </div>
                        <div className='item-category weapons'>
                            <h3>Weapons</h3>
                            <Item name='Mantis Blades' onClickAddItem={handleAddItem}/>
                            <Item name='Monowire' onClickAddItem={handleAddItem}/>
                        </div>
                    </div>
                    {showCart
                        ? <Cart onClickCloseCart={handleCloseCart} cartContents={cartContents}>
                            {cartContents.map((el, index) => {
                                return <CartItem name={el.name} quantity={el.quantity} key={index} onClickRemoveItem={handleRemoveItem}/>
                            })}
                            </Cart>
                        : <button id='show-cart-button' onClick={handleShowCart}>Show Cart</button>
                    }
                </div>
            </Terminal>
        </div>
    );
}

export default Store;