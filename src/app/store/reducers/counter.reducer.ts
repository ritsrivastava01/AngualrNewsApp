
/* import { ActionTypes, ActionsUnion } from '../actions/counter.action';

export interface State {
    home: number;
    away: number;
}

export const initialState: State = {
    home: 0,
    away: 0,
};

export function counterReducer(state = initialState, action: ActionsUnion): State {
    switch (action.type) {
        case ActionTypes.Increment: {
            return {
                ...state,
                home: state.home + 1,
            };
        }
        case ActionTypes.Decrement: {
            return {
                ...state,
                away: state.away + 1,
            };
        }
        case ActionTypes.Reset:
            return action.payload;

        case ActionTypes.Default:
            return initialState;
    }
}
 */
/* export function counterReducer(state = initialState, action: Action) {

    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;
        case ActionTypes.Decrement:
            return state - 1;
        case ActionTypes.Reset:
            return 0;
        case ActionTypes.Default:
            return initialState;
        default:
            return state;


    }
} */