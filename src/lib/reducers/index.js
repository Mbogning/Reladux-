import { ADD_CONTACT } from '../actions'

const initialState =  {
    contacts: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT: return [action.payload.contact, ...state.contacts]
        default: return state
    }

}
export default reducer