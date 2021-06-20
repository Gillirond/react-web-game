import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Button, ButtonToolbar} from "react-bootstrap";

import withLogging from "../../HOC/with-logging"

import {getQuestionTruth} from "../../../actions";

const mapActionsToProps = {
    getQuestionTruth
}

function Truth(props) {
    const {playerName, onDone, playerBGColor, quitPlaying, consoleLog} = props
    const [question, setQuestion] = useState({text: 'loading...'});

    useEffect(() => {
        getQuestionTruth().then(result => {
            setQuestion(result)

            consoleLog('getQuestionTruth', result)
        })
    }, [])

    return (
        <div className="truth-question" style={{backgroundColor: playerBGColor}}>
            <h3 className="m-5">{playerName}'s turn</h3>
            <p className="ml-5 mr-5 text-justify">{question.text}</p>
            <ButtonToolbar className="justify-content-between m-3">
                <Button size="lg" type="primary" onClick={onDone}>Done!</Button>
                <Button variant="outline-secondary" type="cancel" onClick={quitPlaying}>Quit playing</Button>
            </ButtonToolbar>
        </div>
    )
}

export default withLogging(connect(null, mapActionsToProps)(Truth))