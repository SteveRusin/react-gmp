import { DefaultTheme } from 'styled-components';

import headerBackground from '@assets/header-top-background.png';

export const defaultTheme: DefaultTheme = {
  size: {
    pageVerticalPadding: '20px',
    pageHorizontalPadding: '60px',
  },
  palette: {
    primary: '#F65261',
    secondary: '#323232',
    secondaryVariant: '#555',
    accent: '#232323',
    accentVariant: '#606060',
    textPrimary: '#FFF',
  },
  urls: {
    headerBackground,
  }
};
