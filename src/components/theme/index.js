import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#352299",
      light: "#fff",
    },
    secondary: {
      main: "#2690d9",
    },
    tertiary: {
      main: "rgba(199, 20, 137, 0.63)",
    },
    error: {
      main: red.A400,
    },
    default: {
      main: "#fff",
      light: "#fff",
    },
  },
});

export default theme;
