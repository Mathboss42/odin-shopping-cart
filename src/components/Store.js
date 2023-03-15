import Nav from './Nav';
import Terminal from './Terminal';
import Item from './Item';
import Cart from './Cart';
import { useState } from 'react';

function Store() {
    const [cartContents, setCartContents] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const handleCloseCart = () => {
        setShowCart(false);
    }

    const handleShowCart = () => {
        setShowCart(true);
    }

    return (
        <div className='store content-container'>
            <Nav selected='Store' />
            <Terminal>
                <div className="items-container">
                    <div className="item-category operating-system">
                    <h3>Operating Systems</h3>
                        <Item name='Sandevistan'/>
                        <Item name='Cyberdeck'/>
                    </div>
                    <div className='item-category weapons'>
                        <h3>Weapons</h3>
                        <Item name='Mantis Blades'/>
                        <Item name='Monowire'/>
                    </div>
                </div>
                {showCart 
                    ? <Cart contents={cartContents} onClickCloseCart={handleCloseCart}/>
                    : <button onClick={handleShowCart}>Show Cart</button>
                }
            </Terminal>
        </div>
    );
}

export default Store;