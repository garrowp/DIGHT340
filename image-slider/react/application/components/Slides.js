const Slides = ({translateValue, images}) => {
    const styles= {
        position: "relative",
        height: "100%",
        width: "100%",
        transform: `translateX(${translateValue}px)`,
        transition: "transform ease-out .45s",
    };

    console.log(images);

    // const slides = images.map((image, i) => <Slide key={i} image={image} />);

    return(
        <div style={styles}>
            {images.map((image, i) => {
                return <Slide key={i} image={image} />
            })}
        </div>
    );
};