import { makeStyles } from "@mui/styles";

const UseStyles = makeStyles({
  masterRoot: {
    background: "linear-gradient(45deg, #83A4D4 0%, #DCF2FF 100%)",
    boxSizing: "border-box",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },

  root: {
    // overflow: "hidden",
    margin: "0 auto",
    height: "100vh",
    maxWidth: "1200px",
    minWidth: "1024px",
    minHeight: "724px",
    paddingTop: "60px",
    paddingBottom: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    background: "linear-gradient(115deg, #83A4D4 0%, #DCF2FF 100%)",
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
