import styled from '@emotion/styled';
import Image from 'next/image';
import { coworkTheme as theme } from '../_ui/theme';

import CoworkLogo from './cowork-logo.png';

export const LogoStyled = styled.div`

`;

const Logo = ({ width = 112, height = 89 }) => {
  return (
    <LogoStyled>
      <Image
        src={CoworkLogo}
        alt="Cowork Logo"
        width={width}
        height={height}
      />
    </LogoStyled>
  );
}

export { Logo };