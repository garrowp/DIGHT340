const Pips = ({images, currentIndex, translatePips}) => {

    const styles = {
        width: '50%',
        bottom: '-30px',
        left: '25vw',
        textAlign: 'center',
        position: 'absolute',
        zIndex: '25',
        color:'white',
        backgroundColor: 'rgba(0,0,0,.55)',
        borderRadius: '8px',
    };

    return(
        <div className='pips' style={styles}>
            {images.map((image, i) => {
                return(
                    <Pip key={i} index={i} currentIndex={currentIndex} translatePips={translatePips}/>
                )
            })}
        </div>
    );

};