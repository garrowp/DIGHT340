class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            formattedTime: "",
        }
    }

    componentDidMount() {
        // this.startTimer();
        this.formatSeconds(this.state.time);
    }

    componentWillUnmount() {
        this.stopTimer();
    }

    formatSeconds = (seconds) => {
          let formattedMinutes = "0" + Math.floor(seconds / 60);
          let formattedSeconds = "0" + (seconds - formattedMinutes*60);

          return formattedMinutes.substr(-2) + ":" + formattedSeconds.substr(-2);
    };

    runTimer = () => {
        if(this.state.time !== 0){
            this.setState((prevState) => ({
                time: prevState.time-1,
                formattedTime: this.formatSeconds(prevState.time-1),
            }));
        } else {
            alert("You suck idiot");
            this.stopTimer();
        }
    };

    startTimer = () => {
        this.interval = setInterval(this.runTimer,1000);
    };

    stopTimer = () => {
        clearInterval(this.interval);
    };

    resetTimer = () => {
        this.setState({
            time:this.props.time,
        });
        clearInterval(this.interval);
    };

    render() {
        return (
            <React.Fragment>
                <div className="time">{this.formatSeconds(this.state.time)}</div>

                <button className="btnStart" onClick={this.startTimer} >Start</button>
                <button className="btnStop" onClick={this.stopTimer}>Stop</button>
                <button className="btnReset" onClick={this.resetTimer}>Reset</button>
            </React.Fragment>

        );
    }
};