import {ThemeProvider} from "styled-components";
import {theme} from "./themes/themes";
import {Header} from "./layouts/Header/Header";
import {BrowserRouter} from "react-router-dom";
import {queryClient} from "./api/queryConfig";
import {QueryClientProvider} from "@tanstack/react-query";
import { Router } from "./router/Router";

function App() {

  return (
    <>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
               <QueryClientProvider client={queryClient}>
                 <Header/>
                 <Router/>
               </QueryClientProvider>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}

export default App
