class Timer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            formattedTime: "",
            timerStatus: '',
        }
    }

    componentDidMount() {
        // this.startTimer();
        this.formatSeconds(this.state.time);
    }

    componentWillUnmount() {
        this.stopTimer();
        this.setState({
            timerStatus: 'stop',
        })
    }

    componentDidUpdate(prevState) {
        if(this.props.time !== prevState.time) {
            this.setState({
                time: this.props.time,
            });
            this.resetTimer();
        }
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
                formattedTime: this.formatSeconds(this.state.time),
            }));
        } else {
            this.stopTimer();
            this.props.switchTimer();
            this.startTimer();
        }
    };

    startTimer = () => {
        this.interval = setInterval(this.runTimer,1000);
        this.setState({
            timerStatus: 'start',
        })
    };

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({
            timerStatus: 'stop',
        })
    };

    resetTimer = () => {
        this.setState({
            time:this.props.time,
        });
        clearInterval(this.interval);
        this.setState({
            timerStatus: 'reset',
        })
    };



    render() {

        let biggerText = {
            fontSize: '50px',
        };

        return (
            <React.Fragment>
                <div style={biggerText} className="time">{this.formatSeconds(this.state.time)}</div>
                <Button text="Start" className="btnStart" clickHandler={this.startTimer} timerStatus={this.state.timerStatus} />
                <Button text="Stop" className="btnStop" clickHandler={this.stopTimer} timerStatus={this.state.timerStatus}/>
                <Button text="Reset" className="btnReset" clickHandler={this.resetTimer} timerStatus={this.state.timerStatus}/>
            </React.Fragment>

        );
    }
};