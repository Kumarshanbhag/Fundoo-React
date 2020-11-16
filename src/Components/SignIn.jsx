import React from 'react';
import FundooLogo from './FundooLogo';
import { Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    Button, }
from "@material-ui/core";
import "../scss/signin.scss";
import { Link } from "react-router-dom";

class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId:null,
            password:null,
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange = async (e) => {
        this.setState({ [e.target.name]: await e.target.value });
      };

    render(){
        return(
            <Card className="mainLogo" justify="center" boxShadow={3}>
                <CardContent>
                    <FundooLogo />
                    <Typography className="signInLabel" m={3} variant="h5">
                        Sign in
                    </Typography>
                    <Typography className="loginInfo">Continue to Fundoo</Typography>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                    
                        <TextField className="EmailInput" value={this.state.emailId} name="emailId" onChange={this.handleChange} 
                        fullWidth="true" id="standard-basic" color="secondary" label="Email Id *" variant="outlined"/>
            
                        <TextField className="PasswordInput" value={this.state.password} name="password" onChange={this.handleChange}
                        fullWidth="true" id="standard-basic" color="secondary" label="Password *" variant="outlined"></TextField>
                    
                    </Grid>
                    <Button className="LoginButton">Log In</Button>
                    <Link className="ForgotPasswordLink" to="/forgotpassword">
                        Forgot Password?
                    </Link>
                    <Link className="CreateAccountLink" to="/signup">
                        Create Account
                    </Link>
                </CardContent>
            </Card> 
        );
    }
}

export default SignIn;