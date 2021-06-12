import actionTypes from "../action-types";

const initialState = {
    dare: {
        list: [],
        usedIds: []
    },
    truth: {
        list: [],
        usedIds: []
    }
};

function questionsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_QUESTIONS_DARE:
            return {
                ...state,
                dare: {
                    ...state.dare,
                    list: [...state.dare.list, ...action.result]
                }
            }
        case actionTypes.LOAD_QUESTIONS_TRUTH:
            return {
                ...state,
                truth: {
                    ...state.truth,
                    list: [...state.truth.list, ...action.result]
                }

            }
        case actionTypes.SET_QUESTION_DARE_USED:
            return {
                ...state,
                dare: {
                    ...state.dare,
                    usedIds: [...state.dare.usedIds, action.questionId]
                }
            }
        case actionTypes.SET_QUESTION_TRUTH_USED:
            return {
                ...state,
                truth: {
                    ...state.truth,
                    usedIds: [...state.truth.usedIds, action.questionId]
                }
            }

    }

    return state;
}

export default questionsReducer

export const getQuestions = state => state.questions;