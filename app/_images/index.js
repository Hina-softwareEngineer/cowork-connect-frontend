import styled from '@emotion/styled';
import Image from 'next/image';

import CoworkLogo from './cowork-logo.png';

export const LogoStyled = styled.div`

`;

const Logo = ({ width = 112, height = 89 }) => {
  return (
    <LogoStyled>
      <a href='/'>
        <Image
          src={CoworkLogo}
          alt="Cowork-Connect Logo"
          width={width}
          height={height}
        /></a>
    </LogoStyled>
  );
}

export { Logo };