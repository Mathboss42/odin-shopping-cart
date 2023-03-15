import * as images from '../img/img-imports'; 

function Item(props) {
    return (
        <div className='item' id={props.name}>
            <img src={images[props.name.replace(' ', '').toLowerCase()]} alt={props.name} />
            <div className='item-right'>
                <div className="item-description">
                    <h4>{props.name}</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, voluptates.</p>
                </div>
                <div className="item-controls">
                    <button onClick={() => props.onClickAddItem(props.name)}><div>+</div></button>
                </div>
            </div>
        </div>
    );
}

export default Item;