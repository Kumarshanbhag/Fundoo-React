import React from 'react';
import FundooLogo from './FundooLogo';
import { Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    Button, 
}
from "@material-ui/core";
import "../scss/forgotpassword.scss";
import { Link } from "react-router-dom";

class ForgotPassword extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId:null
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange = async (e) => {
        // const { name } = e.target;
        this.setState({ [e.target.name]: await e.target.value });
      };

    render(){
        return(
            <Card className="mainLogo" justify="center" boxShadow={3}>
                <CardContent>
                    <FundooLogo /> 
                    <Typography className="signInLabel" m={3} variant="h5">
                        Find your email
                    </Typography>
                    <Typography className="loginInfo">Enter your recovery email</Typography> 

                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                    
                      <TextField className="EmailInput" value={this.state.emailId} name="EmailId" onChange="handleChange" fullWidth="true" 
                      id="standard-basic" color="secondary" label="Email Id *" variant="outlined"/>
                    
                    </Grid> 

                    <Link className="goBackButton" to="/">
                        Back
                    </Link>
                    <Button className="findEmail">
                        Next
                    </Button>
                </CardContent>
            </Card>
        );
    }
}

export default ForgotPassword;
