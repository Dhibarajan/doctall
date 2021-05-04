import React from 'react';
import backgroundImg from '../image/BackgroundImage.png';
import { makeStyles, Grid } from '@material-ui/core'
import Logo from '../components/Logo/Logo';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import StepperComponent from './StepperComponent';


const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    gridContainer: {
        height: '100%',
        width: '100%',
    },
    rightGrid: {
        display: 'block',
        justifyContent: 'center',
        border: '3px solid #00839B',
        borderRadius: '50px 0px 0px 50px',
        margin: '0 0 0 auto',
        background: '#FFFFFF',
        opacity: '0.95',
        [theme.breakpoints.down("sm")]: {
            borderRadius: '3px',
        },
    },
    sign_in: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#013C44',
        fontWeight: 'bold',
        fontStyle: 'normal',
        width: '88px',
        height: '39px',
        background: 'rgba(102, 181, 195, 0.15)',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        borderRadius: '7px',

    },
    register: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        width: '78px',
        height: '12px',
        color: '#013C44',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontSize: '16px',
        fontStyle: 'normal',

    }
}))

function AdminFillsDoctorInformation() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} xs={12} className={classes.rightGrid}>
                    <div style={{ display: 'flex', width: 'auto', justifyContent: 'space-between', padding: '5% 6%' }}>
                        <a href="/" className={classes.sign_in}>Sign in</a>
                        <a href="/" className={classes.register}>Register</a>
                    </div>
                    <div style={{ padding: '20px 20px' }}>
                        <StepperComponent />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default AdminFillsDoctorInformation

