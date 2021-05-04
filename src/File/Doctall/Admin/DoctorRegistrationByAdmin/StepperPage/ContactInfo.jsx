import React from 'react';
import { Grid, makeStyles, Select } from '@material-ui/core';
import TextWrapper from '../../components/TextWrapper/TextWrapper';



const useStyle = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #00839B',
            opacity: '0.95',
        },
        "& .MuiTextField-root": {
            borderRadius: '40px',
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '20px',
            // opacity: '0.95'
        },
        "& .MuiInputBase-input": {
            color: '#00839B'
        },
    },
    container: {
        padding: '5% 15%'
    },
    label: {
        color: '#013C44',
        fontStyle: 'normal',
        fontSize: '18px',

        ContactInfoneHeight: '23px',
        letterSpacing: '-0.291346px',
        marginBottom: '5px',
    },
    inputButton: {
        position: 'absolute',
        opacity: '0',
        zIndex: -1,
    },
    label2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '91px',
        height: '91px',
        cursor: 'pointer',
        border: '1px solid #00839B',
        background: '#DBE4F1',
        borderRadius: '50%',
    },
    uploadHeading: {
        color: '#013C44',
        fontSize: '20px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: '-0.291346px',
        marginBottom: '10px'
    },
    uploadInstruction: {
        textAlign: 'justify',
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '19px',
        fontWeight: 'normal',
        letterSpacing: '-0.291346px',
        color: 'rgba(4, 102, 115, 0.5)'
    },
    uploadContainer: {
        width: '288px',
        marginLeft: '60px',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

})

function ContactInfo() {
    const [country, setCountry] = React.useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }



    const classes = useStyle()
    return (
        <div className={classes.root}>

            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <div className={classes.label}>Email address</div>
                    <TextWrapper name="firstName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.label}>Mobile number</div>
                    <TextWrapper name="middleName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.label}>Address</div>
                    <TextWrapper name="lastName" type="text" placeholder="House name/number" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="languageSpoken" type="text" placeholder="city/state" />
                </Grid>
                <Grid item xs={6}>
                    <TextWrapper name="lastName" type="text" placeholder="Post Code" />

                </Grid>
                <Grid item xs={6}>
                    <Select name="country" value={country} onChange={handleCountry} variant="outlined" fullWidth>
                        <option aria-label="None" value="" />
                        <option value="USA">USA</option>
                        <option value="India">India</option>
                        <option value="Other">Other</option>
                    </Select>
                </Grid>

            </Grid>

        </div>
    )
}

export default ContactInfo
