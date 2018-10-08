class Slider extends React.Component {
    render() {

        const styles = {
            position:"relative",
            width: "100%",
            margin: "0 auto",
            height: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
        };


        return(
            <div className = "slider" style={styles}>
                <Arrow direction="backward"/>
                <Slides/>
                <Arrow direction="forward"/>
            </div>
        );
    }
}