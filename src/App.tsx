import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions/Transactions";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
}
