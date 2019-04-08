import { Action } from '@ngrx/store';
import { LOAD_SECTIONS } from '../actions/section.action';

// initial state
export const initialState: Array<string> = [
    'home', 'opinion', 'world', 'national', 'politics', 'business', 'technology',
    'science', 'health', 'sports', 'arts', 'books', 'movies', 'theater', 'fashion',
    'food', 'travel', 'magazine', 'realestate', 'automobiles'
];

export function sectionReducer(state = initialState, action: Action): Array<string> {
    switch (action.type) {
        case LOAD_SECTIONS:
            return state;
    }
}
