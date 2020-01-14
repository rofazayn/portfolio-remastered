import { createMuiTheme } from '@material-ui/core/styles';

export const muiThemeLight = createMuiTheme({
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    primary: {
      main: '#FF0055'
    },
    secondary: {
      main: '#FF3377'
    },
    type: 'light'
  }
});

export const muiThemeDark = createMuiTheme({
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    primary: {
      main: '#FF77AF'
    },
    secondary: {
      main: '#FF4491'
    },
    type: 'dark'
  }
});
