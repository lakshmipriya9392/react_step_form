import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButtom from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

Continue = e => {
    e.preventDefault()
    this.props.nextStep();
}


    render() {
        const { values, handleChange } = this.props

        return (
            <MuiThemeProvider>
            <React.Fragment>
            <AppBar title = "Enter User Details"/>
            <TextField 
              hintText = "Enter First Name"
              floatingLabelText = "First Name"
              onChange = {handleChange('firstName')}
              defaultValue = {values.firstName}  
            />
            <br/>
            <TextField 
              hintText = "Enter Last Name"
              floatingLabelText = "Last Name"
              onChange = {handleChange('lastName')}
              defaultValue = {values.lastName}  
            />
            <br/>
            <TextField 
              hintText = "Enter Your Email"
              floatingLabelText = "Email"
              onChange = {handleChange('email')}
              defaultValue = {values.email}  
            />
            <br/>
            <RaisedButtom 
                label = "Continue"
                primary = {true}
                onClick = {this.Continue}
                style = {styles.button}
            />
            </React.Fragment>
               
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button : {
        margin : 15
    }
}

export default FormUserDetails
