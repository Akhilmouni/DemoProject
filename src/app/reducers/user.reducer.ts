import { Action, ActionReducer } from '@ngrx/store';
import { UserActions } from './../actions/user.actions';
import { CustomAction } from './../actions/index';
export interface IUserState {
    isLoggedIn: boolean;
    firstName: string;
    lastName: string;
}
const initial: IUserState = {
    isLoggedIn: null,
    firstName: '',
    lastName: '',
};
export function UserReducer(state: IUserState = initial, action: CustomAction): IUserState {
    switch (action.type) {
        case UserActions.SAVE_USER_DETAILS: {
            return Object.assign({}, state, { firstName: action.payload.firstName, lastName: action.payload.lastName });
        }
        default: {
            return state;
        }
    }
}
