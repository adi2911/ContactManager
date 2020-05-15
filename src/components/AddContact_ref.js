import Contacts from './Contacts';
import React,{Component} from 'react';
class AddContact extends Component{
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phonenoInput=React.createRef();
    }
    onSubmit=(e)=>{
e.preventDefault();
const contact={
    name: this.nameInput.current.value,    email: this.emailInput.current.value,    phoneno: this.phonenoInput.current.value,
}
    }
        render(){
        return(
            <div className="card mb-3">
<div className="card-header">
Add Contact    </div> 
<div className="card-body">
    <form onSubmit="this.onSubmit()">
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" ref="this.nameInput" defaultValue={this.props.name}  className="form-control form-control-lg" placeholder="Enter Name:"/>
        </div> 
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" ref="this.emailInput" defaultValue={this.props.email}  className="form-control form-control-lg" placeholder="Enter Email:"/>
        </div>
         <div className="form-group">
            <label htmlFor="phoneno">Phoneno:</label>
            <input type="text" name="phoneno" ref="this.phonenoInput" defaultValue={this.props.phoneno}  className="form-control form-control-lg" placeholder="Enter Phoneno:"/>
        </div>
        <input type="submit" value="Add Contact" className="btn btn-secondary btn-block"/>
    </form>
</div>
           </div>
        );
      }
}
AddContact.defaultProps={
    name:'Aditi',
    email:'aditi@gmail.com',
    phoneno:'12345'
}
export default AddContact;