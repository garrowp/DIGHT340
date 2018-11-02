const Button = ({text, clickHandler, workActive}) => {
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
    }

    if(text === 'Stop') {
        styles.backgroundColor = 'red';
    }

    if(text === 'Reset') {
        styles.backgroundColor = 'blue';
    }

    return (
        <div style={styles} onClick={clickHandler}>{text}</div>
    )
};