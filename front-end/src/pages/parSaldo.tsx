import React from 'react';
import BottomNav from '../components/reusable/BottomNav';
import { ThemeProvider, createTheme } from '@mui/material';
import Footer from '../components/reusable/Footer';
import ParNestedList from '../components/reusable/ParNestedList';
//import BodyLendingPage from '../components/lendingpage/BodyLendingPage';


function ParSaldo() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#136935',
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BottomNav />
        <Footer />
        <ParNestedList />
        {/*<BodyLendingPage/>**/}
      </div>
    </ThemeProvider >
  );
}

export default ParSaldo;
