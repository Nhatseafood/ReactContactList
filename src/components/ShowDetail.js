import React, { Component} from 'react';
import ContactItem from './ContactItem'

class ShowDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            showDetailContact : ''
        }
    }

    componentDidMount() {
        let currentContact = this.props.showDetailContact
        console.log(this.props.showDetailContact)
        this.setState({showDetailContact: currentContact})
    }

    render() {

        let currentContact = this.props

        console.log(currentContact , " << currentContact")
    
        return (
         <div>
             "hey we got data"
             {this.props.detailContact.name}
             {/* {this.props.contact.name} - {this.props.contact.email} - {this.props.contact.phone_number} - {this.props.contact.address} - {this.props.contact.city} - {this.props.contact.state} - {this.props.contact.zipCode} */}
             
         </div>
        );
      }
}    



export default ShowDetail;