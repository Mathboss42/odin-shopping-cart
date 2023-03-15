import * as images from '../img/img-imports'; 

function CartItem(props) {
    return (
        <div className='item cart-item' id={props.name}>
            <img src={images[props.name.replace(' ', '').toLowerCase()]} alt={props.name} className='cart-item-image'/>
            <div className='item-right'>
                <div className="item-description">
                    <h4>{props.name}</h4>
                </div>
                <div className="item-controls">
                    <p>{props.quantity}</p>
                    <button onClick={() => props.onClickRemoveItem(props.name)}><div>-</div></button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;