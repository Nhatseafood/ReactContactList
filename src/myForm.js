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
   
    
  
    handleSubmit(e) {
      console.log("submitted");
      console.log(this.refs.name.value);
      e.preventDefault();

      if(this.refs.name.value === '') {
        alert('name is required')
      }else{
        this.setState({newContact:{
          name: this.refs.name.value,
          city: this.refs.city.value,
          state: this.refs.state.value
        }}, function(){
            
            this.props.addContact(this.state.newContact);
        })
      }

    }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
       
        <div>
            <label> Name</label>
            <input type="text" ref="name" onChange={event => this.setState({name:event.target.value})}/>
        </div>
        
        <div>
            <label> Email</label>
            <input type="text" ref="email" onChange={event => this.setState({email:event.target.value})}/>
        </div>

        <div>
            <label> Phone</label>
            <input type="text" ref="address" onChange={event => this.setState({phone:event.target.value})}/>
        </div>

        <div>
        <label> Address</label>
        <input type="text" ref="city"onChange={event => this.setState({address:event.target.value})}/>
        </div>

        <div>
        <label> City</label>
        <input type="text" ref="state" onChange={event => this.setState({city:event.target.value})}/>
        </div>

        <div>
        <label> State</label>
        <input type="text" ref="zipcode"onChange={event => this.setState({state:event.target.value})}/>
        </div>

        <div>
        <label> ZipCode</label>
        <input type="text" onChange={event => this.setState({zipcode:event.target.value})}/>
        </div>

        <button type="submit">Submit</button>
          
        <RaisedButton label="Default"></RaisedButton>
      </form>
    );
  }
}

export default MyForm;