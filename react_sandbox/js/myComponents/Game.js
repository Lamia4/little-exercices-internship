class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext:true,
    }
  };
  handleClick(e,i) {
    //nutzt das durchgeschleifte event object um das ursprünglich geklickte Element umzustylen
    const mycolor = this.state.xIsNext ? 'green' : 'red';
    e.target.style.backgroundColor = mycolor;
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    // const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
    // squares[i] =this.state.xIsNext? "X" : "O";
    // this.setState({
    //   squares: squares,
    //   xIsNext: !this.state.xIsNext,
    // })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
    render() {
      const history = this.state.history;
      const current = history[history.length -1];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });

      let status;
      if (winner) {
        status = "winner" + winner;

      } else {
        status = "next player: " + (this.state.xIsNext? "X" : "O")
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClick={(e,i) => this.handleClick(e,i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
}