class Pomodoro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            work: true,
            time: 7,
            pomodoroCount: 0,
            workFinished: 0,
            restFinished: 0,
        }
    }
    workOn = () => {
        this.setState({
            work: true,
            time: 7,

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

        return (
            <div style={styles}>
                <h1>Pomodoro Timer</h1>
                <div>
                    <Button style={workStyles} text='Work' className='btnWork' clickHandler={this.workOn} color='black' workActive={this.state.work}/>
                    <Button style={restStyles} text='Rest' className='btnRest' clickHandler={this.workOff} color='black' workActive={!this.state.work}/>
                </div>

                <div>
                    {this.state.work ? (
                        <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                    ) : (
                        <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                    )}
                </div>


                <p>Total Pomodoros</p>
                {this.state.pomodoroCount}

            </div>
        );
    }


}