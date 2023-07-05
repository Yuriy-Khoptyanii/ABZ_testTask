import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  typography: {
    fontFamily: ['Nunito', 'Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& label.Mui-focused': {
            color: '#7E7E7E',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#D0CFCF',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'r#D0CFCF',
            },
            '&:hover fieldset': {
              borderColor: '#D0CFCF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D0CFCF',
            },
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#D0CFCF',
          padding: '5px',
          marginRight: '7px',
          '&.Mui-checked': {
            color: '#00BDD3',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '-5px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: 'absolute',
          bottom: '-23px',
          left: '0',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.87)',
          fontSize: '16px',

          '&.MuiTooltip-tooltip': {
            '&.MuiTooltip-tooltipPlacementBottom': {
              marginTop: '2px',
            },
            '&.MuiTooltip-tooltipPlacementTop': {
              marginBottom: '2px',
            },
            '&.MuiTooltip-tooltipPlacementLeft': {
              marginRight: '2px',
            },
            '&.MuiTooltip-tooltipPlacementRight': {
              marginLeft: '2px',
            },
          },
        },
      },
    },
  },
});
