class Slider extends React.Component {
    render() {
        return(
            <div className = "slider" >
                <ArrowBackward/>
                <Slides/>
                <ArrowForward/>
            </div>
        );
    }
}