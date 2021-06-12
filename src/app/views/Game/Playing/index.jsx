import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, ButtonToolbar} from "react-bootstrap";

import {loadQuestionsDare, loadQuestionsTruth} from "../../../actions";
import {getQuestions} from "../../../reducers/questions";

import Truth from "../Truth";
import Dare from "../Dare";

import './index.scss';


const PLAYER_LABEL = {
    PLAYER1: 'PLAYER1',
    PLAYER2: 'PLAYER2'
}

const GAME_TYPES = {
    TRUTH: 'TRUTH',
    DARE: 'DARE'
}

const colors = ["#b6ff94", "#f58771", "#87eefa", "#ffff78", "#e495f0"]

const mapStateToProps = state => {
    return {
        questions: getQuestions(state)
    }
}

const mapActionsToProps = {
    loadQuestionsDare,
    loadQuestionsTruth
}

const getRandomColor = exceptColor => {
    for (; ;) {
        const color = colors[Math.floor(Math.random() * colors.length)]

        if (!exceptColor || color !== exceptColor) {
            return color
        }
    }
}

class Playing extends Component {
    constructor() {
        super();

        const player1BGColor = getRandomColor();
        const player2BGColor = getRandomColor(player1BGColor)

        this.state = {
            currentPlayer: PLAYER_LABEL.PLAYER1,
            typePicked: null,
            player1BGColor,
            player2BGColor
        }
    }

    componentDidMount() {
        this.props.loadQuestionsDare()
        this.props.loadQuestionsTruth();
    }

    onTruth = () => {
        this.setState({
            typePicked: GAME_TYPES.TRUTH
        })
    }

    onDare = () => {
        this.setState({
            typePicked: GAME_TYPES.DARE
        })
    }

    onDone = () => {
        const {currentPlayer} = this.state
        this.setState({
            typePicked: null,
            currentPlayer: currentPlayer === PLAYER_LABEL.PLAYER1 ? PLAYER_LABEL.PLAYER2 : PLAYER_LABEL.PLAYER1
        })
    }

    render() {
        const {player1Name, player2Name, quitPlaying} = this.props
        const {typePicked, currentPlayer, player1BGColor, player2BGColor} = this.state

        const isPlayer1Current = currentPlayer === PLAYER_LABEL.PLAYER1;
        const isPlayer2Current = currentPlayer === PLAYER_LABEL.PLAYER2;
        const playerName = isPlayer1Current ? player1Name : player2Name;
        const playerBGColor = isPlayer1Current ? player1BGColor : player2BGColor;

        return (
            <>
                {!typePicked && (<div className="selecting-question">
                    <h3 className="m-5">{playerName},<br/>What do you pick?</h3>
                    <ButtonToolbar className="justify-content-between m-3">
                        <Button size="lg" type="primary" onClick={this.onTruth}>Truth</Button>
                        <Button size="lg" type="primary" onClick={this.onDare}>Dare</Button>
                    </ButtonToolbar>
                    <ButtonToolbar className="m-3">
                        <Button
                            className="ml-auto"
                            variant="outline-secondary"
                            type="cancel"
                            onClick={quitPlaying}>

                            Quit playing
                        </Button>
                    </ButtonToolbar>
                </div>)}

                {typePicked === GAME_TYPES.TRUTH && (
                    <Truth
                        isPlayer1Current={isPlayer1Current}
                        isPlayer2Current={isPlayer2Current}
                        playerName={playerName}
                        playerBGColor={playerBGColor}
                        onDone={this.onDone}
                        quitPlaying={quitPlaying}/>
                )}

                {typePicked === GAME_TYPES.DARE && (
                    <Dare isPlayer1Current={isPlayer1Current}
                          isPlayer2Current={isPlayer2Current}
                          playerName={playerName}
                          playerBGColor={playerBGColor}
                          onDone={this.onDone}
                          quitPlaying={quitPlaying}/>
                )}
            </>
        )
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Playing)