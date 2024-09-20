'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  CloseRoundedIcon
} from '@/app/_ui/mui';


export function BookTourForm({ open, handleClose }) {
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
      <DialogTitle sx={{ mt: '16px', fontSize: '24px' }} textAlign='center'>Tour Booking Confirmation</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
          border: 'none'
        })}
      >
        <CloseRoundedIcon />
      </IconButton>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: '24px' }}
      >
        <DialogContentText fontSize='15px' textAlign='center'>Thank you for booking with us! We have received your request and will get in touch shortly to confirm the details. Stay tuned!</DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

