import { Link } from 'react-router-dom';

function Nav(props) {
    const navItems = ['HOME', 'STORE']

    return (
        <div className='nav'>
            <h1>CyberShop<span className='small-number'>2023</span></h1>
            <ul>
                {navItems.map((el, index) => {
                    return (
                        <li className={props.selected.toLowerCase() === el.toLocaleLowerCase() ? 'selected' : null} key={index}>
                            <Link to={`/${el.toLowerCase()}`}>{el}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Nav;