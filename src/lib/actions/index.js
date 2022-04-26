export const ADD_CONTACT = "ADD_CONTACT"
export const EDIT_CONTACT = "EDIT_CONTACT"


export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        payload: { contact }
    }
    
}

export function editContact(contact) {
    return {
        type: EDIT_CONTACT,
        payload: { contact }
    }
    
}