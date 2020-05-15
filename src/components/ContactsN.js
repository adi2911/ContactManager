import Contacts from './Contacts';
import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from './ContactsAction';
class ContactsN extends Component{
    componentDidMount(){
        this.props.getContacts();
    }
    render(){
    const {contacts}=this.props;
        return(
            <React.Fragment>
                <h1 className="display-4 mb-2 text-danger">Contact List</h1>
            {contacts.map(contact=>
            <Contacts key={contact.id} id={contact.id} name={contact.name} email={contact.email} phone={contact.phone}/> 
                )}
                </React.Fragment>    ); 
                 }} 
 ContactsN.propTypes={
                     contacts:PropTypes.array.isRequired,
                     getContacts:PropTypes.func.isRequired
                 }
const mapStateToProps =(state)=>({
    contacts : state.contact.contacts
});
export default connect(mapStateToProps,{getContacts})(ContactsN);