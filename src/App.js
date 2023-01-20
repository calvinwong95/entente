import { CssBaseline, ThemeProvider } from "@mui/material";
import EntenteRoutes from "./Routes/index.js";
import theme from "./theme/theme";
import { GlobalProvider } from "./context/GlobalContext.js";

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EntenteRoutes />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
