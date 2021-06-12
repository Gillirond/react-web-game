import React, {useMemo, useState} from "react";

import {LOCAL_STORAGE_KEYS} from "../../../utils/storage";

import NameForm from "./name-form";

export default function Names(props) {
    const {player1Name, player2Name, onPlayer1NameSet, onPlayer2NameSet, quitPlaying} = props

    const [isPlayer1NameSet, setIsPlayer1NameSet] = useState(false);
    const [, setIsPlayer2NameSet] = useState(false);

    const onNameSet = nameValue => {
        if (!isPlayer1NameSet) {
            window.localStorage.setItem(LOCAL_STORAGE_KEYS.player1Name, nameValue);

            onPlayer1NameSet(nameValue)

            setIsPlayer1NameSet(true)
        } else {
            window.localStorage.setItem(LOCAL_STORAGE_KEYS.player2Name, nameValue);

            onPlayer2NameSet(nameValue)

            setIsPlayer2NameSet(true)
        }
    }

    const nameValue = useMemo(() => isPlayer1NameSet ? player2Name : player1Name, [isPlayer1NameSet]);
    const playerLabel = useMemo(() => isPlayer1NameSet ? 'player2' : 'player1', [isPlayer1NameSet]);
    const submitLabel = useMemo(() => isPlayer1NameSet ? 'PLAY' : 'DONE', [isPlayer1NameSet]);

    return (
        <NameForm
            nameValue={nameValue}
            playerLabel={playerLabel}
            onNameSet={onNameSet}
            submitLabel={submitLabel}
            quitPlaying={quitPlaying}/>
    )
}