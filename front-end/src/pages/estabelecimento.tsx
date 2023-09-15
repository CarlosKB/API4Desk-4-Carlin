import React from 'react';
import EstNestedList from '../components/reusable/EstNestedList'
import BottomNav from '../components/reusable/BottomNav';
import ParNestedList from '../components/reusable/ParNestedList'
import Footer from '../components/reusable/Footer';

function Estabelecimento() {
  return (
    <div className="App">
      <BottomNav />
      <ParNestedList />
      <Footer />
    </div>
  );
}

export default Estabelecimento

;
