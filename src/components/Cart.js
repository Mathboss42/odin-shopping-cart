function Cart(props) {
    return (
        <div className='cart'>
            <div className="cart-header">
                <h3>My Awesome Cart</h3>
                <button onClick={props.onClickCloseCart}>Close Cart</button>
            </div>
            <div className="cart-contents">
                {props.children}
            </div>
            <div className="checkout">
                {props.cartContents.length > 0
                    ? <button>Checkout</button>
                    : null
                }
            </div>
        </div>
    );
}

export default Cart;