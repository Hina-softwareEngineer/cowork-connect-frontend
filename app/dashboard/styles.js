import styled from '@emotion/styled';
import { coworkTheme as theme } from '../_ui/theme';

export const DashboardStyle = styled.main`
  .MuiAppBar-colorPrimary{
    background-color:  ${theme.palette.common.white};
    border-bottom: 1px solid;
    border-color: ${theme.palette.grey[200]};
    box-shadow: none;
  }

  .dashboard-wrapper{
    background-image: radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%));
    background-size: cover;
    width: 100%;
    height:  100%;
  }

  .MuiFormHelperText-root{
    margin-left: 0;
  }
`;