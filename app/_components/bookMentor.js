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


export function BookMentorForm({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleC
          lose();
        },
      }}
    >
      <DialogTitle>Book a Mentor</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>Please fill out the following form for  booking a mentor. We&apos;ll review it and get back to you further details.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="domain"
          name="domain"
          placeholder="Mentorship Domains"
          type="text"
          fullWidth
        />
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="mentors"
          name="mentors"
          placeholder="Total Mentors"
          type="text"
          fullWidth
        />
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="hours"
          name="hours"
          placeholder="Duration (in hours)"
          type="number"
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

