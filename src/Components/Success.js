import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {

    Continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    Back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {

      
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <AppBar title = "Success"/>
        <h1>Thank You for the Submission</h1>
        <p>You will receive a Email with the Further Instructions</p>
            </React.Fragment>
               
            </MuiThemeProvider>
        )
    }
}




export default Success

