'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
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
      <DialogTitle>Please fill out the form below so we can provide you with the best options and pricing for your office or floor booking needs.</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
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

