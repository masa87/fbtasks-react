import React, { Component } from "react";
import axios from "axios";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";
import "./App.css";

axios.defaults.baseURL =
  "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json";

// const QuoteList = ({ quotes, numb }) => (
//   <ul>
//     <p>&ldquo;{quotes[numb].quote}&bdquo;</p>
//     <p>~{quotes[numb].author}</p>
//   </ul>
// );

class App extends Component {
  state = {
    quotes: [],
    id: 0,
    numb: 0,
    prevNumb: 0,
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    );
    this.setState({ quotes: response.data });
  }

  generateQuote = (n) => {
    return this.state.quotes[n];
  };

  randomNumber = () => {
    this.setState({ prevNumb: this.state.numb });
    this.setState({
      numb: Math.floor(Math.random() * this.state.quotes.length),
    });
  };

  prevQuote = () => {
    this.setState({ numb: this.state.prevNumb });
  };

  newQuote = () => {};

  render() {
    const { quotes, numb } = this.state;
    return (
      <div className="wrapper">
        {quotes.length > 0 ? <Quote quotes={quotes} numb={numb} /> : null}
        <Button funct={this.prevQuote} txt={"Prev quote"} />
        <Button funct={this.randomNumber} txt={"Next quote"} />
      </div>
    );
  }
}
export default App;
