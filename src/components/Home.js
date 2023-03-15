import '../css/Home.css';
import Nav from './Nav';
import Terminal from './Terminal';

function Home() {
    return (
        <div className="home content-container">
            <Nav selected={"Home"} />
            <Terminal>
                <div>nothing</div>
            </Terminal>
        </div>
    );
}

export default Home;
