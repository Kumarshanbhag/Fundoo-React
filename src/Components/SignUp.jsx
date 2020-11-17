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
    FormHelperText
}
from "@material-ui/core"; 
import "../scss/signup.scss";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";

const NAME_PATTERN = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
const EMAIL_PATTERN = RegExp(
    "^[a-zA-Z0-9]+[.+_-]?[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.][a-zA-Z]{2,4}[.]?[a-zA-Z]{0,3}"
  );
const CONTACT_PATTERN = RegExp("^[0-9]{10}$");

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
            validName:false,
            validLastname:false,
            validEmail:false,
            validContact:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleVisibility=this.handleVisibility.bind(this);
      }

      handleChange = async (e) => {
        const { name } = e.target;
        this.setState({ [e.target.name]: await e.target.value });
        console.log(name);
        switch (name) {
            case "firstname":
              NAME_PATTERN.test(this.state.firstname)
                ? this.setState({ validName: true })
                : this.setState({ validName: false });
            break;

            case "lastname":
                NAME_PATTERN.test(this.state.lastname)
                  ? this.setState({ validLastname: true })
                  : this.setState({ validLastname: false });
            break;

            case "emailId":
                EMAIL_PATTERN.test(this.state.emailId)
                  ? this.setState({ validEmail: true })
                  : this.setState({ validEmail: false });
            break;

            case "mobile":
                CONTACT_PATTERN.test(this.state.mobile)
                  ? this.setState({ validContact: true })
                  : this.setState({ validContact: false });
            break;
    
            default:
              break;
        }
        console.log(this.state.validName);
        console.log(this.state.validLastname);
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
                    
                    <Grid className="gridContainer" container spacing={2} direction="row" justify="center" 
                    alignItems="center" spacing={2}>
                        
                        <Grid item xs={6} className="gridItem">
                            <TextField name='firstname' onChange={this.handleChange} value={this.state.firstname}
                            fullWidth="true" id="outlined-basic" label="First name*" variant="outlined"/>
                            {this.state.validName === false ? (
                                <FormHelperText style={{ color: "red" }} id="outlined-weight-helper-text">
                                    Enter Valid First Name
                                </FormHelperText>
                            ) : null} 
                        </Grid>
                        
                        <Grid item xs={6}  className="gridItem">
                            <TextField name="lastname" onChange={this.handleChange} value={this.state.lastname} fullWidth="true" 
                            id="outlined-basic" label="Last name*" variant="outlined"/>
                            {this.state.validLastname === false ? (
                                <FormHelperText style={{ color: "red" }} id="outlined-weight-helper-text">
                                    Enter Valid Last Name
                                </FormHelperText>
                            ) : null} 
                        </Grid>
                        
                        <Grid item xs={12} className="gridItem">
                            <TextField name='emailId' onChange={this.handleChange} value={this.state.emailId} fullWidth="true"
                             id="outlined-basic" label="Email Id*" variant="outlined"/>
                             {this.state.validEmail === false ? (
                                <FormHelperText style={{ color: "red" }} id="outlined-weight-helper-text">
                                    Enter Valid Email Id
                                </FormHelperText>
                            ) : null} 
                        </Grid>

                        <Grid item xs={12} className="gridItem">
                            <TextField name='mobile' onChange={this.handleChange} value={this.state.mobile} fullWidth="true"
                             id="outlined-basic" label="Mobile*" variant="outlined"/>
                             {this.state.validContact === false ? (
                                <FormHelperText style={{ color: "red" }} id="outlined-weight-helper-text">
                                    Enter Valid Last Name
                                </FormHelperText>
                            ) : null}
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