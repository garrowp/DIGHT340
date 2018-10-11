class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ['dog1','dog2','dog3','artanis', 'johanna', 'muradin'],
            currentIndex: 0,
            translateValue: 0,
            slideShowToggle: 0,
            timer: {},
        };
        this.init();
    }

    init() {
        this.shufflePictures();
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth;
    };

    goToPrevSlide = () => {
        if(this.state.currentIndex === 0){
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

    startSlideshow = () =>{
        this.setState({
            slideShowToggle: 1,
            timer: setInterval(this.goToNextSlide, 3000),
        });
    };

    stopSlideShow = () => {
        this.setState({
            slideShowToggle: 0,
        });
        clearInterval(this.state.timer);
    };

    shufflePictures = () => {
        let shuffledPictures = this.state.images;

        for (let i = shuffledPictures.length-1; i >=0; i--) {

            let randomIndex = Math.floor(Math.random()*(i+1));
            let itemAtIndex = shuffledPictures[randomIndex];

            shuffledPictures[randomIndex] = shuffledPictures[i];
            shuffledPictures[i] = itemAtIndex;
        }

        this.setState({
            images: shuffledPictures,
        });
    };

    handleKeyPress = (e) => {
        switch(e.keyCode) {
            case 39: // right arrow
                this.goToNextSlide();
                break;
            case 32: // space bar
                if(this.state.slideShowToggle === 0) this.startSlideshow();
                else if(this.state.slideShowToggle === 1) this.stopSlideShow();
                break;
            case 37: // left arrow
                this.goToPrevSlide();
                break;
            case 82:
                this.shufflePictures();
                break;
            default:
                break;
        }
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
            <div className={'slider'}
                 style={styles}
                 onKeyUp={this.handleKeyPress}
                 tabIndex= '0'
            >
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