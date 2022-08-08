import { CssBaseline, ThemeProvider } from "@mui/material";
import EntenteRoutes from "./Routes/index.js";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <EntenteRoutes />
    </ThemeProvider>
  );
}

export default App;
