import React from 'react';
import { Typography } from "@material-ui/core";
import "../scss/logo.scss";

class FundooLogo extends React.Component{
    render(){
        return(
            <Typography className="Logo" variant="h4" gutterBottom>
                <span className="logo-f-blue">F</span>
                <span className="logo-u-red">u</span>
                <span className="logo-n-yellow">n</span>
                <span className="logo-d-blue">d</span>
                <span className="logo-first-o-green">o</span>
                <span className="logo-second-o-red">o</span>
            </Typography>
        );
    }
}

export default FundooLogo;