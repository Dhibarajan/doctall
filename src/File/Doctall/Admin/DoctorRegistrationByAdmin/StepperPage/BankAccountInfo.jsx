import React from 'react'
import { Grid, makeStyles, Select } from '@material-ui/core';
import TextWrapper from '../../components/TextWrapper/TextWrapper'
import LabelText from '../../components/LabelText/LabelText';

const useStyle = makeStyles(theme => ({
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
}))

function BankAccountInfo() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <LabelText label="Name of account " marginBottom="1%" />
                    <TextWrapper name="nameofaccount" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Residential address" marginBottom="1%" />
                    <TextWrapper name="residentialaddress" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="housenumber" placeholder="House Number/Name" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="streetname" placeholder="Street Name" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="areavillageown" placeholder="Area/Village Town" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Bank name" marginBottom="1%" />
                    <TextWrapper name="bankname" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Bank branch" marginBottom="1%" />
                    <TextWrapper name="bankbranch" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Account number" marginBottom="1%" />
                    <TextWrapper name="accountnumber" type="text" />
                </Grid><Grid item xs={12}>
                    <LabelText label="Name of account " marginBottom="1%" />
                    <TextWrapper name="nameofaccount" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Account type" marginBottom="1%" />
                    <TextWrapper name="accounttype" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Routing number" marginBottom="1%" />
                    <TextWrapper name="routingnumber" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Bank SWIFT or BIC code (if applicable)" marginBottom="1%" />
                    <TextWrapper name="Bankswift" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Bank IBAN (if applicable)" marginBottom="1%" />
                    <TextWrapper name="Bankiban" type="text" />
                </Grid>
            </Grid>
        </div>
    )
}

export default BankAccountInfo
