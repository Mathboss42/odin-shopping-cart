import Nav from './Nav';
import Terminal from './Terminal';
import Item from './Item';

function Store() {
    return (
        <div className='store content-container'>
            <Nav selected='Store' />
            <Terminal>
                <div className="item-category operating-system">
                    <Item name='Sandevistan'/>
                    <Item name='Cyberdeck'/>
                </div>
                <div className='item-category weapons'>
                    <Item name='Mantis Blades'/>
                    <Item name='Monowire'/>
                </div>
            </Terminal>
        </div>
    );
}

export default Store;