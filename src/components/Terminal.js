function Terminal(props) {
    return (
        <div className='terminal'>
            {props.children}
            <div className="serial">
                    16591B-77:a
            </div>
        </div>
    );
}

export default Terminal;