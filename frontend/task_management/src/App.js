import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/darktheme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      task manager

    </ThemeProvider>
  );
}

export default App;
