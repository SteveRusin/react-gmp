import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: ${({theme}) => theme.palette.primary};
  .logo-bold {
    font-weight: bold;
  }
`;

export const Logo = () => (
    <Link href="#">
      <span className="logo-bold">netflix</span>
      <span>roulette</span>
    </Link>
);
