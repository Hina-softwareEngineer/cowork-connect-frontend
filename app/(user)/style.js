import styled from '@emotion/styled';
import { coworkTheme as theme } from '../_ui/theme';

export const LogistrationStyle = styled.section`
  .MuiAppBar-colorPrimary{
    background-color:  ${theme.palette.background.paper};
    border-bottom: 1px solid;
    border-color: ${theme.palette.divider};
    box-shadow: none;
  }

  .logistration-wrapper{
    background-image: radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%));
    background-size: cover;
  }

  .MuiFormHelperText-root{
    margin-left: 0;
  }
`;