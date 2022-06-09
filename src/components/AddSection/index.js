import { Fragment } from "react";
import "./style.css"

function AddPokemonSection(props) {
    return (
        <Fragment>
            <div id="addPokeConteiner">
                <input id="addInput"
                placeholder="Digite o nome ou id do Pokémon..."
                onChange={e => props.setSearchingPoke(e.target.value)}></input>
                <button
                id="addButton"
                onClick={props.handleAddPokemons}>ADICIONAR</button>
            </div>
        </Fragment>
    )
}

export default AddPokemonSection