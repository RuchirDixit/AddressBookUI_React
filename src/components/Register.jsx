import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
//import {register} from '../services/RegisterService';
export default function Register() {
  
  const [email,setEmail] = React.useState("")
  const [firstName,setFirstName] = React.useState("")
  const [lastName,setLastName] = React.useState("")
  const [phone,setPhone] = React.useState("")
  const [password,setPassword] = React.useState("")
  const isEnabled = (email.length > 0 && firstName.length>0 && lastName.length > 0 && phone.length>0 && password.length>0)

  const onButtonClick = (e) => {
    e.preventDefault();
    let userData = {
      firstName : firstName,
      lastName : lastName,
      emailId : email,
      password : password,
      phoneno : phone
    }
    console.log(userData);
    //register(userData)
  }

    return (
      <div>
        <br></br><br></br>
      <Container component="main" maxWidth="xs">
        <div>
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
                  name="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="Phone number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <br></br>
              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={!isEnabled}
              onClick={onButtonClick}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      </div>
    );
    }