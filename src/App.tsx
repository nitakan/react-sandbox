import HomePage from './pages/HomePage';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import CounterApp from './pages/CounterApp';
import { ChakraProvider } from '@chakra-ui/react';

const Router = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterApp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};



export default Router;
