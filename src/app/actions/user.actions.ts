import { Injectable } from '@angular/core';
import { CustomAction } from 'src/app/actions';
@Injectable({
    providedIn: 'root'
}
)
export class UserActions {
    static SAVE_USER_DETAILS = 'SAVE_USER_DETAILS';
    saveUserDetails(data: { firstName: string, lastName: string }): CustomAction {
        return {
            type: UserActions.SAVE_USER_DETAILS,
            payload: data
        };
    }
}
