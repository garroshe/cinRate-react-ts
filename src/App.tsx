import {ThemeProvider} from "styled-components";
import {theme} from "./themes/themes";
import {Header} from "./layouts/Header/Header.tsx";

function App() {

  return (
      <ThemeProvider theme={theme}>
          <Header/>
      </ThemeProvider>
  )
}

export default App
