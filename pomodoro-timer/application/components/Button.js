const Button = ({text, clickHandler, workActive, timerStatus}) => {
    const styles = {
        fontSize: '20px',
        border: `2px solid black`,
        borderRadius: '7px',
        textAlign: 'center',
        display: 'inline-block',
        padding: '7px 15px',
        margin: '5px',
        cursor: 'pointer',
        fontFamily: 'Proza Libre',
    };

    if(workActive === true) {
        styles.backgroundColor = 'black';
        styles.color = 'white';
    }

    if(text === 'Start') {
        styles.backgroundColor = 'green';
    } else if(text === 'Stop') {
        styles.backgroundColor = 'red';
    } else if(text === 'Reset') {
        styles.backgroundColor = 'blue';
    }

    if(timerStatus === 'start' && text === 'Start') {
        styles.backgroundColor = 'darkgreen';
        styles.color = 'darkseagreen';
    } else if(timerStatus === 'stop' && text === 'Stop') {
        styles.backgroundColor = 'darkred';
        styles.color = 'darkseagreen';

    } else if(timerStatus === 'reset' && text === 'Reset') {
        styles.backgroundColor = 'darkblue';
        styles.color = 'darkseagreen';

    }

    return (
        <div style={styles} onClick={clickHandler}>{text}</div>
    )
};