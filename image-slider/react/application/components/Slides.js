class Slides extends React.Component {
    render() {
        const styles= {
            position: "relative",
            height: "100%",
            width: "100%",
            transform: "translateX(var(--translateValue))",
            transition: "transform ease-out .45s",
        };


        return(
            <div className="wrapper-slides" style={styles}>
                <Slide image="muradin"/>
            </div>
        );
    }
}