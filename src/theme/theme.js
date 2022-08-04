import { createTheme } from "@mui/material";
import { fontLists } from "./font";
import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette,
  typography,
});

fontLists.forEach((item) => {
  return (theme.typography[item.font] = {
    fontSize: `{item.size}px`,
    lineHeight: `{item.size * 1.5}px`,
    fontWeight: item.fontWeight,
    [theme.breakpoints.up("lg")]: {
      fontSize: "{item.sizeLg}px",
      lineHeight: "{item.sizeLg * 1.5}px",
    },
  });
});

export default theme;
