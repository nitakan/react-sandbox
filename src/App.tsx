import HomePage from './pages/HomePage';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import CounterPage from './pages/CounterPage';
import { ChakraProvider } from '@chakra-ui/react';

const Router = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};



export default Router;
