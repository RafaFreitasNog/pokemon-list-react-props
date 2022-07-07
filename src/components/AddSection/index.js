import { Fragment, useState } from "react";
import PokemonCard from "../Pokemon_card";
import PokemonCardTest from "../Pokemon_card_test";
import "./style.css"


function AddPokemonSection(props) {
    const [inputPoke, setInputPoke] = useState();
    const [inputPokeArray, setInputPokeArray] = useState([]);

    async function handleInputPoke() {
        let response;
        await fetch(`https://pokeapi.co/api/v2/pokemon/${inputPoke}`)
        .then(response => response.json())
        .then(data => {
            response = data
        })
        const newPokemon = {
            backImgUrl: response.sprites.back_default,
            frontImgUrl: response.sprites.front_default,
        }
        setInputPokeArray([newPokemon])
    }

    function handleInputChange(value) {
        props.setSearchingPoke(value)
        setInputPoke(value)
    }
    
    async function handleCheckButtonClick() {
        handleInputPoke()
    }


    return (
        <Fragment>
            <div id="addPokeSection">
                <div id="addPokeConteiner">

                    <input id="addInput"
                    placeholder="Digite o nome ou id do Pokémon..."
                    onChange={e => handleInputChange(e.target.value)}></input>

                    <button
                    id="addButton"
                    onClick={props.handleAddPokemons}>ADD TO GARDEN</button>

                    <button
                    id="testButton"
                    onClick={handleCheckButtonClick}>TEST "{inputPoke}"</button>

                </div>
                <div id="pokeTestImgsConteiner">
                    {inputPokeArray.map((element) =>
                        <Fragment>
                            <PokemonCardTest img_url= {element.frontImgUrl} />
                            <PokemonCardTest img_url= {element.backImgUrl} />
                        </Fragment>
                        )}
                </div>
            </div>
        </Fragment>
    )
}

export default AddPokemonSection