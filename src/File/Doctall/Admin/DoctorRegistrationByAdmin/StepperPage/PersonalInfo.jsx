
import React from 'react';
import { Grid, makeStyles, Select } from '@material-ui/core';
import TextWrapper from '../../components/TextWrapper/TextWrapper'
import FileUpload from '../../icons/fileUpload.png';



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


function PersonalInfo() {
    const [gender, setGender] = React.useState('');
    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    //   const handleDateChange = date => {
    //     setSelectedDate(date);
    //   };

    const handleGender = (event) => {
        setGender(event.target.value)
    }

    const classes = useStyle()

    return (
        <div className={classes.root}>

            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <div className={classes.label}>First Name</div>
                    <TextW rapper name="firstName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.label}>Middle Name</div>
                    <TextWrapper name="middleName" type="text" />
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.label}>Last Name</div>
                    <TextWrapper name="lastName" type="text" />
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.label}>Date of birth</div>
                    <TextWrapper name="dob" type="date" />
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </MuiPickersUtilsProvider> */}
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.label}>Gender</div>
                    <Select name="gender" value={gender} onChange={handleGender} variant="outlined" fullWidth>
                        <option aria-label="None" value="" />
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </Select>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.label}>Language Spoken</div>
                    <TextWrapper name="languageSpoken" type="text" />
                </Grid>
                {/* first upload button  */}
                <Grid item xs={12}>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <label for="upload-photo" className={classes.label2}>
                                <img src={FileUpload} alt="File Upload" />
                            </label>
                            <input type="file" name="photo" className={classes.inputButton} id="upload-photo" />
                        </div>
                        <div className={classes.uploadContainer}>
                            <div className={classes.uploadHeading}>
                                Upload your profile photo
                                    </div>
                            <div className={classes.uploadInstruction}>
                                Profile picture should be in the standard format png, jpeg & no more than 2mb.
                                    </div>
                        </div>
                    </div>



                </Grid>
                {/* second upload button */}
                <Grid item xs={12}>

                    <div style={{ display: 'flex' }}>
                        <div>
                            <label for="upload-photo2" className={classes.label2}>
                                <img src={FileUpload} alt="File Upload" />
                            </label>
                            <input type="file" name="profilePhoto" className={classes.inputButton} id="upload-photo2" />
                        </div>
                        <div className={classes.uploadContainer}>
                            <div className={classes.uploadHeading}>
                                Upload your signature
                                    </div>
                            <div className={classes.uploadInstruction}>
                                Signature should be in the standard png format, no more than 2mb.
                                    </div>
                        </div>
                    </div>

                </Grid>
            </Grid>

        </div>
    )
}

export default PersonalInfo
