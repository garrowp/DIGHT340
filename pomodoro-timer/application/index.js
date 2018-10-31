const applicationRoot = document.querySelector('#application');

const Application = () => {
    return (
        <Pomodoro />        
    );
};

ReactDOM.render (
    <Application />,
    applicationRoot,
);