'use client';

import React from 'react';
import { coworkTheme } from '@/app/_ui/theme';
import {
  Box, Button, Divider, Typography, Card, Stack, FormControl, FormLabel, TextField, Link,
} from '@/app/_ui/mui';

import { GoogleIcon, FacebookIcon } from '@/app/(user)/customIcons';


export default function Register() {

  const [firstNameError, setFirstNameError] = React.useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = React.useState('');
  const [organisationError, setOrganisationError] = React.useState(false);
  const [organisationErrorMessage, setOrganisationErrorMessage] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('first_name'),
      lastName: data.get('last_name') || '',
      organisation: data.get('organisation_name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const firstName = document.getElementById('first-name');
    const organisation = document.getElementById('organisation-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!firstName.value || firstName.value.length < 3) {
      setFirstNameError(true);
      setFirstNameErrorMessage('First Name must be at least 3 characters long.');
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage('');
    }

    if (!organisation.value || organisation.value.length < 3) {
      setOrganisationError(true);
      setOrganisationErrorMessage('Organisation Name must be at least 6 characters long.');
      isValid = false;
    } else {
      setOrganisationError(false);
      setOrganisationErrorMessage('');
    }

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <>
      <Card variant="outlined" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '100%',
        padding: coworkTheme.spacing(4),
        gap: coworkTheme.spacing(2),
        width: '450px',
        boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
      }}>
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: '100%', fontSize: '1.75rem' }}
        >
          Create an Account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
        >
          <Stack direction="row" spacing={1} justifyContent="space-between" >
            <FormControl>
              <FormLabel htmlFor="first-name">First Name</FormLabel>
              <TextField
                error={firstNameError}
                helperText={firstNameErrorMessage}
                id="first-name"
                type="text"
                name="first_name"
                placeholder="First Name"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={firstNameError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'first-name' }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="last-name">Last Name</FormLabel>
              <TextField
                id="last-name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                autoFocus
                required
                fullWidth
                variant="outlined"
                sx={{ ariaLabel: 'last-name' }}
              />
            </FormControl>
          </Stack>

          <FormControl>
            <FormLabel htmlFor="organisation-name">Organisation Name</FormLabel>
            <TextField
              error={organisationError}
              helperText={organisationErrorMessage}
              id="organisation-name"
              type="text"
              name="organisation_name"
              placeholder="Organisation Name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={organisationError ? 'error' : 'primary'}
              sx={{ ariaLabel: 'organisation-name' }}
            />
          </FormControl>


          <FormControl>
            <FormLabel htmlFor="work-email">Work Email</FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@workemail.com"
              autoComplete="email"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? 'error' : 'primary'}
              sx={{ ariaLabel: 'email' }}
            />
          </FormControl>



          <FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FormLabel htmlFor="password">Password</FormLabel>
            </Box>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••"
              type="password"
              id="password"
              autoComplete="current-password"
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={passwordError ? 'error' : 'primary'}
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color='secondary' onClick={validateInputs}>
            Sign up
          </Button>
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <span>
              <Link
                href="/login"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign in
              </Link>
            </span>
          </Typography>
        </Box>
        <Divider>or</Divider>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Google')}
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            onClick={() => alert('Sign up with Facebook')}
            startIcon={<FacebookIcon />}
          >
            Sign up with Facebook
          </Button>
        </Box>
      </Card>
    </>
  );
}