import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primaryUnclicked: {
            main: "#E77915"
        },
        primaryClicked: {
            main: "#EE9B00"
        },
        secondaryUnclicked: {
            main: "#0B3149"
        },
        secondaryClicked: {
            main: "#005F73"
        }
    },
});

export default theme;