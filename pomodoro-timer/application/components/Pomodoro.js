class Pomodoro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            work: true,
            time: 10,
            pomodoroCount: 0,
            workFinished: 0,
            restFinished: 0,
        }
    }
    workOn = () => {
        this.setState({
            work: true,
            time: 10,

        })
    };

    workOff = () => {
        this.setState({
            work: false,
            time: 5,
        });
    };

    switchTimer = () => {
          if(this.state.work){
              this.workOff();
              this.setState({
                  workFinished: 1,
              });
          } else {
              this.workOn();
              this.setState({
                  restFinished: 1,
              });
          }

          if(this.state.workFinished===1 && this.state.restFinished===1) {
              this.setState((prevState) => ({
                  pomodoroCount: prevState.pomodoroCount + 1,
                  workFinished: 0,
                  restFinished: 0,
              }));

              let audio = new Audio('http://dight340.tardis-shoes.com/shorts/pomodoro-timer/application/assets/applause.mp3');
              audio.play();
          }
    };

    render() {

        const styles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'top',
            textAlign: 'center',
            height: '100vh',
            fontFamily: 'Proza Libre',
        };

        let workStyles = {
            backgroundColor: 'green',
        };

        let restStyles = {
            backgroundColor: 'none',
        };

        let biggerText = {
            fontSize: '50px',
            margin: '0',
        };

        return (
            <div style={styles}>
                <h1 style={biggerText}>Pomodoro Timer</h1>

                <br/>

                <div>
                    <Button text='Work' className='btnWork' clickHandler={this.workOn} color='black' workActive={this.state.work}/>
                    <Button text='Rest' className='btnRest' clickHandler={this.workOff} color='black' workActive={!this.state.work}/>
                </div>

                <br/>

                <div>
                    {this.state.work ? (
                        <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                    ) : (
                        <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                    )}
                </div>

                <br/>

                <p>Total Pomodoros</p>
                <h1 style={biggerText}>{this.state.pomodoroCount}</h1>

            </div>
        );
    }


}