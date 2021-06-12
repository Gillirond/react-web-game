import React, {useState} from "react";

import {LOCAL_STORAGE_KEYS} from "../../utils/storage";

import Starting from "./Starting";
import Names from "./Names";
import Playing from "./Playing";
import {useConstructor} from "../../utils/hooks";

const STAGES = {
    STARTING: 'STARTING',
    NAMES: 'NAMES',
    PLAYING: 'PLAYING'
}

export default function Game() {
    let player1NameTemp = 'player1';
    let player2NameTemp = 'player2';

    useConstructor(() => {
        player1NameTemp = localStorage.getItem(LOCAL_STORAGE_KEYS.player1Name) || 'player1';
        player2NameTemp = localStorage.getItem(LOCAL_STORAGE_KEYS.player2Name) || 'player2';
    })

    const [stage, setStage] = useState(STAGES.STARTING);
    const [player1Name, setPlayer1Name] = useState(player1NameTemp);
    const [player2Name, setPlayer2Name] = useState(player2NameTemp);

    const toNamesStage = () => {
        setStage(STAGES.NAMES);
    }

    const onPlayer1NameSet = name => {
        setPlayer1Name(name)
    }

    const onPlayer2NameSet = name => {
        setPlayer2Name(name);
        setStage(STAGES.PLAYING);
    }

    const quitPlaying = () => {
        setStage(STAGES.STARTING);
    }

    return (
        <div className="game-wrapper">
            {stage === STAGES.STARTING && (
                <Starting toNamesStage={toNamesStage}/>
            )}

            {stage === STAGES.NAMES && (
                <Names
                    player1Name={player1Name}
                    onPlayer1NameSet={onPlayer1NameSet}
                    player2Name={player2Name}
                    onPlayer2NameSet={onPlayer2NameSet}
                    quitPlaying={quitPlaying}/>
            )}

            {stage === STAGES.PLAYING && (
                <Playing player1Name={player1Name} player2Name={player2Name} quitPlaying={quitPlaying}/>
            )}
        </div>
    )
}