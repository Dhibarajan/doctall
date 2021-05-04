import React from 'react'
import { Button, Grid, makeStyles, Select, TextField, Typography } from '@material-ui/core';
import BoldLabel from '../components/BoldLabel/BoldLabel';
import LabelText from '../components/LabelText/LabelText';
import uploadDocument from '../icons/uploadDocument.png'


const useStyle = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: '2px solid #00839B',
            opacity: '0.95',
        },
        "& .MuiTextField-root": {
            borderRadius: '40px',
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: '10px',
            // opacity: '0.95'
        },
        "& .MuiInputBase-input": {
            color: '#A0DFC4'
        },
    },
    heading: {
        color: '013C44',
        fontStyle: 'normal',
        fontWeight: 'bolder',
        lineHeight: '36px',
        letterSpacing: '-0.3px'

    },
    gridContainer: {
        display: 'block',
        margin: '0 auto',
        height: '100vh',
        // justifyContent: 'center'
        // alignItems: 'center'

    },
    button: {
        display: 'flex',
        background: '#04A9C8',
        color: '#FFFFFF',
        padding: '0 26px',
        fontSize: '18px',
        textTransform: 'capitalize',
        lineHeight: '30px',
        fontWeight: 'bold',
        letterSpacing: '1.71px',
        fontStyle: 'normal',
        width: '100%',
        height: '4.625rem',
        backgroundColor: '#04A9C8',
        borderRadius: '20px',
        boxShadow: '-7px 6px 7px rgba(6, 99, 116, 0.05)',
        marginTop: '2%',
        [theme.breakpoints.down("sm")]: {
            padding: '0 20',
            fontSize: '13px',
            lineHeight: '20px',
            width: '100%',
            height: '3.5rem',
        },
    },
    img: {
        marginLeft: '10px'
    }
}))
function UploadDocumentScreen() {
    const classes = useStyle()
    const [Document, setDocument] = React.useState('Select type of document');


    const handleDocument = (event) => {
        setDocument(event.target.value)
    }
    return (
        <Grid className={classes.root}>
            <Grid item md={6} xs={12} className={classes.gridContainer}>
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
                    <div style={{ backgroundColor: '#F0F5F5', padding: '5% 10%', width: '100%', border: '1px solid #A0DFC4', borderRadius: '10px' }} >
                        <Typography variant="h5" container="p" className={classes.heading}>Upload Form Details</Typography>
                        <div>
                            <BoldLabel label="Document Name:" />
                            <TextField variant="outlined" fullWidth style={{ backgroundColor: 'while' }} />
                        </div>
                        <div>
                            <BoldLabel label="Type of Document:" />
                            <Select name="document" value={Document} onChange={handleDocument} variant="outlined" fullWidth defaultValue="Default Value">
                                <option value="Educational Certifications">Educational Certifications</option>
                                <option value="Professional Certifications">Professional Certifications</option>
                                <option value="Personal Identification (International Passport, National ID etc.)">Personal Identification (International Passport, National ID etc.)</option>
                                <option value="Professional Licenses ">Professional Licenses </option>
                                <option value=" Proof of Address (Utility Bill, Phone Bill etc. not older than 3 months) "> Proof of Address (Utility Bill, Phone Bill etc. not older than 3 months) </option>
                                <option value="Curriculum Vitae">Curriculum Vitae</option>
                            </Select>
                        </div>
                        <div>
                            <BoldLabel label="Date on the Document (optional):" />
                            <TextField variant="outlined" fullWidth type="date" />
                        </div>
                        <div>
                            <BoldLabel label="Additional Notes (optional):" />
                            <TextField id="outlined-multiline-static"
                                multiline
                                rows={4}
                                placeholder="Please leave any additional Information of document here. Character limit: 60"
                                variant="outlined" fullWidth
                            />
                        </div>
                        <div>
                            <BoldLabel label="Max file size: 5MB" />
                            <div style={{ display: 'flex', }}>
                                <BoldLabel label=" Accepted Formats:" />
                                <div style={{ width: '5px' }}></div>
                                <LabelText label="pdf, jpeg, png, docx, tiff, xml, bmp," />
                            </div>
                        </div>
                        <Button className={classes.button}>Upload document <img src={uploadDocument} alt="uploadDocument" className={classes.img} /></Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default UploadDocumentScreen
