import * as images from '../img/img-imports'; 

function Item(props) {
    return (
        <div className='item' id={props.name}>
            <img src={images[props.name.replace(' ', '').toLowerCase()]} alt='mantis' />
            <button><div>+</div></button>
        </div>
    );
}

export default Item;