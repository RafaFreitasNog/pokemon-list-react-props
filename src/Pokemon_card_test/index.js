import { Fragment } from "react";
import './style.css'

function PokemonCardTest(props) {
    return (
        <Fragment>
            <div id='cardTest'>
                <img src={props.img_url} id="pokemonImgTest"></img>
            </div>
        </Fragment>
    )
}

export default PokemonCardTest