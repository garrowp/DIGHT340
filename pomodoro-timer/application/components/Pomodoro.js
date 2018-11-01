class Pomodoro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            work: true,

        }
    }
    workOn = () => {
        this.setState({
            work: true,
        })
    };

    workOff = () => {
        this.setState({
            work: false,
        })
    };



    render() {
        return (
            <React.Fragment>
                <button className='btn-work' onClick={this.workOn}>Work</button>
                <button className='btn-rest' onClick={this.workOff}>Rest</button>

                {this.state.work ? (
                    <Timer time={1500} work={this.state.work}/>
                ) : (
                    <Timer time={300} work={this.state.work}/>
                )}
            </React.Fragment>
        );
    }


}