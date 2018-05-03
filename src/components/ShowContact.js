import React, { Component } from 'react';
import ContactItem from './ContactItem'


class ShowContact extends Component {
    constructor(props){
        super(props)
    }

        showContacts(index) {
            this.props.onClick(index);

        }
    

    render() {
        let contactItems; 

        if(this.props.contacts){
            contactItems = this.props.contacts.map ( contact => {

            })
        }



    return(
        <div>
            <li>
                
                {/* <ContactItem onclick={this.showContacts.bind(this, this.props.contact.name, this.props.contact.city , this.props.contact.state , this.props.contact.email , this.props.contact.phone_number , this.props.contact.address , this.props.contact.zipCode)} />     */}
            </li>
        </div>
    )
}

}



export default ShowContact