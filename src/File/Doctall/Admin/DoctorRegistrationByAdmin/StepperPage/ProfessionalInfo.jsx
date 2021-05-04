import React from 'react';
import { Grid, makeStyles, Select } from '@material-ui/core';
import TextWrapper from '../../components/TextWrapper/TextWrapper';
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

function ProfessionalInfo() {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <LabelText label="Professional name*" marginBottom="1%" />
                    <TextWrapper name="professionalName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Speciality*" marginBottom="1%" />
                    <TextWrapper name="speciality" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Bio*" marginBottom="1%" />
                    <TextWrapper name="bio" type="text" multiline rows={4} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <LabelText label="Folio number*" marginBottom="1%" />
                    <TextWrapper name="Folionumber" type="text" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <LabelText label="Consultation fee*" marginBottom="1%" />
                    <TextWrapper name="Consultation" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Enter Video URLs" marginBottom="1%" />
                    <TextWrapper name="url1" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="url2" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="url3" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Social Media URL" marginBottom="1%" />
                    <TextWrapper name="facebook" placeholder="Facebook" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="linkedin" placeholder="Linkedin" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="instagram" placeholder="Instagram" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="twitter" placeholder="Twitter" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="youtube" placeholder="Youtube" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <TextWrapper name="other" placeholder="Other" type="text" />
                </Grid>

            </Grid>
        </div>
    )
}

export default ProfessionalInfo
