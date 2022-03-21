import logo from './logo.svg';
import './App.css';
import Details from './Components/Details/Details';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App">
    <Details name='Saklain' price='1200'></Details>
    <Watch></Watch>
    </div>
  );
}

export default App;
