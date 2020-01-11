import { createMuiTheme } from '@material-ui/core/styles';

export const muiThemeLight = createMuiTheme({
  typography: {
    fontFamily: 'Lato'
  },
  palette: {
    primary: {
      main: '#63ad97'
    },
    secondary: {
      main: '#ace6d5'
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
      main: '#63ad97'
    },
    secondary: {
      main: '#ace6d5'
    },
    type: 'dark'
  }
});
