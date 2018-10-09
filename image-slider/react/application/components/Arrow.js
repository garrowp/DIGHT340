const Arrow = ({direction, clickHandler}) =>{

    const base_styles = {
        position: "absolute",
        top: "50vh",
        display: "block",
        borderStyle: "solid",
        borderColor: "#dad6ca",
        borderWidth: "0 10px 10px 0",
        padding: "10px",
        cursor: "pointer",
        zIndex: "20",
    };

    let position_styles = null;

    if(direction === 'forward') {
        position_styles = {
            right: "1.5%",
            transform: "rotate(-45deg)",
        };
    } else if(direction === 'backward') {
       position_styles = {
           left: "1.5%",
           transform: "rotate(135deg)",
       }
    }

    const styles = {
        ...base_styles,
        ...position_styles,
    };


    return <div style={styles} onClick={clickHandler}> </div>
};

Arrow.propTypes = {
    direction: PropTypes.string,
};