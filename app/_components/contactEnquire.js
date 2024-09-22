'use client';

import { coworkTheme, coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  OutlinedInput
} from '@/app/_ui/mui';


export function ContactEnquireForm({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleClose();
        },
      }}
    >
      <DialogTitle>Get a Quote</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Please fill out the form below so we can provide you with the best options and pricing for your office or floor booking needs.
        </DialogContentText>

        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="domain"
          name="domain"
          placeholder="Full Name"
          type="text"
          fullWidth
        />
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="mentors"
          name="mentors"
          placeholder="Email"
          type="email"
          fullWidth
        />
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="hours"
          name="hours"
          placeholder="Phone"
          type="tel"
          fullWidth
        />
        <DialogContentText sx={{ color: coworkTheme.palette.grey[400], fontSize: '12px', fontStyle: 'italic' }}>
          After you submit a workspace enquiry to us, we may share your enquiry details (including contact details) with workspace providers, who may contact you to follow up on your enquiry. Please read our <a href='#' style={{ textDecoration: 'underline' }}>Privacy and Cookies Policy</a> for details of how we process the information you provide.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" color='secondary' type="submit" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

