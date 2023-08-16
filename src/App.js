import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import data from './Components/data';
const cards = data.map(items=>{
  return <Card 
  items= {items}/>
})

function App() {
  return (
    <div className="App">
      < Navbar />
      {cards}
    </div>
  );
}

export default App;
