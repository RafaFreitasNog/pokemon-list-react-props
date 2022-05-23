import logo from './logo.svg';
import './App.css';
import PokemonCard from "./components/Pokemon_card";

function App() {
  return (
    <div className="App">
      
      <PokemonCard img_url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'/>

    </div>
  );
}

export default App;
