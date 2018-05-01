import React, { Component } from 'react';
import ContactItem from './ContactItem'


class Contacts extends Component {
  render() {

    let ContactItems;

    if(this.props.contacts){
      ContactItems = this.props.contacts.map( (contact, index) => {
       
        //console.log(project)

          return (
            <ContactItem key={contact.index} contact={contact} />
          )
      })
    }

    return (
      <div >

      {ContactItems} <br />
      This is a Contact form <br />
       
      </div>
    );
  }
}

export default Contacts