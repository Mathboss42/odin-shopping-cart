import '../css/Home.css';
import Nav from './Nav';
import Terminal from './Terminal';

function Home() {
    return (
        <div className='home content-container'>
            <Nav selected={'Home'} />
            <Terminal>
                <div className="blocks-container">
                    <div className='text-block' id='description'>
                        <h3>DESCRIPTION</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique vero mollitia, aliquid nostrum autem fugiat,
                            enim iure deleniti veniam maxime, sequi atque tempora ut!
                            Culpa?
                        </p>
                    </div>
                    <div className='text-block' id='values'>
                        <h3>VALUES</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique vero mollitia, aliquid nostrum autem fugiat,
                            enim iure deleniti veniam maxime, sequi atque tempora ut!
                            Culpa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Libero, perferendis.
                        </p>
                    </div>
                    <div className='text-block' id='how'>
                        <h3>HOW</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique vero mollitia, aliquid nostrum autem fugiat,
                            enim iure deleniti veniam maxime, sequi atque tempora ut!
                            Culpa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Libero, perferendis.
                        </p>
                    </div>
                </div>
            </Terminal>
        </div>
    );
}

export default Home;
