import { CssBaseline, ThemeProvider } from "@mui/material";
import LoginPage from "./views/LoginPage";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
