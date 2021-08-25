import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar.js";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
    <ChakraProvider>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    </ChakraProvider>
  );

}

export default App;
