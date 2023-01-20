import { AutofpsSelect } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles({
  masterRoot: {
    background: "linear-gradient(45deg, #83A4D4 0%, #DCF2FF 100%)",
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    minWidth: "1300px",
  },

  root: {
    margin: "auto",
    maxWidth: "1300px",
    minWidth: "1024px",
  },

  navbar: {
    background: "linear-gradient(115deg, #83A4D4 0%, #DCF2FF 100%)",
    height: "100vh",
    width: "100vw",
  },

  defaultBackground: {
    background: "linear-gradient(45deg, #83A4D4 0%, #DCF2FF 100%)",
  },
  glassmorphism: {
    background:
      "linear-gradient(150deg, rgba(255,255,255,1), rgba(255,255,255,0.4))",
  },

  glassmorphismTitle: {
    background:
      "-webkit-linear-gradient(45deg, rgba(255,255,255,1), rgba(255,255,255,0.6))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  whiteFont: {
    color: "#FFFFFF",
  },
  errorFont: {
    color: "#FF0000",
  },
});

export default UseStyles;
