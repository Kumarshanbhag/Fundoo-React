import React from 'react';
import FundooLogo from './FundooLogo';
import { Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput, }
from "@material-ui/core";
import "../scss/signin.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";

class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId:null,
            password:null,
            passwordVisibility:true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleVisibility=this.handleVisibility.bind(this);
      }

      handleChange = async (e) => {
        this.setState({ [e.target.name]: await e.target.value });
      };

      handleVisibility = () => {
        if(this.state.passwordVisibility === true) {
          this.setState({ passwordVisibility: false});
        }
        else {
          this.setState({ passwordVisibility: true});
        }
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
            
                        <Grid item xs={12} className="gridItem">
                          <FormControl variant="outlined" className="passwordForm">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password*
                            </InputLabel>
                            <OutlinedInput
                            type={this.state.passwordVisibility ? "password":"text"}
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility"
                                        onClick={this.handleVisibility}
                                        edge="end"
                                    >
                                    {this.state.passwordVisibility ? (<VisibilityOffIcon />) : (<VisibilityIcon />)}
                                    </IconButton>
                                </InputAdornment>
                            }
                        labelWidth={70} />
                            </FormControl>
                        </Grid>

                        {/* <TextField className="PasswordInput" value={this.state.password} name="password" onChange={this.handleChange}
                        fullWidth="true" id="standard-basic" color="secondary" label="Password *" variant="outlined"></TextField> */}
                    
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