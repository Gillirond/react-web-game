import actionTypes from "../action-types";
import store from "../store";
import {getQuestions} from "../reducers/questions";

export const loadQuestionsDare = () => dispatch => {
    const state = store.getState()
    const questions = getQuestions(state);
    const usedIds = questions.dare.usedIds;

    let paramsString = "";

    if (usedIds.length) {
        const params = new URLSearchParams({
            usedids: usedIds
        })

        paramsString = `?${params.toString()}`
        console.log('usedIds', usedIds, 'paramsString', paramsString);
    }

    return fetch(`http://localhost:3000/questions/dare/${paramsString}`)
        .then(res => res.json())
        .then(result => {
            dispatch({
                type: actionTypes.LOAD_QUESTIONS_DARE,
                result
            })

            return result
        })
}

export const loadQuestionsTruth = () => dispatch => {
    const state = store.getState()
    const questions = getQuestions(state);
    const usedIds = questions.truth.usedIds;

    let paramsString = "";

    if (usedIds.length) {
        const params = new URLSearchParams({
            usedids: usedIds
        })

        paramsString = `?${params.toString()}`
        console.log('usedIds', usedIds, 'paramsString', paramsString);
    }

    return fetch(`http://localhost:3000/questions/truth/${paramsString}`)
        .then(res => res.json())
        .then(result => {
            dispatch({
                type: actionTypes.LOAD_QUESTIONS_TRUTH,
                result
            })

            return result
        })
}

export const getQuestionDare = () => dispatch => {
    const state = store.getState()
    const questions = getQuestions(state);
    const unusedQuestions = questions.dare.list.filter(item => questions.dare.usedIds.indexOf(item.id) === -1);

    return Promise.resolve().then(() => {
        if (unusedQuestions.length <= 2) {
            return loadQuestionsDare()(dispatch)
        }
    }).then(() => {
        const randomQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];

        dispatch({
            type: actionTypes.SET_QUESTION_DARE_USED,
            questionId: randomQuestion.id
        })

        return randomQuestion
    })
}

export const getQuestionTruth = () => dispatch => {
    const state = store.getState()
    const questions = getQuestions(state);
    const unusedQuestions = questions.truth.list.filter(item => questions.truth.usedIds.indexOf(item.id) === -1);

    return Promise.resolve().then(() => {
        if (unusedQuestions.length <= 2) {
            return loadQuestionsTruth()(dispatch)
        }
    }).then(() => {
        const randomQuestion = unusedQuestions[Math.floor(Math.random() * unusedQuestions.length)];

        dispatch({
            type: actionTypes.SET_QUESTION_TRUTH_USED,
            questionId: randomQuestion.id
        })

        return randomQuestion
    })
}