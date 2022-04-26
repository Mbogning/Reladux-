import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from '../actions'
import contacts from '../../data'

const initialState =  {
    contacts: contacts
}

function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_CONTACT: 
            const { first, last } = payload.contact
            const newContact = {
                ...payload.contact,
                id: state.contacts.length + 1,
                name: `${first} ${last}`,
            }
            return {contacts : [newContact, ...state.contacts]}
        
        case EDIT_CONTACT:
            const edit = (contact) => contact.id === payload.contact.id ? payload.contact.id : contact
            return { contacts : state.contacts.map(edit) }
        
        case REMOVE_CONTACT: 
            const remove = (contact) => contact.id !== payload.id
            return { contacts: state.contacts.filter(remove) }
        default: return state
    }   

}
export default reducer