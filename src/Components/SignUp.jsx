import React from 'react';
import FundooLogo from './FundooLogo';
import { Card,
    CardContent,
    Typography,
    TextField,
    Grid,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
}
from "@material-ui/core"; 
import "../scss/signup.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";

class SignUp extends React.Component{
    constructor() {
        super();
        this.state = {
            firstname:null,
            lastname:null,
            emailId:null,
            mobile:null,
            password:null,
            confirm:null,
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
            <Card className="signUpCard">
                <CardContent>
                    <FundooLogo />
                    <Typography variant="h5" className="signUpLabel">
                        Create your Fundoo Account
                    </Typography>
                    
                    <Grid className="gridContainer" container spacing={1} direction="row" justify="center" 
                    alignItems="center" spacing={2}>
                        
                        <Grid item xs={6} className="gridItem">
                            <TextField name='firstname' onChange={this.handleChange} value={this.state.firstname}
                            fullWidth="true" id="outlined-basic" label="First name*" variant="outlined"/>
                        </Grid>
                        
                        <Grid item xs={6}  className="gridItem">
                            <TextField name="lastname" onChange={this.handleChange} value={this.state.lastname} fullWidth="true" 
                            id="outlined-basic" label="Last name*" variant="outlined"/>
                        </Grid>
                        
                        <Grid item xs={12} className="gridItem">
                            <TextField name='emailId' onChange={this.handleChange} value={this.state.emailId} fullWidth="true"
                             id="outlined-basic" label="Email Id*" variant="outlined"/>
                        </Grid>

                        <Grid item xs={12} className="gridItem">
                            <TextField name='mobile' onChange={this.handleChange} value={this.state.mobile} fullWidth="true"
                             id="outlined-basic" label="Mobile*" variant="outlined"/>
                        </Grid>
                        
                        <Grid item xs={6} className="gridItem">
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

                        <Grid item xs={6} className="gridItem">
                          <FormControl variant="outlined" className="passwordForm">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Confirm Password*
                            </InputLabel>
                            <OutlinedInput
                            type={this.state.passwordVisibility ? "password":"text"}
                            name="password"
                            value={this.state.confirm}
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
                    <Link className="SignUpButton" to="/profile">
                        Sign Up
                    </Link>
                    <Link className="LoginLink" to="/">
                        Sign In Instead
                     </Link>        
                </CardContent>
            </Card>
        );
    }
}

export default SignUp;