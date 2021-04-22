import { Action } from '@ngrx/store';
import { Resort } from '../resorts/shared/resort.model';
import { ADD_RESORT } from './resorts.action';

const initialState = {
    resorts: [],
    selectedResort: [],
}


export function resortsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_RESORT:
            return {
                ...state,
                resorts: [...state.resorts, action.newResort]
            }
    }
}