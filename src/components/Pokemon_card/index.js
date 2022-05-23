import { Fragment } from "react";

function PokemonCard(props) {
    return (
        <Fragment>
            <div>
                <img src={props.img_url}></img>
            </div>
        </Fragment>
    )
}

export default PokemonCard