'use client';

import { coworkTheme as theme } from '@/app/_ui/theme';
import { styled } from '@mui/material/styles';
import {
  Button, CloudUploadRoundedIcon,
  ImageRoundedIcon
} from '@/app/_ui/mui';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export function InputFileUpload({ file, setFile }) {
  return (
    <Button
      component="label"
      role={undefined}
      variant={file.name ? 'contained' : 'outlined'}
      color={file.name ? "secondary" : "info"}
      tabIndex={-1}
      startIcon={file.name ? <ImageRoundedIcon /> : <CloudUploadRoundedIcon />}
    >
      {file.name || 'Upload Image'}
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => setFile(event.target.files)}
        multiple
      />
    </Button>
  );
}