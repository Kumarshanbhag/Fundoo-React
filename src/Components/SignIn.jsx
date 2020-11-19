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
    OutlinedInput,
    Snackbar, }
from "@material-ui/core";
import "../scss/signin.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";
import UserServicesAPI from "../Services/UserServices.jsx";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SignIn extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId:null,
            password:null,
            passwordVisibility:true,
            open: false,
            message: null,
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

    handleData = async () => {
        let data = {
            email:this.state.emailId,
            password:this.state.password
        };
        UserServicesAPI.login(data, (res) => {
            if (res.status === 200) {
                console.log("Response", res);
                this.setState({ message: "Login Done" });
                this.setState({ open: true });
                console.log(data);
                this.props.history.push({
                    pathname: "/profile",
                    state: { data },
                });
            } else {
                this.setState({ message: "Login Failed" });
                this.setState({ open: true });
            }
         })
    };

    handleSnackbarClose = () => {
        this.setState({ open: false});
    }

    render(){
        return(
            <Card className="signinCard " justify="center" boxShadow={3}>
                <CardContent>
                    <Snackbar
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        open={this.state.open}
                        autoHideDuration={1000}
                        onClose={this.handleSnackbarClose}
                    >
                        <Alert severity="success">
                            {<span>{this.state.message}</span>} 
                        </Alert>
                    </Snackbar>
                    
                    <FundooLogo />
                    <Typography className="signInLabel" m={1} variant="h5">
                        Sign in
                    </Typography>
                    <Typography className="loginInfo">Continue to Fundoo</Typography>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                    
                        <TextField className="EmailInput" value={this.state.emailId} name="emailId" onChange={this.handleChange} 
                        fullWidth="true" id="standard-basic" color="secondary" label="Email Id *" variant="outlined"/>
            
                        <Grid item xs={12} className="gridItem">
                          <FormControl variant="outlined" className="password">
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
                    
                    </Grid>
                    <Button className="LoginButton" onClick={this.handleData}>Log In</Button>
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