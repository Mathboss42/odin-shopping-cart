function Cart(props) {
    return (
        <div className='cart'>
            <div>My Awesome Cart</div>
            <button onClick={props.onClickCloseCart}>Close Cart</button>
        </div>
    );
}

export default Cart;