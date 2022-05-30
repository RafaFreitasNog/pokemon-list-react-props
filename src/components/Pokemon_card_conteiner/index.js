import { Fragment } from "react";
import PokemonCard from "../Pokemon_card";
import "./style.css"

function PokemonsConteiner(props) {
    return (
        <Fragment>
            <div id = "conteiner">
                <PokemonCard img_url= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
                <PokemonCard/>
            </div>
        </Fragment>
    )
}

export default PokemonsConteiner