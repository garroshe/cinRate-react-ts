import {ThemeProvider} from "styled-components";
import {theme} from "./themes/themes";
import {Header} from "./layouts/Header/Header.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Header/>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App
