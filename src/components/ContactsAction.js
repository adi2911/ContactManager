import {GET_CONTACTS,GET_CONTACT,DELETE_CONTACTS,ADD_CONTACTS,EDIT_CONTACTS} from './types';
import axios from 'axios';

export const getContacts =()=> async dispatch=>{
   
    const res= await axios.get('https://jsonplaceholder.typicode.com/users');
     dispatch( {
         type: GET_CONTACTS,
         payload:res.data
 });}

 export const getContact =(id)=> async dispatch=>{
   
    const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
     dispatch( {
         type: GET_CONTACT,
         payload:res.data
 });
 };
export const deleteContacts =(id) =>async dispatch=>{
   try{
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch( {
        type: DELETE_CONTACTS,
        payload:id
});
}
catch(e){
    dispatch( {
        type: DELETE_CONTACTS,
        payload:id
});
}
};
export const addContacts =(contact) =>async dispatch=>{
    const res= await axios.post('https://jsonplaceholder.typicode.com/users',contact);

    dispatch( {
        type: ADD_CONTACTS,
        payload: res.data
});
};
export const editContacts =(contact) =>
async dispatch=>{
    const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);

    dispatch( {
        type: EDIT_CONTACTS,
        payload: res.data
});
};