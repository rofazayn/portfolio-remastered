import { createMuiTheme } from '@material-ui/core/styles';

export const muiThemeLight = createMuiTheme({
  typography: {
    fontFamily: 'Alegreya, Lato'
  },
  palette: {
    primary: {
      main: '#63ad97'
    },
    type: 'light'
  }
});

export const muiThemeDark = createMuiTheme({
  typography: {
    fontFamily: 'Alegreya, Lato'
  },
  palette: {
    primary: {
      main: '#63ad97'
    },
    type: 'dark'
  }
});
