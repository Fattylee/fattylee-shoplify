//const App = () => (<h1>Nice one</h1>);

class App extends React.Component {
  state = {
    shops: [1,3,5],
  }
  
  async componentDidMount() {
    const {data} = await axios.get('/shops');
    //console.log(data);
    this.setState(prevState => ({
      shops: data
    }))
  }
  render() {
    
    return (
    <React.Fragment>
     
      <div className='shops'>
        <h2>Shop lists</h2>
        <ul>
          {this.state.shops.map((s, i) => (
          <li key={s.id}>{s.name} 
          <ol>
          {s.products && s.products.length < 1  ? <p>No products</p> :  Array.isArray( s.products) && <div> {s.products.map(p => (
          <div>
            <p>Name: {p.name}</p>
            <p>Price: {p.price}</p>
          </div>
          ))}</div> /*s.products.map( p => (<div>Sub List</div>))  */}
          </ol>
          </li>)
          )}
        </ul>
      </div>
    </React.Fragment>
    );
  }
}
   
   ReactDOM.render(<App />, document.querySelector('#root'));