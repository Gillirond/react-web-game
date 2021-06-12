import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Button, ButtonToolbar} from "react-bootstrap";

import {getQuestionDare} from "../../../actions";

const mapActionsToProps = {
    getQuestionDare
}

function Dare(props) {
    const {getQuestionDare, playerName, onDone, playerBGColor, quitPlaying} = props
    const [question, setQuestion] = useState({text: 'loading...'})

    useEffect(() => {
        getQuestionDare().then(result => setQuestion(result))
    },[])

    return (
        <div className="dare-question" style={{backgroundColor: playerBGColor}}>
            <h3 className="m-5">{playerName}'s turn</h3>
            <p className="ml-5 mr-5 text-justify">{question.text}</p>
            <ButtonToolbar className="justify-content-between m-3">
                <Button size="lg" type="primary" onClick={onDone}>Done!</Button>
                <Button variant="outline-secondary" type="cancel" onClick={quitPlaying}>Quit playing</Button>
            </ButtonToolbar>
        </div>
    )
}

export default connect(null, mapActionsToProps)(Dare)