import Item from "./Item";

function Cart(props) {
    return (
        <div className='cart'>
            <div className="cart-header">
                <h3>My Awesome Cart</h3>
                <button onClick={props.onClickCloseCart}>Close Cart</button>
            </div>
            <div className="cart-contents">
                {props.contents.map((el, index) => {
                    return <Item name={el} key={index}/>
                })}
            </div>
            <div className="checkout">
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;