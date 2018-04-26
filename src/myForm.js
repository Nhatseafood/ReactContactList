import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MyForm extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        name: '',
        email: '',
        phone_number: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
      };
    }
  
  render() {
    return (
      <form>
        <label> Name</label>
        <input type="text" onChange={event => this.setState({name:event.target.value})}/>
        <label> Email</label>
        <input type="text" onChange={event => this.setState({email:event.target.value})}/>
        <label> Phone</label>
        <input type="text" onChange={event => this.setState({phone:event.target.value})}/>
        <label> Address</label>
        <input type="text" onChange={event => this.setState({address:event.target.value})}/>
        <label> City</label>
        <input type="text" onChange={event => this.setState({city:event.target.value})}/>
        <label> State</label>
        <input type="text" onChange={event => this.setState({state:event.target.value})}/>
        <label> ZipCode</label>
        <input type="text" onChange={event => this.setState({zipcode:event.target.value})}/>
        <button type="submit">Submit</button>
          
        <RaisedButton label="Default"></RaisedButton>
      </form>
    );
  }
}

export default MyForm;