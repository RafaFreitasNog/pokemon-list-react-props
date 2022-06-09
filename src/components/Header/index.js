import { Fragment } from "react";
import './style.css'

function Header(props) {
    return (
        <Fragment>
            <div id="header">
                <h3 className="txt">MENU</h3>
                <h1 className="txt">PokeAPP</h1>
                <h3 className="txt">+INFO</h3>
            </div>
        </Fragment>
    )
}

export default Header