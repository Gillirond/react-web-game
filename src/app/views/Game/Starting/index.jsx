import React from "react";
import {Button} from "react-bootstrap";

import './index.scss';

export default function Starting(props) {
    return (
        <div className="text-center align-middle">
            <h3 className="text-center">Welcome to the game <br/>
                Truth or Dare!</h3>
            <div className="m-5">
                <Button type="button" size="lg" onClick={props.toNamesStage}>START GAME</Button>
            </div>
        </div>
    )
}