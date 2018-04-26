import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './myForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends Component {
    render() {
        return (
            
        <MuiThemeProvider>
            <AppBar title="My Awesome Form" />
            <div>
                <h1>YO</h1>
            <MyForm />
            </div>
        </MuiThemeProvider>
    );
   }
}



export default App;