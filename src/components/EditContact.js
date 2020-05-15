//import {v1 as uuid} from 'uuid';
import React,{Component} from 'react';
import TextInputGroup from './TextInputGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContact,editContacts} from './ContactsAction';

class EditContact extends Component{
    state={name:'',email:'',phone:'',errors:{}};
     componentDidMount(){
        const{id}=this.props.match.params;
        this.props.getContact(id);
    }
    componentWillReceiveProps(nProps,nState){
        const{name,email,phone}=nProps.contact;
        this.setState({
            name,
            email,
            phone
        });
    }
    onChange=e=>this.setState({
        [e.target.name]:[e.target.value]
    });
    onSubmit= (e)=>{e.preventDefault();
            if(this.state.name===''){this.setState({errors:{name:'Name is requires'}});return;}
            if(this.state.email===''){this.setState({errors:{email:'Email is requires'}});return;}
            if(this.state.phone===''){this.setState({errors:{phone:'phone is requires'}});return;}
            const{name,email,phone}=this.state;
const {id}=this.props.match.params;
            const ucontact={
               id, name,email,phone
            }
            console.log("Edit Contact:"+name+" "+email+" "+phone);
            this.props.editContacts(ucontact);
            this.setState({name:'',email:'',phone:'',errors:{}});
            this.props.history.push('/');
        }
        render(){
                        return(
                        
                        <div className="card mb-3">
                <div className="card-header">Edit Contact    </div> 
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
<TextInputGroup label="Name" error={this.state.errors.name} type="text" name="name" value={this.state.name} 
onChange={this.onChange}
  placeholder="Enter Name:"/>
                        <TextInputGroup label="Email" error={this.state.errors.email} type="email" name="email" value={this.state.email}
                        onChange={this.onChange}  placeholder="Enter Email:"/>
                        <TextInputGroup label="phone" error={this.state.errors.phone} name="phone" value={this.state.phone} 
                        onChange={this.onChange}  placeholder="Enter phone:"/>
                        <input type="submit" value="Update Contact" className="btn btn-secondary btn-block"/>
                    </form>
                </div>  </div>
                        ); }}
    EditContact.propTypes={
        getContact:PropTypes.func.isRequired,
        contact:PropTypes.object.isRequired
    }                    
 const mapSToP = state=>({
     contact:state.contact.contact
 });
                        
export default connect(mapSToP,{getContact,editContacts})(EditContact);