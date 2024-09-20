import styled from '@emotion/styled';
import { coworkTheme as theme } from '../_ui/theme';
import {
  TableContainer,
} from '@/app/_ui/mui';


export const ListingsStyle = styled.main`
  background-image: radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%));
  .MuiAppBar-colorPrimary{
    background-color:  ${theme.palette.common.white};
    border-bottom: 1px solid;
    border-color: ${theme.palette.grey[200]};
    box-shadow: none;
  }

  .listing-wrapper{
    background-size: cover;
    width: 100%;
    height:  100%;
  }

  .MuiFormHelperText-root{
    margin-left: 0;
  }
`;

export const TableContainerStyled = styled(TableContainer)`

`;