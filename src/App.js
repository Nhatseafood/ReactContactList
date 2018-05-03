import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './myForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Contacts from './components/Contacts';
import ShowContact from './components/ShowContact'
import ShowDetail from './components/ShowDetail';


class App extends Component {

    constructor(){
        super();
        this.state = {
            contacts: [],
            showDetailContact: ""
        }
    }

    componentWillMount(){

        this.setState({contacts:[
            {
                id: 1,
                name: "Nhat",
                city: "Houston",
                state: "Texas",
                email: "n@yahoo.com"
            },
            {
                id: 2,
                name: "Tiff",
                city: "Austin",
                state: "Texas",
                email: "t@yahoo.com"
            },
            {
                id: 3,
                name: "Jen",
                city: "Chicago",
                state: "Texas",
                email: "J@yahoo.com"
            }
          ]}
        )

    }

    handleAddContacts(contact){
        console.log("what is being sent to us")
        console.log(contact)
        
        let contacts = this.state.contacts;
        contacts.push(contact);
        this.setState({contacts:contacts})
    }

    handleShowContacts(contact) {
        console.log(contact)

        let contacts = this.state.contacts;
        contacts.push(contact);
        this.setState({contacts:contacts})
    }


    showDetailContact(contact) {
        console.log(contact)

        let currentContact = this.state.showDetailContact;
        this.setState({showDetailContact:currentContact})
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
            <ShowDetail detailContact={this.state.showDetailContact} />

            
            </div>
        </MuiThemeProvider>
    );
   }
}



export default App;