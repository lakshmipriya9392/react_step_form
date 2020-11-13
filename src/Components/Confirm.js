import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButtom from 'material-ui/RaisedButton';

export class Confirm extends Component {

    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    Back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

        const { values : {  firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <AppBar title = "Confirm Your Details"/>
           <List>
               <ListItem 
                   primaryText = "First Name"
                   secondaryText = {firstName}
               />
                 <ListItem 
                   primaryText = "Last Name"
                   secondaryText = { lastName }
               />
                 <ListItem 
                   primaryText = "Email"
                   secondaryText = { email }
               />
                 <ListItem 
                   primaryText = "Occupation"
                   secondaryText = { occupation }
               />
                 <ListItem 
                   primaryText = "city"
                   secondaryText = { city }
               />
                 <ListItem 
                   primaryText = "Bio"
                   secondaryText = { bio }
               />
           </List>
            <br/>
            <RaisedButtom 
                label = "Save & Continue"
                primary = {true}
                onClick = {this.Continue}
                style = {styles.button}
            />
                <RaisedButtom 
                label = "Back"
                primary = {false}
                onClick = {this.Back}
                style = {styles.button}
            />
            </React.Fragment>
               
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin: 15
    }
}


export default Confirm

