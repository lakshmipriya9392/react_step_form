import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButtom from 'material-ui/RaisedButton';

export class FormUserPersnolDetails extends Component {

    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    Back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

        const { values, handleChange } = this.props
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <AppBar title = "Enter Personal Details"/>
            <TextField 
              hintText = "Occupation"
              floatingLabelText = "Occupation"
              onChange = {handleChange('occupation')}
              defaultValue = {values.occupation}  
            />
            <br/>
            <TextField 
              hintText = "Enter City"
              floatingLabelText = "City"
              onChange = {handleChange('city')}
              defaultValue = {values.city}  
            />
            <br/>
            <TextField 
              hintText = "Enter Your Bio"
              floatingLabelText = "Bio"
              onChange = {handleChange('bio')}
              defaultValue = {values.bio}  
            />
            <br/>
            <RaisedButtom 
                label = "Continue"
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


export default FormUserPersnolDetails
