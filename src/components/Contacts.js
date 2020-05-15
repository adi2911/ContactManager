import React,{Component} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {deleteContacts} from './ContactsAction';
class Contacts extends Component{
    state={
         showinfo:false
     };
 onDelete =  (id)=>{
    this.props.deleteContacts(id);
};
    render(){
const {showinfo}=this.state;   
const {id,name,email,phone}=this.props;
return(<div className="card card-body mb-3">
        <h4>{name}<i onClick={()=>this.setState({showinfo:!this.state.showinfo})}  style={{cursor:'pointer'}}className="fas fa-sort-down"/>
            <i className="fas fa-times" onClick={this.onDelete.bind(this,(id))} style={{cursor:'pointer',float:'right',color:'red'}}/>
           <Link to={`/contact/edit/${id}`}> <i className="fas fa-pencil-alt"  style={{cursor:'pointer',float:'right',color:'black',marginRight:'1rem'}}/>
        </Link></h4>  
        {showinfo ?(<ul className="list-group">
            <li className="list-group-item">Email:{email}</li>
            <li className="list-group-item">phone:{phone}</li>
        </ul> ):null}
       </div>
); }}
Contacts.defaultProps={
    name:"default_name",email:"default_email",phoneno:"132214267"};
Contacts.propTypes={
    deleteContacts:PropTypes.func.isRequired
}
export default connect(null,{deleteContacts})(Contacts);