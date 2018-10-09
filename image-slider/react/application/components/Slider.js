class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            images: ['dog1','dog2','dog3','artanis', 'johanna', 'muradin'],
            currentIndex: 0,
            translateValue: 0,
        };

    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth;
    };

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0){
            console.log(this.state.images.length-1);
            return this.setState({
                currentIndex: this.state.images.length-1,
                translateValue: -(this.slideWidth()*(this.state.images.length-1)),
            });
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth()),
        }));
    };

    goToNextSlide = () => {
        if(this.state.currentIndex === this.state.images.length - 1){
            return this.setState({
                currentIndex: 0,
                translateValue: 0,
            });
        }
        this.setState((prevState) => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - (this.slideWidth()),
        }));
    };

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
            <div className={'slider'} style={styles}>
                <Arrow direction="backward" clickHandler={this.goToPrevSlide}/>

                <Slides
                    translateValue={this.state.translateValue}
                    images={this.state.images}
                />

                <Arrow direction="forward" clickHandler={this.goToNextSlide}/>
            </div>
        );
    }
}