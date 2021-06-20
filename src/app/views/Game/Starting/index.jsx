import React, {useContext} from "react";
import {Button} from "react-bootstrap";

import './index.scss';
import {GameNameContext} from "../../AppView";

export default function Starting(props) {
    const gameName = useContext(GameNameContext)

    return (
        <div className="text-center align-middle">
            <h3 className="text-center">Welcome to the game <br/>
                {gameName}!</h3>
            <div className="m-5">
                <Button type="button" size="lg" onClick={props.toNamesStage}>START GAME</Button>
            </div>
        </div>
    )
}