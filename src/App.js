import logo from './logo.svg';
import './App.css';
import PokemonsConteiner from "./components/Pokemon_card_conteiner";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <Header/>
      <PokemonsConteiner/>

    </div>
  );
}

export default App;
