import { Fragment } from "react";
import './style.css'

function showMessage() {
    console.log("Você clicou em um Card Pokémon")
}

function PokemonCard(props) {
    return (
        <Fragment>
            <div onClick={showMessage} className='card'>
                <img src={props.img_url} className="pokemonImg"></img>
            </div>
        </Fragment>
    )
}

export default PokemonCard