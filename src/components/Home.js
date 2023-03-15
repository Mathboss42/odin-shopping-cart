import '../css/Home.css';
import Nav from './Nav';
import Terminal from './Terminal';

function Home() {
    return (
    <div className="Home content-container">
        <Nav selected={"Home"} />
        <Terminal>

        </Terminal>
    </div>
    );
}

export default Home;
