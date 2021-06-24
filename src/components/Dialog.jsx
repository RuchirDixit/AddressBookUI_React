import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addContact} from '../services/ContactsService';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false)
  const [firstName,setFirstName] = React.useState("")
  const [lastName,setLastName] = React.useState("")
  const [mobileNumber,setMobileNumber] = React.useState("")
  const [emailId,setEmailId] = React.useState("")
  const [address,setAddress] = React.useState("")
  const [zipcode,setZipcode] = React.useState("")
  const [city,setCity] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveContact = (e) => {
      e.preventDefault()
      let contact = {
        firstName : firstName,
        lastName : lastName,
        emailId : emailId,
        mobileNumber : mobileNumber,
        address : address,
        zipcode : zipcode,
        city : city
      }
      addContact(contact)

      setFirstName("")
      setLastName("")
      setEmailId("")
      setMobileNumber("")
      setZipcode("")
      setCity("")
      setAddress("")
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Contact
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contact Form</DialogTitle>
        <DialogContent>
          
        <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  label="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  name="emailId"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Phone Number"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  autoComplete="Phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="zipcode"
                  label="Zipcode"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="city"
                  label="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                />
              </Grid>
            </Grid>
            <br></br>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={saveContact} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
