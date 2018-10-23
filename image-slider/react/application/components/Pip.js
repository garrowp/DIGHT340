const Pip = ({index,currentIndex,translatePips}) => {

    const styles = {
        fontSize: '150px',
        lineHeight: '50px',
        zIndex: '20',
        cursor: 'pointer',
        display: 'inline-block',
    };

    if(index === currentIndex) {
        styles.color = '#7bfd5b';
        styles.fontSize = '175px';
    }

    return <span className='pip' style={styles} onClick={() => translatePips(index)}>&middot;</span>;

};