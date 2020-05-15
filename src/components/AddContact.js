//import {v1 as uuid} from 'uuid';
import React,{Component} from 'react';
import TextInputGroup from './TextInputGroup';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addContacts} from './ContactsAction';

class AddContact extends Component{
    state={name:'',email:'',phone:'',errors:{}};
    onChange=e=>{
        this.setState({
        [e.target.name]:[e.target.value]
    });
}
    onSubmit=(e)=>{e.preventDefault();
            if(this.state.name===''){this.setState({errors:{name:'Name is requires'}});return;}
            if(this.state.email===''){this.setState({errors:{email:'Email is requires'}});return;}
            if(this.state.phone===''){this.setState({errors:{phone:'phone is requires'}});return;}
            const{name,email,phone}=this.state;
            const ncontact={
                    //id:uuid(),
                    name,
                    email,
                    phone
                };
                this.props.addContacts(ncontact);
            this.setState({name:'',email:'',phone:'',errors:{}});
              this.props.history.push('/');
        }
        render(){
                        return(<div className="card mb-3">
                <div className="card-header">Add Contact    </div> 
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
<TextInputGroup label="Name" error={this.state.errors.name} type="text" name="name" value={this.state.name} onChange={this.onChange}
  placeholder="Enter Name:"/>
                        <TextInputGroup label="Email" error={this.state.errors.email} type="email" name="email" value={this.state.email}
                        onChange={this.onChange}  placeholder="Enter Email:"/>
                        <TextInputGroup label="phone" error={this.state.errors.phone} name="phone" value={this.state.phone} 
                        onChange={this.onChange}  placeholder="Enter phone:"/>
                        <input type="submit" value="Add Contact" className="btn btn-secondary btn-block"/>
                    </form>
                </div>  </div>
                        ); }}
    AddContact.propTypes={
                    addContacts:PropTypes.func.isRequired
                }
export default connect(null,{addContacts})(AddContact);