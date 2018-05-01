import React, { Component } from 'react';


class ContactItem extends Component {

  showProject(index){
    console.log(index);

    this.props.onClick(index);
  }
  deleteProject(id){
    console.log(id);

    this.props.onDelete(id);
  }
  render() {
    return (
     <li key={this.props.contact.index}>
         <b>{this.props.contact.name}</b> - {this.props.contact.city} - {this.props.contact.state}
         <a href="#" onClick={this.showProject.bind(this, this.props.contact.index)}>X</a>
         {/* <a href="#" onClick={this.deleteProject.bind(this, this.props.contact.index)}>X</a> */}
     </li>
    );
  }
}

export default ContactItem