import Nav from './Nav';
import Terminal from './Terminal';
import Item from './Item';
import Cart from './Cart';
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
        setCartContents([...cartContents, name]);
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
                        ? <Cart contents={cartContents} onClickCloseCart={handleCloseCart}/>
                        : <button id='show-cart-button' onClick={handleShowCart}>Show Cart</button>
                    }
                </div>
            </Terminal>
        </div>
    );
}

export default Store;