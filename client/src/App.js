import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar.js";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <ChakraProvider>
        <Navbar/>
        <AppRouter/>
    </ChakraProvider>
  );
}

export default App;
