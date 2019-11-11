//const App = () => (<h1>Nice one</h1>);

class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <h1>Next ride</h1>
      <p>Give it up so quickly</p>
    </React.Fragment>
    );
  }
}
   
   ReactDOM.render(<App />, document.querySelector('#root'));