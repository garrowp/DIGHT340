const Slide = ({ image }) => {
    const styles = {
        display: 'inline-block',
        height: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        backGroundRepeat: 'no-repeat',
        backGroundPosition: 'center center',
        backgroundImage: `url("images/${image}.jpg")`,
        fontSize: '0',
    };

    return <div className='slide' style={styles}/>;
};

Slide.propTypes = {
  image: PropTypes.string,
};