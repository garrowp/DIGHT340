

class Pomodoro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            work: true,
            time: 6,
            pomodoroCount: 0,
            workFinished: 0,
            restFinished: 0,
            sayings: ['pomodoros 4 life', 'way to get that tomato', 'congratulations on that pomodoro', 'zippidee doo dah!', 'wow lo hiciste', 'tener un hermoso tomate']

        }
    }

    workOn = () => {
        this.setState({
            work: true,
            time: 6,

        })
    };

    workOff = () => {
        this.setState({
            work: false,
            time: 3,
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
              this.showToast();
          }
    };

    resetPomodoros = () => {
        this.setState({
            pomodoroCount: 0,
        });
    };

    showToast = () => {
        let toast = document.querySelector("#toast");

        toast.className = "show";

        setTimeout(() => {
            toast.className = toast.className.replace("show", "");
        }, 3000);
    };

    render() {

        const styles = {
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: '1fr',
            justifyContent: 'top',
            textAlign: 'center',
            height: '100vh',
            fontFamily: 'Proza Libre',
        };

        const biggerText = {
            fontSize: '50px',
            margin: '0',
        };


        return (
            <div style={styles}>
                <div>
                    <h1 style={biggerText}>Pomodoro Timer</h1>

                    <div>
                        <Button text='Work' className='btnWork' clickHandler={this.workOn} workActive={this.state.work}/>
                        <Button text='Rest' className='btnRest' clickHandler={this.workOff} workActive={!this.state.work}/>
                    </div>

                    <div>
                        {this.state.work ? (
                            <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                        ) : (
                            <Timer time={this.state.time} switchTimer={this.switchTimer}/>
                        )}
                    </div>

                    <div>
                        <p>Total Pomodoros</p>
                        <h1 style={biggerText}>{this.state.pomodoroCount}</h1>
                        <Button text='Clear Pomodoros' clickHandler={this.resetPomodoros} />
                    </div>
                </div>

                <div id='toast'>{this.state.sayings[Math.floor(Math.random()*Math.floor(3))]}</div>

            </div>
        );
    }


}