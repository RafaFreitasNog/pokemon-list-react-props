import { Fragment } from "react";
import PokemonCard from "../Pokemon_card";
import "./style.css"


function loadCards(array) {
    for (let index = 1; index <= 12; index++) {
        array.push(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${index}.png`)
    }
}

function PokemonsConteiner(props) {
    var cardsImgArray = []
    loadCards(cardsImgArray)
    return (
        <Fragment>
            <div id = "conteiner">
                {cardsImgArray.map((element)=>
                    <PokemonCard img_url= {element} />
                )}
            </div>
        </Fragment>
    )
}

export default PokemonsConteiner