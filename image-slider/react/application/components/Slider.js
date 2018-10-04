class Slider extends React.Component {
    render() {
        return(
            <div className = "slider" >
                <Arrow direction="backward"/>
                <Slides/>
                <Arrow direction="forward"/>
            </div>
        );
    }
}