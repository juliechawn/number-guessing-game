import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Box from "./components/Box";
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lowerBound: 1,
      upperBound: 10,
      guess: "",
      guessLowerBound: 1,
      guessUpperBound: 10,
      number: "0",
      lastGuess: "none",
      status: "make a guess!",
      counter: 0
    };
    this.handleGuess = this.handleGuess.bind(this);
  }

  //This sets the initail state of the guessing number by calling the Math.Random function
  componentDidMount() {
    let range = this.state.upperBound - this.state.lowerBound;
    let randomNumber = Math.trunc(
      Math.random() * range + this.state.lowerBound
    );
    this.setState({ number: randomNumber });
  }

  //This function set the state of the status with an if statement comparing the guess to the random number
  handleGuess() {
    this.setState(prevState => {
      return { lastGuess: prevState.guess };
    });

    if (this.state.guess > this.state.number) {
      this.setState({ status: "Nope. Lower", counter: this.state.counter + 1 });
    } else if (this.state.guess < this.state.number) {
      this.setState({
        status: "Nope. Higher",
        counter: this.state.counter + 1
      });
    } else {
      this.setState({ status: "You got it!", counter: this.state.counter + 1 });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Play!</h1>
        <div className="guessInput-div">
          <h4 className="prompt">
            Guess the number between <span>{this.state.guessLowerBound}</span>{" "}
            and {""}
            <span>{this.state.guessUpperBound}</span>
          </h4>
          <div className="status-div">
            <Box value={this.state.counter} label={"# of guesses"} />
            <div>{this.state.status}</div>
            <Box value={this.state.lastGuess} label={"last guess"} />
          </div>
          <div className="guess-div">
            <Input
              type={"number"}
              name={"guess"}
              handleChange={event =>
                this.setState({
                  guess: event.target.value
                })
              }
              input={this.state.guess}
              label={"YOUR GUESS"}
            />
            <Button onClick={this.handleGuess} label={"make your guess"} />
          </div>
        </div>
        <div className="gameConfig-div">
          <h4 className="prompt">Config the Game</h4>
          <form>
            <div className="bound-div">
              <Input
                type={"number"}
                name={"lower"}
                handleChange={event =>
                  this.setState({
                    lowerBound: event.target.value
                  })
                }
                input={this.state.lowerBound}
                label={"lower"}
              />
              <span>TO</span>
              <Input
                type={"number"}
                name={"upper"}
                handleChange={event =>
                  this.setState({
                    upperBound: event.target.value
                  })
                }
                input={this.state.upperBound}
                label={"upper"}
              />
            </div>
            <Button
              onClick={event =>
                this.setState(
                  {
                    guessLowerBound: this.state.lowerBound,
                    guessUpperBound: this.state.upperBound,
                    guess: "",
                    lastGuess: "none",
                    status: "make a guess!",
                    counter: 0
                  },
                  event.preventDefault(),
                  this.componentDidMount()
                )
              }
              label={"change range or play again!"}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;