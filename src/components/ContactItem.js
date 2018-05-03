import React, { Component } from 'react';


class ContactItem extends Component {

  showContact(e) {
    console.log(e)
    console.log(this , " << contactOb");
    this.setState({showDetailContact: this.props.contact})
    console.log(this.state)
    // this.props.onClick(id);
  }
  deleteContact(id){
    console.log(id);

    this.props.onDelete(id);
  }
  render() {
    return (
     <li>
         <b>{this.props.contact.name}</b> - {this.props.contact.city} - {this.props.contact.state}
         <a href="#" onClick={this.showContact.bind(this, this.props)}>Show Details</a>
         {/* <a href="#" onClick={this.deleteProject.bind(this, this.props.contact.index)}>X</a> */}
     </li>
    );
  }
}

export default ContactItem