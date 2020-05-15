import {GET_CONTACTS,GET_CONTACT,ADD_CONTACTS,EDIT_CONTACTS,DELETE_CONTACTS} from '../components/types';
const initialState={
    contacts:[],
contact:{}};
export default function(state=initialState,action){
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state,
                contacts:action.payload
            };
            case GET_CONTACT:
                return {
                    ...state,
                    contact:action.payload
                };
                case DELETE_CONTACTS:
                return {
                    ...state,
                    contacts:state.contacts.filter(contact=>contact.id!==action.payload)
                };
                case ADD_CONTACTS:
                    return {
                        ...state,
                        contacts:[action.payload,...state.contacts]
                    };
                 case EDIT_CONTACTS:
                        return {
                            ...state,
                            contacts:state.contacts.map(
                                contact=> contact.id===action.payload.id
                                ?(contact=action.payload):contact)
                        };
                            
        default:
            return state;
    }
}