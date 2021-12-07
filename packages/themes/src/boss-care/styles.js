import background from './assets/background.svg';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  primary: '#4552CB',
  secondary: '#F1A852',
  tertiary: '#4552CB',
  quaternary: '#FEBB75',
  error: '#EB5757',
  success: '#27AE60',
  gray: ['#070821', '#202137', '#515264', '#838490', '#9c9ca6', '#cdced3', '#e6e6e9', '#FFFFFF'],
  gradients: {
    primary: 'linear-gradient(165.57deg, #4552CB 22.12%, #7145CB 77.88%)',
    secondary: 'linear-gradient(165.57deg, #F1A852 22.32%, #ED6D4E 77.88%)',
    tertiary: 'linear-gradient(165.57deg, #4552CB 22.12%, #2E1E7A 77.88%)',
    quaternary: 'linear-gradient(165.57deg, #FEBB75 22.12%, #FE8E75 77.88%)',
  },
  svgGradients: {
    primary: {
      from: '#4552CB',
      to: '#7145CB'
    },
    secondary: {
      from: '#4552CB',
      to: '#7145CB'
    },
    tertiary: {
      from: '#4552CB',
      to: '#2E1E7A'
    },
    quaternary: {
      from: '#4552CB',
      to: '#7145CB'
    },
  }
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Encode+Sans:wght@300;400;500;600;700&display=swap',
  fontFamily: 'Encode Sans, sans-serif',
  color: colors.gray[0],
  sizes: {
    base: 18,
  },
};

export const body = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundColor: colors.gray[7],
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[0],
};

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 8,
  normal: 12,
  large: 15,
  xLarge: 25,
};

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];
