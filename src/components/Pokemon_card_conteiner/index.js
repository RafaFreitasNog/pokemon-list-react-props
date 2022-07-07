import { Fragment, useState } from "react";
import PokemonCard from "../Pokemon_card";
import AddPokemonSection from "../AddSection";
import "./style.css"

function PokemonsConteiner(props) {
    const [searchingPoke, setSearchingPoke] = useState();
    const [pokeArray, setPokeArray] = useState([]);

    async function handleAddPokemons() {
        let response;
        await fetch(`https://pokeapi.co/api/v2/pokemon/${searchingPoke}`)
        .then(response => response.json())
        .then(data => {
            response = data
        })
        const newPokemon = {
            name: response.name,
            imgUrl: response.sprites.front_default,
        }
        setPokeArray(prevState => [...prevState, newPokemon])
    }
    return (
        <Fragment>
            <div id="pokeCardsConteiner">
                {pokeArray.map((element)=>
                    <PokemonCard img_url= {element.imgUrl} />
                    )}
            </div>
            
            <AddPokemonSection 
            setSearchingPoke={setSearchingPoke}
            handleAddPokemons={handleAddPokemons}
            />
        </Fragment>
    )
}

export default PokemonsConteiner