import React from 'react';
import { Button, Step, StepLabel, Stepper, makeStyles } from '@material-ui/core';
import Triangle from '../icons/triangle.png';
import Tick from '../icons/Tick.png'

// Stepper component
import PersonalInfo from './StepperPage/PersonalInfo';
import ContactInfo from './StepperPage/ContactInfo';
import ProfessionalInfo from './StepperPage/ProfessionalInfo';
import BankAccountInfo from './StepperPage/BankAccountInfo';
import HrInfo from './StepperPage/HrInfo';

const useStyle = makeStyles(theme => ({
    root: {
        "& .MuiStepIcon-root.MuiStepIcon-active": {
            color: "#04A9C8",
            // fontSize: "36px",
        },
        "& .MuiStepIcon-root.MuiStepIcon-completed": {
            color: "#04A9C8"
        },
        "& .makeStyles-root-7 .MuiStepIcon-root": {
            fontSize: "36px"
        },
        "& .MuiStepIcon-root": {
            color: "#04A9C8"
        },
        "& .MuiStepLabel-label.MuiStepLabel-active": {
            color: "#04A9C8"
        },
        "& .MuiStepLabel-label": {
            color: "#04A9C8"
        },
        "& .MuiStepConnector-line": {
            border: '1px solid #04A9C8'
        }
    },
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        background: '#04A9C8',
        color: '#FFFFFF',
        fontSize: '25px',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: 'auto',
        height: '74px',
        borderRadius: '20px',
        padding: '0 30px',
        marginLeft: '15%',
        marginBottom: '20px',
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: '10rem',
            height: '3.5rem',
        },
    }
}))



function StepperComponent() {
    const classes = useStyle()

    const [activeStep, setActiveStep] = React.useState(0);

    // handle next step
    const handleNext = () => {
        setActiveStep(preventActiveStep => preventActiveStep + 1)
    }

    function getSteps() {
        return ["Personal info", "Contact info", "Professional info", "Bank account info", "HR info"]
    }
    const steps = getSteps();
    console.log(steps.length)

    // multiple form component
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <PersonalInfo />;
            case 1:
                return <ContactInfo />;
            case 2:
                return <ProfessionalInfo />;
            case 3:
                return <BankAccountInfo />;
            case 4:
                return <HrInfo />;
            default: return 'url redirect'
        }

    }
    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <>
                {getStepContent(activeStep)}
                <Button onClick={handleNext} className={classes.button}>

                    {activeStep === steps.length - 1 ? <div>Create Account <img src={Tick} alt="Tick" style={{ paddingLeft: '20px' }} /></div> : <div>Next <img src={Triangle} alt="triangle" style={{ paddingLeft: '20px' }} /></div>}



                </Button>
            </>

        </div>
    )
}

export default StepperComponent
