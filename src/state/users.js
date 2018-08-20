import { database } from '../firebaseConfig'


const SET_USERS = 'users/SET_USERS'


export const usersAction = data => ({
    type: SET_USERS,
    data
})

export const initUsersSync = () => (dispatch, getState) => {
    database.ref('/jfddl5-users')
        .on(
            'value',
            snapshot => {
                const data = snapshot.val()
                dispatch(usersAction(data))
            })
}
export const stopInitUsersSync = () => (dispatch, getState) => {
    database.ref('/jfddl5-users')
        .off()
}


const initialState = {
    users: null
}



export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}


