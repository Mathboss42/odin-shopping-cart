import Nav from "./Nav";
import Terminal from "./Terminal";
import Item from "./Item";

function Store() {
    return (
        <div className="store content-container">
            <Nav selected="Store" />
            <Terminal>
                <Item></Item>
                <Item></Item>
                <Item></Item>
            </Terminal>
        </div>
    );
}

export default Store;