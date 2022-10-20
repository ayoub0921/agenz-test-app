import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Filtre from './components/Filtre';
// import Map from './components/Map';
// import Cards from './components/Cards';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header/>
        <Filtre/>
      </div>
      <Home/>
    </div>
  );
}

export default App;
