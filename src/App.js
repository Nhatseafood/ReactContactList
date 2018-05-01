import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './myForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Contacts from './components/Contacts';


class App extends Component {

    constructor(){
        super();
        this.state = {
            contacts: []
        }
    }

    componentWillMount(){

        this.setState({contacts:[
            {
                name: "Nhat",
                city: "Houston",
                state: "Texas"
            },
            {
                name: "Tiff",
                city: "Austin",
                state: "Texas"
            },
            {
                name: "Jen",
                city: "Chicago",
                state: "Texas"
            }
          ]})

    }

    handleAddContacts(contact){
        console.log("what is being sent to us")
        console.log(contact)
        
        let contacts = this.state.contacts;
        contacts.push(contact);
        this.setState({contacts:contacts})
    }



    render() {
        console.log(this.state)

        return (
            
        <MuiThemeProvider>
            <AppBar title="My Awesome Form" />
            <div>
                <h1>YO</h1>
            <Contacts contacts={this.state.contacts} />   
            <MyForm addContact={this.handleAddContacts.bind(this)}/>
            
            </div>
        </MuiThemeProvider>
    );
   }
}



export default App;