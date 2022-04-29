import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import GlobalReset from '../../global/GlobalReset';
import GlobalTypography from '../../global/GlobalTypography';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Details from '../../pages/Details';
import { DataProvider } from '../../context/DataContext';
import { lightTheme, darkTheme } from '../../theme/themes';
import useDarkMode from '../../hooks/use-dark-mode.jsx';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </AnimatePresence>
  );
};

const MainRouter = () => {
  const [theme, themeToggler] = useDarkMode();

  const currTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <Router>
      <GlobalTypography />
      <ThemeProvider theme={currTheme}>
        <GlobalReset />
        <Navbar theme={theme} themeToggler={themeToggler} />
        <DataProvider>
          <AnimatedRoutes />
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
};

export default MainRouter;
