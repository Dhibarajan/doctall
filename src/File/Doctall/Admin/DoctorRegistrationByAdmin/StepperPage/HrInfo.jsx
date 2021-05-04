import React from 'react';
import { Checkbox, Grid, makeStyles, Select } from '@material-ui/core';
import TextWrapper from '../../components/TextWrapper/TextWrapper'
import LabelText from '../../components/LabelText/LabelText'
import BoldLabel from '../../components/BoldLabel/BoldLabel';
import CheckBox from '../../components/CheckBox/CheckBox';
import { Label } from '@material-ui/icons';
import UploadButton from '../../components/UploadButton/UploadButton';
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

function HrInfo() {
    const classes = useStyle()

    const [country, setCountry] = React.useState('');

    const handleCountry = (event) => {
        setCountry(event.target.value)
    }

    return (
        <div className={classes.root}>

            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <LabelText label="Full name" marginBottom="1%" />
                    <TextWrapper name="firstName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Address" marginBottom="1%" />
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
                <Grid item xs={12}>
                    <LabelText label="Email address" marginBottom="1%" />
                    <TextWrapper name="email" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Mobile number" marginBottom="1%" />
                    <TextWrapper name="mobile" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <BoldLabel label="Emergency Contact" />
                    <LabelText label="Ignore these fields if the Next of Kin information is the same as the Emergency Contact" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Full name" marginBottom="1%" />
                    <TextWrapper name="firstName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <LabelText label="Address" marginBottom="1%" />
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
                <Grid item xs={12}>
                    <LabelText label="Mobile number" marginBottom="1%" />
                    <TextWrapper name="mobile" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <BoldLabel label="Professional Indemnity" />
                    <LabelText name="This confirms that Dr. Samiat Aremu has been added to Doctall Group PI Policy" />
                    <div style={{ display: 'flex' }}>
                        <CheckBox />
                        <LabelText label="This confirms that Dr. Samiat Aremu has been added to Doctall Group PI Policy" type="text" />
                    </div>
                </Grid>
                <Grid item md={6} xs={12}>
                    <LabelText label="Licensing Authority" marginBottom="1%" />
                    <TextWrapper name="dob" type="date" />
                </Grid>
                <Grid item xs={12}>
                    <BoldLabel label="Doctors License" />
                    <LabelText label="Licensing Authority" marginBottom="1%" />
                    <TextWrapper name="Licensing" type="text" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <LabelText label="Date of Issue" marginBottom="1%" />
                    <TextWrapper name="dob" type="date" />
                </Grid>
                <Grid item md={6} xs={12}>
                    <LabelText label="Date of Expiry" />
                    <TextWrapper name="dob" type="date" />
                </Grid>

                <Grid item xs={12}>
                    <BoldLabel label="Required documents" />
                    <LabelText label="Please ensure the documents listed below are all uploaded and check them when uploaded." marginBottom="1%" />
                    <UploadButton />
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Educational Certifications" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Professional Certifications" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Personal Identification (International Passport, National ID, Voters Card, etc.)" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Professional Licenses" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Proof of Address (Utility Bill, Phone Bill etc. not older than 3 months)" type="text" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <CheckBox />
                        <LabelText label="Curriculum Vitae" type="text" />
                    </div>
                </Grid>
            </Grid>


        </div>
    )
}

export default HrInfo
