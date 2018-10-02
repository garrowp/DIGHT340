const rootElement = document.querySelector('#application');

function Application() {
    return (
        <Slider/>
    );
}

ReactDOM.render(<Application />, rootElement);