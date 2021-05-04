import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

// components
import Logo from '../../components/Logo/Logo'
import TextWrapper from '../../components/TextWrapper/TextWrapper';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import SuccessMessage from '../../components/SuccessMessage/SuccessMessage';

const useStyle = makeStyles(theme =>({
    gridCenter:{
        display: 'block',
        margin: '0 auto',
        height: '100vh',
    }
}))

function Screen5() {
    const classes = useStyle()
    return (
        <Grid container>
            <Grid item md={4} sm={12} className={classes.gridCenter}>
            <div style={{marginTop: '20%'}}> 
            <Logo/>
            <SuccessMessage message="Your password has been reset"/>
            <TextWrapper placeholder="Email" name="email" marginBottom="10%"/>
            <TextWrapper placeholder="Password" name="password" marginBottom="10%"/>
            <ButtonComponent btntext="Log in"/>
            </div>
            </Grid>
        </Grid>
    )
}

export default Screen5
